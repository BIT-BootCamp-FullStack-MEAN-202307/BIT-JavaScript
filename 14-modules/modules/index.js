import { Persona, fruits }  from './models/Persona.js';
import Profesor, { numeros } from './models/Profesor.js';     
import Estudiante, { suma, resta } from './models/Estudiante.js';


const alumnoArquitectura = new Persona( '7657343', 'Alisa', 25, 'female' );
console.log( alumnoArquitectura );

const julioProfe = new Profesor( '325345', 'Julio', 9000, 'Math' );
console.log( julioProfe );

const hernanAlumno = new Estudiante( '3543534', 'Hernan', 'Ingenieria Industrial', 8000 );
console.log( hernanAlumno );

fruits.forEach((fruit) => {
    console.log( fruit );
});
numeros.forEach( numero => {
    console.log( numero );
});

console.log( suma( 3, 6 ) );
console.log( resta( 3, 6 ) );