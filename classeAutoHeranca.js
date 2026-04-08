class Automovel{
    constructor(marca, modelo, ano, cilindrada){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cilindrada = cilindrada;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.ano}, ${this.cilindrada}`
    }
}

class moto extends Automovel{
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }
    exibirDetalhes(){
        return `${super.exibirDetalhes()}, cilindrada: ${this.cilindrada}`;
    }

}
class carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
    exibirDetalhes(){
        return `${super.exibirDetalhes()}, portas: ${this.portas}`

}


let moto1 = new moto("BMW", "BMW R 1300 GS", 2026, 1300);
console.log(moto1.exibirDetalhes);

let carro1 = new carro("BWM", "BMW X-6 m- competition", 2025, 3.0);
console.log(carro1.exibirDetalhes);