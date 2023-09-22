const datos = [ true, 8, 'Juan', 9.2, [ [], 9, null ], { name: 'Tania' }, null, undefined, Symbol("foo"), NaN ];
const NOTA_MINIMA = 3.5;
const notas = [ 3.2, 4.5, 1.2, 5, 3.9 ];

let suma = 0;
let aprueba = false;

for( let i = 0; i < notas.length; i = i + 1 ) {
    suma = suma + notas[ i ];
}

const average = suma / notas.length;

console.log( average );

if( average >= NOTA_MINIMA ) {
    aprueba = true;
}

if( aprueba ) {
    console.log( 'Paso la materia' );
}
else {
    console.log( 'Repita compradre' );
}

