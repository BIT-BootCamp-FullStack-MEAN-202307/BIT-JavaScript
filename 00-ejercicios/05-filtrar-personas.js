const personas = [
    { name: 'Juan', age: 45, gender: 'male' },          // 0
    { name: 'Sofia', age: 13, gender: 'female' },       // 1
    { name: 'Sofia', age: 67, gender: 'female' },       // 2
    { name: 'Sofia', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Luisa', age: 17, gender: 'female' }        // 6
];

/** A partir de la lista anterior determinar:

    1. Cantidad de hombres y mujeres.
    2. Promedio de edades de hombres y mujeres.
    3. Cuántas personas se llaman igual.     
*/


function buscaRepetidos( values ) {

    const repetidos = [];

    for( let i = 0; i < values.length; i++ ) {
        // console.log( i, values[ i ] );

        const nombre = values[ i ].name;

        const personaEncontrada = repetidos.find( ( item ) => {
            return item.nombre == nombre;
        } );

        // console.log( '>>>> ', personaEncontrada );

        if( personaEncontrada ) {
            personaEncontrada.cantidad = personaEncontrada.cantidad + 1;
        }
        else {
            const persona = {
                nombre,
                cantidad: 1
            }
        
            repetidos.push( persona );
        }

    }

    return repetidos;
}

const repetidos = buscaRepetidos( personas );

// console.log( repetidos );

for( let i = 0; i < repetidos.length; i++ ) {
    if( repetidos[ i ].cantidad > 1 ) {
        console.log( `${ repetidos[ i ].nombre } esta repetido ${ repetidos[ i ].cantidad } veces` );
    }
}