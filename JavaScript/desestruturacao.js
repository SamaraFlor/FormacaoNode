var escola ={
    escola: "Vital Brasil",
    diretora:"Maria",
    endereco: "Rua 21, Butanta",
    ano: 2021
}

//com mais linhas 
var diretora = escola.diretora;
console.log(diretora);

//diminuindo linhas de codigo
//desestruturar, pegar o objeto de dento
var { escola,endereco,ano } = escola;
console.log(escola, endereco , ano);



