class carro{
    constructor(marca, nome, ano, desempenho, cavalos){
        this.marca = marca;
        this.nome = nome;
        this.ano = ano;
        this.desempenho = desempenho;
        this.cavalos = cavalos;
    }

    saudar(){
        console.log(`Óla, meu carro é um ${this.nome}, da marca ${this.marca}, ele possui ${this.cavalos} de cavalos, com um torque de ${this.desempenho}, do ano de ${this.ano}. `)
    }
}

let carro1 = new carro ("Porche", "Porche 911 GTS", 2025, "62.2 kgfm", 541);
carro1.saudar();