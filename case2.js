const PECAHAN_UANG = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
const totalHarga = 575650
const jumlahUang = 580000

function hitungKembalian(totalHarga, jumlahUang) {
    let jumlahKembalian = parseInt((jumlahUang - totalHarga)/100)*100
    if(jumlahKembalian <= 0) return false
    let i = 0
    let pecahanKembalian = {}
    while(jumlahKembalian > 0) {
        if(jumlahKembalian - PECAHAN_UANG[i] < 0) {
            i++
            continue
        }
        jumlahKembalian -= PECAHAN_UANG[i]
        if (pecahanKembalian[PECAHAN_UANG[i]]) {
            pecahanKembalian[PECAHAN_UANG[i]]++
        } else {
            pecahanKembalian[PECAHAN_UANG[i]] = 1
        }
    }
    return pecahanKembalian;
}

console.log(hitungKembalian(totalHarga, jumlahUang));