// Arrow function
const presentationArrow = isName => `My name is ${isName}`;
const sum = (x, y) => x + y;

console.log(presentationArrow("Rafael"));
console.log(sum(5, 9));

// Arrow function with more one line of instruction
const sumNumberSmall = (x, y) => {
    if (x > 10 || y > 10) {
        return "Only number of 1 and 9";
    } else {
        return x + y;
    }
}

console.log(sumNumberSmall(3, 7));
