const N = 11;
const inputString = [
    "Satu",
    "Sate",
    "Tujuh",
    "Tusuk",
    "Tujuh",
    "Sate",
    "Bonus",
    "Tiga",
    "Puluh",
    "Tujuh",
    "Tusuk"
]

function solve(N, input) {
    let tempArray = {}
    let matchString
    for(let i=0; i<N; i++) {
        if(tempArray[input[i]]) {
            if(!matchString) matchString = input[i]
            if(input[i] == matchString) {
                tempArray[matchString].push(i+1)
            }
            continue
        } else {
            tempArray[input[i]] = [i+1]
        }
    }
    return tempArray[matchString] ? tempArray[matchString]:false 
}

console.log(solve(N, inputString))