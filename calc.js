const args = process.argv.slice(2);

var operador = args[0];
var resultado = 0;

for (let index = 1; index < args.length; index++) {

     if (operador == "-") {
         
        if(index == 1) resultado = args[index];
        else resultado -= args[index];
         
    } else if (operador == "+"){
        resultado += parseInt(args[index]);
    }
}
console.log(`resultado: ${resultado}`);