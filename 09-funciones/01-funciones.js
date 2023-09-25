// let nombre = 'Ana';
// let notas = [ 4.5, 2.1, 3.6 ];
// let suma = 0; 

// for( let i = 0; i < notas.length; i = i + 1 ) {
//     suma = suma + notas[ i ];
// }

// let average = suma / notas.length;

// console.log( `Promedio de ${ nombre } es ${ average }` );

// /*********** */
// nombre = 'Juan';
// notas = [ 4.2, 3.1, 1.6 ];
// suma = 0; 

// for( let i = 0; i < notas.length; i = i + 1 ) {
//     suma = suma + notas[ i ];
// }

// average = suma / notas.length;

// console.log( `Promedio de ${ nombre } es ${ average }` );

// Definiendo una funcion: Su funcionalidad
function promedioEstudiante() {
    nombre = 'Juan';
    notas = [ 4.2, 3.1, 1.6 ];
    suma = 0; 

    for( let i = 0; i < notas.length; i = i + 1 ) {
        suma = suma + notas[ i ];
    }

    average = suma / notas.length;

    console.log( `Promedio de ${ nombre } es ${ average }` );
}

promedioEstudiante();       // Invoca, ejecuta, corre
promedioEstudiante();
promedioEstudiante();
promedioEstudiante();