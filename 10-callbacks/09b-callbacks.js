function suma( a, b ) {
    return a + b;
}


function danielHabla( numero1, numero2 ) {
    return `Daniel dice: este es un ${ numero1 } y un ${ numero2 }`;
}


function calcular( numero1, numero2, cb ) {
    return cb( numero1, numero2 );
}

console.log( calcular( 4, 5, suma ) );

console.log( calcular( 4, 5, ( a, b ) => {
    return a * b;
} ) );

console.log( calcular( 9, 11, danielHabla ) );
