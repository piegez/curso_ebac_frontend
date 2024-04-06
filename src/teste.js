const alunos = [
    {nome: 'Isaiane', nota: 4},
    {nome: 'Sônia', nota: 3},
    {nome: 'Bárbara', nota: 10},
    {nome: 'Sebastião', nota: 7},
    {nome: 'Jardel', nota: 9}, 
    {nome: 'Itamar', nota: 8},
    {nome: 'Juliana', nota: 1}, 
    {nome: 'Lino', nota: 6},
    {nome: 'Sara', nota: 3},
    {nome: 'Júlia', nota: 5}];

function alunosAprovados(alunos) {
    return alunos.nota >= 6;
}

const alunosAcimaMedia = alunos.filter(alunosAprovados)

console.log(alunosAcimaMedia)