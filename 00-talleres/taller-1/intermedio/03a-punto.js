/** 3. 
 * Ingresar el (nombre) de un [alumno]
 * y tres [notas] por [materia] (en total tres materias) 
 * y determinar qué materias aprobó 
 * y cuáles reprobó.  */


// [alumno]
//     (nombres)
//     (id)
// [nota]
//    (promedio)
// [materia]
//     (nombre)
//     (id)


const alumno = {};
const nota = {};
const materia = {};



function calcularPromedio( notas ) {
    let suma = 0;
    for ( let i = 0; i < notas.length; i++ ) {
        suma = suma + notas[ i ];
    }

    return suma / notas.length;
}

function capturaNotas ( cant_notas ) {
    let notas = [];

    for (let i = 0; i < cant_notas; i++) {
        notas.push( Number( prompt( 'Digita tu nota' ) ) );
    }

    return notas;
}

function capturaMaterias( cant_materias ) {
    let materias = [];

    for ( let i = 0; i < cant_materias; i++ ) {
        const nombreMateria = prompt( 'Digita nombre de la materia' );
        const notas = capturaNotas( 3 );
        let promedio = calcularPromedio( notas );

        const nuevaMateria = { 
            nombre: nombreMateria, 
            notas,                   // ECMAScript: Si propieddad tiene el mismo nombre de la variable que asigna los valores puedo dejar el nombre de la variable que los posee
            // notas : notas  --- equivale a --- notas 
            promedio
        };

        materias.push( nuevaMateria );
    }

    return materias;
}

function capturaDatosAlumno() {
    const nombre = prompt( 'Digita el nombre del alumno' );
    const materias = capturaMaterias( 3 );

    const nuevoAlumno = {
        nombre,
        materias
    };

    return nuevoAlumno;
}

function init() {
    const alumno = capturaDatosAlumno();
    console.log( alumno );
}

init();
console.log( alumno );
