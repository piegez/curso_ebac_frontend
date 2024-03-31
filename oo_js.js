class Professor {
    constructor(nome) {
        this.nome = nome;
    }

    setAulas(quantidadeAulas) {
        this.quantidadeAulas = quantidadeAulas;
    }

    setHorasTrabalhadas(horasPorAula) {
        this.horasPorAula = horasPorAula;
    }

    calcularHorasPorSemana() {
        return this.quantidadeAulas * this.horasPorAula;
    }

    getInfo() {
        return `O professor ${this.nome} dá ${this.quantidadeAulas} aulas e trabalha ${this.calcularHorasPorSemana()} horas por semana.`;
    }
}


class ProfessorJunior extends Professor {}

class ProfessorSenior extends Professor {
    calcularHorasPorSemana() {

        return this.quantidadeAulas * this.horasPorAula + 5; 
    }
}

const professorJoao = new ProfessorJunior('João');
professorJoao.setAulas(5);
professorJoao.setHorasTrabalhadas(4);

const professorMaria = new ProfessorJunior('Maria');
professorMaria.setAulas(4);
professorMaria.setHorasTrabalhadas(3);

const professorPedro = new ProfessorSenior('Pedro');
professorPedro.setAulas(6);
professorPedro.setHorasTrabalhadas(5);


console.log(professorJoao.getInfo());
console.log(professorMaria.getInfo());
console.log(professorPedro.getInfo());
