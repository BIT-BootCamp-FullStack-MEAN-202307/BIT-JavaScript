/** Objetos literales, Explicitos */
const persona = {
    nombre: 'Diego',                        // Atributo/Propiedad/Llaves
    profesion: 'Empresario del turismo',
    edad: 23,
    // habla: function() {
    //     console.log( 'Bla bla bla' );
    // },
    // canta: function() {                     // Metodo
    //     return 'La la la la';
    // },
    // bosteza: function() {
    //     console.log( 'Zzzz...');
    // },
    // sePresenta: function() {
    //     console.log( `Hola mi nombre es ${ this.nombre } y bla bla bla bla` );
    // }
};


nombre = 'Diego';       // Variable (Sola en el mundo, no pertenece a nada, ni a nadie)
function sumar() {}     // Function (Sola en el mundo, no pertenece a nada, ni a nadie)


// console.log( persona.nombre );
// console.log( persona[ 'nombre' ] );

// console.log( 'Diego: ', persona.canta() );
// for( let key of Object.keys( persona ) ) {      // Object.keys( persona ) --> [ 'nombre', 'profesion', 'edad' ]
//     console.log( key );
// }

// for( let value of Object.values( persona ) ) {      // Object.keys( persona ) --> [ 'Diego', 'Empresario del turismo', 23 ]
//     console.log( value );
// }

// for( let object of Object.entries( persona ) ) {      // Object.entries( persona ) --> [ [ name: 'Diego' ], [ profesion: 'Empresario del turismo' ], [ edad: 23 ] ]
//     console.log( object[ 0 ], object[ 1 ] );
// }

for( let [ key, value ] of Object.entries( persona ) ) {      // Object.entries( persona ) --> [ [ name: 'Diego' ], [ profesion: 'Empresario del turismo' ], [ edad: 23 ] ]
    console.log( ' >>> ', key, value );
}