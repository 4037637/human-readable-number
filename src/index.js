module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const smTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const bgTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    number = number + ''
    if (number >= 0 && number < 10) {
        if (number == 0) {
            humanReadNum = 'zero'
        } else {
            humanReadNum = units[number]  
        }      
    } else if (number > 9 && number <20) {
        humanReadNum = smTens[number[1]]    
    } else if (number > 19 && number < 100) {
        if (number[1] == 0) {
            humanReadNum = bgTens[number[0]]
        } else {
            humanReadNum = bgTens[number[0]] + ' ' + units[number[1]]
        }  
    } else {
        if (number[1] == 0 && number[2] == 0) {
            humanReadNum = units[number[0]] + ' hundred'
        } else if (number[1] == 0) {
            humanReadNum = units[number[0]] + ' hundred ' + units[number[2]]
        } else if (number[1] == 1) {
            humanReadNum = units[number[0]] + ' hundred ' + smTens[number[2]]
        } else if (number[2] == 0) {
            humanReadNum = units[number[0]] + ' hundred ' + bgTens[number[1]]
        } else {
            humanReadNum = units[number[0]] + ' hundred ' + bgTens[number[1]] + ' ' + units[number[2]]
        } 
    }
    return humanReadNum
}