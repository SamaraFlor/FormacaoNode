const fs = require ("fs");


fs.readFile("./ler.arquivo.txt", {encoding: 'utf-8'},(erro,dados)=>{

    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log(dados);
    }
})

fs.writeFile("./ler.arquivp.txt","escrevendoooo",(err) => {
    if (err) {
        console.log("Erro");
    }
})