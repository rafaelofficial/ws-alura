// 1 - Function declarate
function printAnyText(text) {
    console.log(text);
}

// 2 - Function execute (1x or 2x)
printAnyText("Hello world");

// Three form of write function
function sum(x, y) {
    return x + y;
}

printAnyText(sum(2, 2));

function nameAndAge(name, age) {
    return `My name is ${name} and my age is ${age}`;
}

printAnyText(nameAndAge("Rafa", 33));
