/** De un listado de personas determinar cuales son mayores a 18 años */

const personas = [
    { nombre: 'Luisa', edad: 9 },       // true
    { nombre: 'Elisa', edad: 17 },      // true
    { nombre: 'Ana', edad: 21 },        // true
    { nombre: 'Maria', edad: 13 },      // true
    { nombre: 'Melisa', edad: 19 }      // true
];

// console.log( personas );

const mayoresDe18 = personas.filter( function ( persona ) {

    // Ternario: (condicion) ? <cuando se cumple> : <cuando NO se cumple>
    return persona.edad > 18;  // false
});

// console.log( 'Mayores', mayoresDe18 );

for( let mayor of mayoresDe18 ){
    console.log( mayor.nombre );
}
