var nome = "Samara"; // escopo global
let nome2= "Alice";// quando e global ts mundo pode usar


//VAR dois escopos Global e local
//LET tem os dois escopos
function func1() {
    var sobrenome = "Flor";
    console.log("Ola meu nome é: " + nome  + " "+  sobrenome);
    console.log("Ola meu nome é: " + nome2);
    
}

function func2() {
    let sobrenome = "Abreu"// quando let usado na global so pode ser usado na função
    console.log("Ola meu nome é: " + nome + "  " + sobrenome);
    
}
func1();
func2();
console.log(nome2);

console.log("---------------------------------------------------------------------------------------------");

let a = 10 // global
let testar = true;

if (testar) {
    let b =43; //bloco
    console.log(a+b);
}

// var escopo global e local
//Let global,local e bloco