// Sintaxis del bucle Do-While
// <Inicio>
// do {
//     Sentencias
//     <incremento/decremento>
// } while( <condicion> );


let counter = 0;

do {
    console.log( 'Hola!' );
    counter++;
} while( counter < 1 ); // Si lo que esta aqui se cumple, deja de volver al do, es decir no itera mas

/** Tabla de multiplicar a partir de un bucle for */
const numeroTabla = 9;
const resultados = [];
let i = 0;

do {
    console.log( `${ i } X ${ numeroTabla } = ${ i * numeroTabla }` );
    resultados.push( i * numeroTabla );

    i++;
} while( i < 11 );
