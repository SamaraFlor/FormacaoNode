var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var leitor = new Reader();


 async function main(){
   var dados =  await leitor.Read("./curso.node.csv");

   var dadosProcessados = Processor.Process(dados);

   var usuario = new Table(dadosProcessados);

}

main();