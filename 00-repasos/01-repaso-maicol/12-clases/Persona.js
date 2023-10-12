const persona = {};   // Object

const persona1 = {
    nombre: 'Maria',
    cargo: '',
};

const persona2 = {
    nombre: 'Ana',
    profesion: ''
};

// Clases: Estrucutas, moldes, plantillas... POO, Creamos un nuevo tipo de dato
// Estudiante
class Persona {
    // Atributos
    #name;   // private

    // Constructor
    constructor( nombre, edad ) {
        // Definir valores por defecto o para ejercutar funciones inmediatamente se crea el objeto
        console.log( 'Hola soy Persona' );

        this.#name = nombre;
        this.age = edad;
    
    }
    // Getters & Setters
    get primerNombre() {        // Esta definicion de Getter se define como Funcion pero se comporta como propiedad o atributo de la clase
        return this.#name;
    }
    set primerNombre( value ) {
        this.#name = value;
    }

    // Metodos
}

const juanita = new Persona( 'Maicol', 23 );
juanita.primerNombre = 'Juanita';

console.log( juanita.primerNombre );
console.log( juanita.name );

console.log( persona );
console.log( juanita );

