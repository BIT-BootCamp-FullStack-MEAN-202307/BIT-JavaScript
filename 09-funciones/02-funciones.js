// Definiendo una funcion: Su funcionalidad
function promedioEstudiante( nombre, notas ) {
    let suma = 0; 

    for( let i = 0; i < notas.length; i = i + 1 ) {
        suma = suma + notas[ i ];
    }

    average = suma / notas.length;

    console.log( `Promedio de ${ nombre } es ${ average }` );
}

/** Es */
let name = 'Ana';
let grades = [ 4.2, 3.1, 1.6 ];

promedioEstudiante( name, grades );

name = 'Juan';
grades = [ 3.4, 4.2, 1.4, 3.2 ];

promedioEstudiante( name, grades );
