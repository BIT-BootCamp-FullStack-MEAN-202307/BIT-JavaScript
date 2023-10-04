// 1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

const nota = Number( prompt( 'Digite una nota') );

// &&: AND o Y
if( nota < 0 || nota > 5 ) {
    throw new Error( 'Una nota debe estar en el rango de 0-5' );
}

// Ternario: Avbreviatura de condicional if
// <condicion> ? 'Lo que pasa cuando se cumple la condicion' : 'Loq ue pasa cuando no se cumple'

console.log( nota > 3.5 ? 'Paso la materia' : 'Perdio la materia' );