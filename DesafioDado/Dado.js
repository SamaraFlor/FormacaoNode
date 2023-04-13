class Dado{

    constructor(faces){
        this.faces = faces;
    }

    Jogar(){
        console.log ("Resultado " + this.getRandomInt(1, this.faces));

    }

    getRandomInt(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1 )) + min;
    }

}

var d6 = new Dado(6);
var d9 = new Dado(9);


d6.Jogar();
d9.Jogar();

