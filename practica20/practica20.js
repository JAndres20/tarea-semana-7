'use strict'
function multiplicar(multiplicador,multiplicado){
    let suma = 0;
    for (let i=0; i < multiplicador; i++){
        suma = suma + multiplicado;
    }

    return suma;        
}
let primerNumero = Number (prompt("ingrse el multiplicador"));
let segundoNumero = Number(prompt("ingres multiplicado"));

let resultado =  multiplicar(primerNumero, segundoNumero);
alert(resultado);