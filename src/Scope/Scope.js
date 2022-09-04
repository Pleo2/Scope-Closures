var a // Declarando
var a = 'aa' // Redeclaracion
var b = 'b' // Declarando & asignando 
b = 'bb' // Reasignacion

//* Global Scope

var fruit = 'apple'

console.log(bestFruit()); 
function bestFruit() {
    return fruit    
}

//* Function Scope / local
// Solo las function en si puede acceder a esa variable

console.log(greetins());

function greetins() {
    let userName = 'pleo2'
    console.log(userName);
    if (userName === "pleo2") {
        return (`Hello ${userName}`);
    }
}
// Esta variable no puede ser llamada a pesar que existe dentro de 'greetins'

// console.log(userName);

//* Block Scope

// El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}.

frutasBlock()
function frutasBlock() {
    if (true){
        var fruit1 = 'apple' // Function scope
        let fruit2 = 'kiwi' // Block scope
        const fruit3 = 'orange' // Block scope
    }    
    console.log(fruit1);
    //console.log(fruit2); -> C: fruit2 is not defined - para el programa
    //console.log(fruit3);
}


// * Stric mode 
// 'use strict'
// Esto permite que javaScript aplique una serie de reglas que crean un codigo mas optimizado y rapido
name()
function name(params) {
    'use strict'
    a = 3
    console.log(a); // crea un error a la hora de correrlo
}
