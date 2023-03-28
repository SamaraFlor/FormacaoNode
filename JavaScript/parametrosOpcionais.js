
// quando atribuo um valo a ele tiramos a obrigatoriedade de passar parametro
//primeiro parametros obrigatorios depois os opcionais
function soma (a, b = 6){
    console.log(a + b);
} 

function sub(a, b, inverter = false){
   if (inverter) {
     console.log(a - b);
   }else{
    console.log(b - a);
   }
 

}

soma(8,3);
sub(4,5,true)