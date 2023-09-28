function suma ( a, b ) {
    return a + b;
}

function multiplicacion( a, b ) {
    return a * b;
}

const resultadoSuma = suma( 9, 9 );
const resultadoFinal = multiplicacion( resultadoSuma, 2 );
console.log( resultadoFinal );