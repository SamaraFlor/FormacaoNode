class Animal{
    constructor(nome,idade,preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    Estoque(){
        return 10;
    }

    DonoDoAnimal(){
        console.log("Nome do Dono ");
    }
}

class Cachorro extends Animal{
    // adicionando funcionalidades novas
    //sobrecarga de construtor
    constructor(nome,idade,preco,raca,peso){
        super(nome,idade,preco);
        this.raca = raca;
        this.peso = peso;
    }
    Latir (){
        console.log("Au Au Au")
    }


    //reaproveitando metodo
    Estoque(){
        return 2;
    }

    DonoDoAnimal(){
        // classe mãe/ pegando a função e podemos reescrever
      super.DonoDoAnimal();
      console.log("sobrenome")
    }



}

var dog = new Cachorro("Sulpino",2,230,"buldog",21);
dog.Estoque();
dog.Latir();
dog.DonoDoAnimal();