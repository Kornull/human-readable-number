module.exports = function toReadable(numb) {
    const numbList = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    let tenList = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    let numbHundred = numb.toString().slice(0, 1);
    let tenNumber = numb.toString().slice(-2);
    let twoNumber = tenNumber.slice(0, 1);
    let firstNumber = tenNumber.slice(1);

    if (numb >= 100) {
        if (tenNumber === '00') {
            return `${numbList[+numbHundred]} hundred`;
        } else {

            if (0 < +tenNumber && +tenNumber < 20) {
                return `${numbList[+numbHundred]} hundred ${numbList[+tenNumber]}`;
            }

            if (20 <= +tenNumber < 100) {
                if (firstNumber === '0') {
                    return `${numbList[+numbHundred]} hundred ${tenList[+twoNumber]}`;
                } else if (0 < +firstNumber && +firstNumber < 10) {
                    return `${numbList[+numbHundred]} hundred ${tenList[+twoNumber]} ${numbList[+firstNumber]}`;
                }
            }
        }
    }
    if (20 <= numb && numb < 100) {
        if (firstNumber === '0') {
            return `${tenList[+twoNumber]}`;
        } else {
            return `${tenList[+twoNumber]} ${numbList[+firstNumber]}`;
        }
    }
    if (0 <= numb && numb < 20) {
        return numbList[numb];
    }
}
