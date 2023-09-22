/** forEach: Itera de 1 en 1 hacia delante y solo extrae el valor dentro del campo de la lista y el indice */
const frutas = [ 'Mango',  ,'Mandarina', 'Mangostino' ];

frutas.push( 'Mora' );

// Sitaxis
// [lista].forEach( <Callback> );

let suma = 0;
frutas.forEach( function( fruta, index ) {      // 1er: Valor dentro del indice, 2do, indice de la lista
    console.log( index + 1, fruta );

    suma += index;

});

console.log( suma );
console.log( frutas );