var nome = "Alice";
var idade = 12;
var brinquedo = "avião azul";

var escola ={
    escola: "Vital Brasil",
    diretora:"Maria",
    endereco: "Rua 21, Butanta",
    ano: 2021
}
// so funciona quando o dado é var ou let, e não precisa declarar o nome do campo na frente ex nome: nome
var user ={
    nome,
    idade,
    brinquedo,
    //Operador Spread, ... trazendo dados da escola para objeto user
    ...escola
}

console.log(user);




