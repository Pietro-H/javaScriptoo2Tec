class Animal{
    fazerSom(){
        console.log("som generico de animal...");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐕🐕🐕")
    }
}

class Paca extends Animal{
    fazerSom(){
        console.log("AIHH AIHH AIHH 🐗🐗🐗")
    }
}

class Pato extends Animal{
    fazerSom(){
        console.log("QUACK QUACK QUACK 🦆🦆🦆")
    }
}

class Vaca extends Animal{
    fazerSom(){
        console.log("MUUUUUUUU 🐄🐄🐄")
    }
}

const meusObjetos = [new Cachorro(), new Paca(), new Pato(), new Vaca()];


for (let i = 0; i < meusObjetos.length; i++ ){
    meusObjetos[i].fazerSom();
}