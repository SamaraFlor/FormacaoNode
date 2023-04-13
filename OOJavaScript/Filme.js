class Filme{

    constructor(titulo,ano,genero,diretor,duracao){

        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duraca0 = duracao;
        this.atores = [];
    }

    Reproduzir(){
        console.log("Reproduzindo");
    }
    Pausar(){
        console.log("Pausar ||");
    }
    Avancar(){
        console.log("Avançar >>");
    }
    Voltar(){
        console.log("<< Voltar>>");
    }
    Fechar(){
        console.log("Fechar");
    }
}

var hulk = new Filme();
var vingadores = new Filme();
vingadores.Reproduzir();

var batman = new Filme("batman", 2017, "ação", "Alguem", 2)
batman.Avancar();
