import { Persona } from './Persona.js'

export default class Profesor extends Persona {
    constructor( id, name, salary, position ) {
        super( id, name );         // Invoca al constructor de la clase padre

        this.salary = salary;
        this.position = position;
    }
}


export const numeros = [ 1, 2, 3, 4, 5 ];