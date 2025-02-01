const input = 10;

const hyphenateDigits = (number) => {
    let digits = number.toString().split('');

    return digits.join('-');
};

hyphenateDigits(input); 
console.log(hyphenateDigits(input)); // '1-0'

const secondInput = 1;

hyphenateDigits(secondInput); 
console.log(hyphenateDigits(secondInput)); // '1'

const thirdInput = 11234;

hyphenateDigits(thirdInput); 
console.log(hyphenateDigits(thirdInput)); // '1-1-2-3-4'