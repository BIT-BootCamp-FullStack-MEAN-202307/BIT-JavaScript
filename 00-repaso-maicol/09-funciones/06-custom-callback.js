function suma( number1, number2 ) {
    return number1 + number2;
}

function restar( number1, number2 ) {
    return number1 - number2;
}

function calcular( n1, n2, cb ) {
    return cb( n1, n2 );
}

/** Implementamos el Callback personalizado */
let resultado = calcular( 3, 6, restar );
console.log( resultado );

resultado = calcular( 3, 6, suma );
console.log( resultado );