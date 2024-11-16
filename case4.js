const moment = require('moment');

const CUTI_KANTOR_PER_TAHUN = 14
const PROBATION_PERIOD = 180
const MAX_LEAVE_PERIOD = 3

const inputJumlahCutiBersama = 7
const inputJoinDate = '2021-05-01'
const inputLeaveStartDate = '2021-12-09'
const inputLeavePeriod = 1

function verifyLeave(jumlahCutiBersama, joinDate, leaveStartDate, leavePeriod) {
    let kuotaCuti
    if(leavePeriod > MAX_LEAVE_PERIOD) {
        console.log("Tidak boleh cuti berturut-turut lebih dari 3 hari")
        return false
    }
    if(moment(joinDate).add(PROBATION_PERIOD, 'days') > moment(leaveStartDate)) {
        console.log("Anda baru bisa cuti setelah 3 bulan dari tanggal join")
        return false
    }
    if(joinDate.substring(0,4) !== leaveStartDate.substring(0,4)) {
        kuotaCuti = 14 - jumlahCutiBersama
    } else {
        const kuotaCutiPribadi = moment(`${joinDate.substring(0,4)}-12-31`).diff(moment(joinDate).add(PROBATION_PERIOD, 'days'), 'days')
        kuotaCuti = kuotaCutiPribadi / 365 * (CUTI_KANTOR_PER_TAHUN - jumlahCutiBersama);
    }
    if(leavePeriod > parseInt(kuotaCuti,0)) {
        console.log("Kuota cuti tidak mencukupi")
        return false
    }
    return true
}

console.log(verifyLeave(inputJumlahCutiBersama, inputJoinDate, inputLeaveStartDate, inputLeavePeriod))