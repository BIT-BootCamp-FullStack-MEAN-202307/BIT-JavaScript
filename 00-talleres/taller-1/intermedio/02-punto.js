// 2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

let suma = 0;

for( let i = 0; i < 3; i++ ) {
    const nota = Number( prompt( 'Digite una nota') );
    
    if( nota < 0 || nota > 5 ) {
        throw new Error( 'Una nota debe estar en el rango de 0-5' );
    }

    suma = suma + nota;
}

const promedio = suma / 3;

console.log( 'El promedio es ' + promedio + ' entonces ' + ( ( promedio >= 3.5 ) ? ' paso' : ' no paso') );

