class Estudiante extends Persona {
    constructor( id, name, carrer, cost ) {
        super( id, name );         // Invoca al constructor de la clase padre

        this.carrer = carrer;
        this.grades = [];
        this.asignatures = [];
        this.cost = cost;
    }
}