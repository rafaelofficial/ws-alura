const text1 = "Hello world";
const text2 = 'Hello world';
const senha = 'senhasuperseguramano';
const stringOfNumbers = '1234567890';

const name = 'Rafa';
const citation = 'The ' + name + ' said "Hi"';
console.log(citation);

/*
Foram desenvolvidos diversos conjuntos de caracteres, 
desde os específicos de cada linguagem como Western, 
Latin-US, Japanese e assim por diante, 
até o ASCII (American Standard Code for Information Interchange ou ”Código Padrão Americano para o Intercâmbio de Informação”).
e a partir de 2007 foi adotado o formato Unicode. 
O padrão UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, 
em tradução livre) é utilizado como padrão na web até hoje.
O JavaScript usa, por padrão, o UTF-16.
*/
// Unicode
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Working with string
const city = "belo horizonte";
const input = "Belo Horizonte";

const inputMin = input.toLowerCase();

console.log(city === inputMin);

const password = "mypassword123";
console.log(password.length);

const isName = "Rafa";
const isAge = 2022-1989;
const isBirthCity = "Americana - São Paulo";


const isPresentation = `My name is ${isName}, my age is ${isAge} and my birth city is ${isBirthCity}`;
console.log(isPresentation);
