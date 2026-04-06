class contaBancaria{

    #saldo = 0;

    constructor(titular){
        this.titular = titular;
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de ${valor} feito.`)
        }
    }
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saldo de R$ ${valor} feito.`)
        } else {
            console.log("Saldo insuficiente ou valor invalido.")
        }
    }


    exibirSaldo(){
        return `Olá, seu saldo é ${this.#saldo}`
    }
}


const conta01 = new contaBancaria("Elvis Preslei, Bluezão")
conta01.depositar(1000)
conta01.depositar(856)
conta01.depositar(395)
conta01.depositar(921)
conta01.sacar(1293)
console.log(conta01.exibirSaldo())