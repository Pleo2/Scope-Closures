// Se entiende por closures a todas esa functions que tienen otra dentro y pueden acceder a las variable superiores

const myGlobal = 0;

MyFunction();
function MyFunction() {
  console.log(myGlobal);
  const numberFunction1 = 1;

  function parent() {
    console.log(myGlobal, numberFunction1);
    const numberFunction2 = 2;

    function children() {
      console.log(myGlobal, numberFunction1, numberFunction2);
    }
    
    return children(); // return children dentro de el parent
  }
  
  return parent(); // return parent dentro de la Myfuction
}

// ejemplo 2

function mostrarNombre() {
  const name = "Pleo2";

  function imprimirNombre() {
    return `El nomber es: \n${name}`;
  }
  return imprimirNombre;
}

const M = mostrarNombre();

console.log(M);
console.log(M());
