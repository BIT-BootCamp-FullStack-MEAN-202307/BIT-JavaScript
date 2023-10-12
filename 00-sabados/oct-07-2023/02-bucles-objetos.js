const fruta = {
    // key: value
    nombre: 'Manzana',
    precio: 9
}

// console.log( fruta );
// console.log( fruta.nombre );
// console.log( fruta.precio );

// [ 2, 4, 7, 4, 1 ]

const frutas = [
    { nombre: 'Mandarina', precio: 11 },                // 0
    { nombre: 'Mango', precio: 15 },                    // 1
    fruta,                                              // 2
    { nombre: 'Mangostino', precio: 35, cantidad: 12 }  // 3
];


// frutas.length ---> 4
for (let i = 0; i < frutas.length; i++) {
    // console.log( frutas[ i ].nombre );      // Sintaxis punto    
    // console.log( frutas[ i ][ 'nombre' ] ); // Sintaxis array    

    if( frutas[ i ].precio < 10 ) {
        console.log( `La fruta ${ frutas[ i ].nombre } tiene un valor inferior a 10 con un valor de ${ frutas[ i ].precio }` );
    } 
}