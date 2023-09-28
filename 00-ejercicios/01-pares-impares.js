const numeros = [ 7, 2, 0, 1, 3, s = 0;
let cero = 0;

for( let i = numeros.length - 1; i >= 0 ; i-- ) {
    if( numeros[ i ] % 2 != 0 )
        impares++;
    else if ( numeros[ i ] == 0 )
        cero++;
    else
        pares++;
}

console.log( `Pares: ${ pares }, Impares: ${ impares }, Cero: ${ cero }` )