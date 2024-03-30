// primeiro vou criar a classe com as instâncias
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

// determinando o que via ser considerado final
class ProfessorFinal extends Professor {
    constructor(nome) {
        super(nome);
    }
}

//criando constantes 
const professorJoao = new  ProfessorFinal('João');
professorJoao.setAulas(5);
professorJoao.setHorasTrabalhadas(4);

const professorMaria = new  ProfessorFinal('Maria');
professorMaria.setAulas(4);
professorMaria.setHorasTrabalhadas(3);

const professorPedro = new  ProfessorFinal('Pedro');
professorPedro.setAulas(6);
professorPedro.setHorasTrabalhadas(5);

//chamando as constantes
console.log(professorJoao.getInfo());
console.log(professorMaria.getInfo());
console.log(professorPedro.getInfo());