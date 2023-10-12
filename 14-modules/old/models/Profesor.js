class Profesor extends Persona {
    constructor( id, name, salary, position ) {
        super( id, name );         // Invoca al constructor de la clase padre

        this.salary = salary;
        this.position = position;
    }
}