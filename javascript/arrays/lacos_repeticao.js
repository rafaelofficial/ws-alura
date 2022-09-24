const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const media = [10, 7, 9, 6];
let listaDeNotasAlunos = [alunos, media];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasAlunos[0][indice] + ', sua média é: ' + listaDeNotasAlunos[1][indice];
    } else {
        return 'Aluno não cadastrado';
    }
}

console.log(exibeNomeNota("Maria"));
