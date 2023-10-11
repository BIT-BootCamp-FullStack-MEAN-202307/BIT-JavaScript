import { Persona } from './Persona.js';

class Estudiante extends Persona {
    constructor( id, name, carrer, cost ) {
        super( id, name );         // Invoca al constructor de la clase padre

        this.carrer = carrer;
        this.grades = [];
        this.asignatures = [];
        this.cost = cost;
    }
}

function suma( a, b ) {
    return a + b;
}

const resta = ( a, b ) => {
    return a - b;
}

export default Estudiante;
export {
    suma,
    resta
};