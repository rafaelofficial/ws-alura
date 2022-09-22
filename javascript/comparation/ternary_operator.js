// ternary operator
const ageMinimum = 18;
let ageComsumer = 16;

// commom if and else
if (ageComsumer >= ageMinimum) {
    console.log("beer");
} else {
    console.log("juice");
}
// ternary operator
ageComsumer = 21;
console.log(ageComsumer >= ageMinimum ? "beer" : "juice");
