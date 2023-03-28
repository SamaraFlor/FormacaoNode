var gripe ={
    nome: "Alice",
    vacina: "Gripe a",
    lote: 2107,
    valor: 300
}

var Coronavirus ={
    nome: "Manoela",
    vacina: "pfizer",
    lote: 3478,
    valor: 500
}

var dengue ={
    nome: "Maria",
    vacina:"dengue xx",
    lote:0987,
    valor: 100
}

var users = [gripe,Coronavirus,dengue];

var usuario = users.find (user => user.valor > 100 && user.valor < 800);

console.log(usuario);