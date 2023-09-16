const profession = {
    carrer: 'Developer'
}


const persona = {
    // propiedad: valor
    nombre: 'Juan',
    edad: 45,
    profession,
    isHombre: true,
    hobbies: [ 'JavaScript', 'Ver Netflix' ],
    contact: {
        email: [ 'jcjimenez29@misena.edu.co', 'jcarlosj@gmail.com' ],
        tel: [ '3197278885' ]
    },
    parents: [
        { name: 'Janeth', gender: 'Female' },
        { name: 'Dario', gender: 'Male' }
    ],
    info: function( ) {
        return `${ persona.parents[ 0 ].name } es la mama de ${ this.nombre }`
    },
    informacion: () => {
        return `${ this.parents[ 0 ].name } es la mama de ${ this.nombre }`
    },
}

console.log( persona.nombre );          // Sintaxis punto
console.log( persona[ 'nombre' ] );     // Sintaxis Array

console.log( persona.contact.email[ 1 ] );
console.log( persona.info() );
// console.log( persona.informacion() );

console.log( persona.parents[ 1 ].gender );
console.log( persona.parents[ 1 ][ 'gender' ] );


