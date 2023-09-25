// () => {}

/** Callback: Una funcion que recibe como parametro otra funcion */

const frutas = [ 'Mango',  ,'Mandarina', 'Mangostino' ];

frutas.push( 'Mora' );

// Sitaxis
// [lista].forEach( <Callback> );

let suma = 0;
frutas.forEach( ( fruta, index ) => {      // 1er: Valor dentro del indice, 2do, indice de la lista
    console.log( index + 1, fruta );

    suma += index;

});

console.log( suma );
console.log( frutas );