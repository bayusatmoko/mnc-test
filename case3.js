const COMPLIMENT_CHAR = {
    "<": ">",
    "{": "}",
    "[": "]"
}
const input = '[[{[[<{{{{[[[<[{[[<{{{{[{[{[[[<<{<{[{<<<[[<[{[<{{[{[<[[<<[{<<[[[{<[{[[{{<<>[<<{{<<{[[[<{}{[{{{[[{{[[<[{}]>]]}}]]}}}]}>]]]}>>}}>>]>}}]]}]>}]]]>>}]>>]]>]}]}}>]}]>]]>>>}]}>}>>]]]}]}]}}}}>]]}]>]]]}}}}>]]}]]'

function isCompliment(chr1, chr2) {
    if(!Object.keys(COMPLIMENT_CHAR).includes(chr1)) return false
    return COMPLIMENT_CHAR[chr1] == chr2
}

function validateString(input) {
    let inputArr = input.split('')
    let leftPointer = 0
    let rightPointer = inputArr.length - 1
    while(leftPointer <= rightPointer) {
        if(isCompliment(inputArr[leftPointer], inputArr[leftPointer+1])) {
            leftPointer+=2
            continue
        }
        if(isCompliment(inputArr[rightPointer-1], inputArr[rightPointer])) {
            rightPointer-=2;
            continue
        }
        if(isCompliment(inputArr[leftPointer], inputArr[rightPointer])) {
            leftPointer++
            rightPointer--
            continue
        }
        return false
    }
    return true
}

console.log(validateString(input))