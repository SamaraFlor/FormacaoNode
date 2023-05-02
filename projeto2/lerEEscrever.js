const fs = require('fs');


fs.readFile("./arquivos.json",{encoding: 'utf-8'},(erro,dados)=> {
    if (erro) {
        console.log("Aconteceu um erro")
    }else{
        var conteudo = JSON.parse(dados);// TEXTO PARA OBJETO JS (parse)
        conteudo.nome = "Marina"

        // obj pata texto(stringfy)
        fs.writeFile("./arquivos.json",JSON.stringify(conteudo),(erro) => {
            if (erro) {
                console.log("Aconteceu um erro");
        }
    })
          
    }  
});


