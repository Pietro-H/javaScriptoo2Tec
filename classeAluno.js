class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    };
    calculaMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
    obterStatus() {
        const media = this.calculaMedia()

        if (media >= 7) {
            return "Aprovado"
        } else if (media >= 5) {
            return "Recuperação"
        } else {
            return "Reprovado"
        }
    }

    exibirRelatorio() {
        console.log(`=================================`)
        console.log(`Relatorio do aluno ${this.nome}`);
        console.log(`Matricula ${this.matricula}`);
        console.log(`Media Final ${this.calculaMedia()}`);
        console.log(`Status ${this.obterStatus()}`);
        console.log(`=================================`)
    }
}

const turma = [
        new Aluno("Luiz Frez", "GCM5050", [9.1, 8.5, 8.8]),
        new Aluno("Pietro Pereira", "GCM5051", [9.8, 9.2, 8.9]),
        new Aluno("Cauan Stipp", "GCM5052", [9.6, 9.2, 8.7]),
        new Aluno("Bruno Wigers", "GCM5053", [4.8, 3.2, 0.8]),
        new Aluno("Matheus Calixto", "GCM5054", [0.9, 1.5, 0.0]),
    ]

console.log(turma[1]);

for (let i = 0; i < turma.length; i++ ){
    turma[i].exibirRelatorio();
}

//let Aluno1 = new Aluno("Pietro", 55050, [8, 8, 7, 8, 9, 9]);

//console.log(Aluno1.calculaMedia());
//console.log(Aluno1.obterStatus());

//aluno1.exibirRelatorio();