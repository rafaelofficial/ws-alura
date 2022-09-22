// type data
// booleans

// conversão implícita
const numero = 450;
const numeroString = Number("450");

// Number()
// String()
console.log(numero + numeroString);

// conversão explicita
let telefone = 12341234;
// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + String(telefone));