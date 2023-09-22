// Sintaxis
// for( inicio; condicion; incremento/decremento ) {
//      Sentencias
// }

for( let i = 0; i < 10; i+=2 ) {
    console.log( `Hola ${ i }` );
}

/** Tabla de multiplicar a partir de un bucle for */
let numeroTabla = 9;
const resultados = [];

for( let i = 0; i < 11; i++ ) {
    console.log( `${ i } X ${ numeroTabla } = ${ i * numeroTabla }` );
    resultados.push( i * numeroTabla );
}

console.log( resultados );

let counter = 0;

for( let i = 0; i < resultados.length; i++ ) {
    console.log( resultados[ i ] );

    if( resultados[ i ] % 2 != 0 ) {
        counter++;
    }

}

console.log( 'La cantidad de # impares de la tabla del 9 son: ' + counter );