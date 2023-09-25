// Definiendo una funcion: Su funcionalidad
function promedioEstudiante( nombre, notas ) {
    let suma = 0; 

    for( let i = 0; i < notas.length; i = i + 1 ) {
        suma = suma + notas[ i ];
    }

    average = suma / notas.length;

    console.log( `Promedio de ${ nombre } es ${ average }` );
}

/** Implementacion */
let estudiantes = [
    { name: 'Ana', grades: [ 4.2, 3.1, 1.6 ] },
    { name: 'Juan', grades: [ 3.4, 4.2, 1.4, 3.2 ] }
];

// [ [ name: 'Ana'], [ grades: [ 4.2, 3.1, 1.6 ] ]
for( let [ key, value ] of Object.entries( estudiantes ) ) {
    // console.log( data[ 1 ].grades );
    // console.log( value );

    const { name, grades } = value;
    // console.log( name, grades );
    promedioEstudiante( name, grades );
}

// for( let [ key, value ] of Object.entries( estudiantes ) ) {
//    promedioEstudiante( value.name, value.grades );
// }

