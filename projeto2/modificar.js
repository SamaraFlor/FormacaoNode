const fs = require('fs');

modificarUsuario("Carlos","Silva");

function modificarUsuario(nome,sobrenome) {
    fs.readFile("./arquivos.json",{encoding: 'utf-8'},(erro,dados)=> {
        if (erro) {
            console.log("Aconteceu um erro")
        }else{
            var conteudo = JSON.parse(dados);// TEXTO PARA OBJETO JS (parse)
            conteudo.nome = nome
            conteudo.sobrenome = sobrenome
    
            // obj pata texto(stringfy)
            fs.writeFile("./arquivos.json",JSON.stringify(conteudo),(erro) => {
                if (erro) {
                    console.log("Aconteceu um erro");
            }
        })
              
        }  
    });
    
}