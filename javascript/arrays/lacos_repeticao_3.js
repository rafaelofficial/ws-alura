
const notas = [10, 6, 5, 8, 7, 9];

let somaNotas = 0;
for (let index = 0; index < notas.length; index++) {
    somaNotas += notas[index];
}

let media = somaNotas / notas.length;
console.log(media);
