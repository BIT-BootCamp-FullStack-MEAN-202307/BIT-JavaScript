const listaNombres = [];

// do {
//     const nombre = prompt( 'Digita tu nombre' );
//     listaNombres.push( nombre );
// } while( listaNombres.length < 5 );

// console.log( listaNombres );

let continuar;

do {
    const nombre = prompt( `Digita tu nombre` );
    
    continuar = prompt( `Oye ${ nombre } deseas continuar S/N` );

    listaNombres.push( nombre );
} while( continuar.toLowerCase() != 'n' );


for( let nombre of listaNombres ) {
    console.log( ' > ' + nombre )
}

