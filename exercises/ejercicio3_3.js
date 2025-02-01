const input1 = 'string';

const reverseString = (string) => {
    let result = '';
    result = `${string.length} `;

    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }

    return result;
};

reverseString(input1); // '6 gnirts'
console.log(reverseString(input1));

const input2 = 'variable';

reverseString(input2); // '8 elbairav'
console.log(reverseString(input2));

const input3 = 'pointer';

reverseString(input3); // '7 retniop'
console.log(reverseString(input3));
