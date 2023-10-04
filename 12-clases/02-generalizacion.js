// Generalizacion: Herencia
// JavaScript permite la herencia a 1 nivel (No permite herencias multiples)

class Persona {
    constructor( id, name ) {
        this.name = name;
        this.id = id;
    }
}

const alumnoArquitectura = new Persona( '7657343', 'Alisa', 25, 'female' );
console.log( alumnoArquitectura );

class Estudiante extends Persona {
    constructor( id, name, carrer, cost ) {
        super( id, name );         // Invoca al constructor de la clase padre

        this.carrer = carrer;
        this.grades = [];
        this.asignatures = [];
        this.cost = cost;
    }
}

class Profesor extends Persona {
    constructor( id, name, salary, position ) {
        super( id, name );         // Invoca al constructor de la clase padre

        this.salary = salary;
        this.position = position;
    }
}

const julioProfe = new Profesor( '325345', 'Julio', 9000, 'Math' );
console.log( julioProfe );

const hernanAlumno = new Estudiante( '3543534', 'Hernan', 'Ingenieria Industrial', 8000 );
console.log( hernanAlumno );