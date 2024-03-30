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
    
    class ProfessorMatematica {
        constructor(nome) {
        this.professor = new Professor(nome);
        }
    
        setAulas(quantidadeAulas) {
        this.professor.setAulas(quantidadeAulas);
        }
    
        setHorasTrabalhadas(horasPorAula) {
        this.professor.setHorasTrabalhadas(horasPorAula);
        }
    
        getInfo() {
        return this.professor.getInfo();
        }
    }
    
    class ProfessorHistoria {
        constructor(nome) {
        this.professor = new Professor(nome);
        }
    
        setAulas(quantidadeAulas) {
        this.professor.setAulas(quantidadeAulas);
        }
    
        setHorasTrabalhadas(horasPorAula) {
        this.professor.setHorasTrabalhadas(horasPorAula);
        }
    
        getInfo() {
        return this.professor.getInfo();
        }
    }
    
    const professorJoao = new ProfessorMatematica('João');
    professorJoao.setAulas(5);
    professorJoao.setHorasTrabalhadas(4);
    
    const professorMaria = new ProfessorHistoria('Maria');
    professorMaria.setAulas(4);
    professorMaria.setHorasTrabalhadas(3);
    
    const professorPedro = new ProfessorMatematica('Pedro');
    professorPedro.setAulas(6);
    professorPedro.setHorasTrabalhadas(5);
    
    // Exibindo resultados
    console.log(professorJoao.getInfo());
    console.log(professorMaria.getInfo());
    console.log(professorPedro.getInfo());