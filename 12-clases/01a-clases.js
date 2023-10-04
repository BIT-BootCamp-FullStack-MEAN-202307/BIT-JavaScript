class Persona {
    // Atributes
    eyes = 2;
    brain = 1;

    // Constructor
    constructor( name = 'NN' ) {
        // Atributos que definimos por defecto o asignados usando el constructor
        this.gender = undefined;
        this.name = name;
        this.age = 0;
    }

    // Methods
    saluda() {
        if( this.age < 3 ) {
            console.log( 'Da da gugu' );
        }
        else {
            console.log( `Hola soy ${ this.name }` );
        }
    }
}

// const ninio1 = new Persona();
// const ninio2 = new Persona( 'Pedrito' );

// console.log( ninio1 );
// console.log( ninio2 );

// ninio2.name = 'Elisa';
// ninio2.gender = 'female';
// ninio2.age = 10;

// console.log( ninio2 );

// ninio1.saluda();
// ninio2.saluda();

const nombres = [ 'Pedro', 'Juan', 'Ana', 'Sofia', 'Luis' ];
const personasCreadas = [];

for( let i = 0; i < nombres.length; i++ ) {
    personasCreadas.push( new Persona( nombres[ i ] ) );
}

console.log( personasCreadas );