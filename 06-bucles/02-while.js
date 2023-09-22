// Sintaxis del While
// <declarar el inicio>
// while( <condicion> ) {
//     Sentencias

//     <incremento/decremento>
// }


/** Tabla de multiplicar a partir de un bucle for */
const numeroTabla = 9;
const resultados = [];

let i = 0;

while( i < 11 ) {
    console.log( `${ i } X ${ numeroTabla } = ${ i * numeroTabla }` );
    resultados.push( i * numeroTabla );

    i++;
}

console.log( resultados );