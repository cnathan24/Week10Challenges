

const numbers = [29, 41, 53];

const sum = numbers.reduce((currentNum, nextNum) => {
    return currentNum + nextNum / numbers.length;
},0);

console.log(sum);