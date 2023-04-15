class LerArquivos{
    Ler(caminho){
        console.log("Lendo arquivos..........")

    }
}

class EscreverArquivos{
   Escrever(arquivo,conteudo){
        console.log("Escrever conteudo..........")

    }
}

class CriarArquivos{
    Criar(nome){
         console.log("Criar  arquivos..........")
 
     }
 }

 class DeletarArquivos{
    Deletar(nome){
         console.log("Destruir  arquivos..........")
 
     }
 }

 
class ManipulandoArquivos{
    constructor(nome){
        this.arquivo = nome;
        this.lerArquivos = new LerArquivos();
        this.escreverArquivos = new EscreverArquivos();
        this.criarArquivos = new CriarArquivos();
        this.deletarArquivos = new DeletarArquivos();
    }

}

class GerenciadordeUsuarios{
    constructor(){
        this.criarArquivos = new CriarArquivos();
        this.escreverArquivos = new EscreverArquivos();
    }

    Salvarlista(lista){
        this.criarArquivos.Criar("arquivo.txt");
        this.escreverArquivos.Escrever("escrever.txt", lista);

    }

}

var manipulador = new ManipulandoArquivos("arquivos.txt");

manipulador.criarArquivos.Criar();

//um objeto dentro de outro