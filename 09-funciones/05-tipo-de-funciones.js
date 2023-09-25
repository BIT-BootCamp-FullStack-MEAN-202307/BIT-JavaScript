/** 
 * var          ----> Definida en window (Browser), global (Node)
 * let/const    ----> No se agregan de forma global
*/

/**
 * La funcion clasica:  ----> Definida en window (Browser), global (Node)
 * La funcion flecha    ----> No se agregan de forma global
 */

suma( 3, 5 );   // Ojo esta se puede invocar antes o despues

/** Funcion clasica */
function suma( a, b ) {
    console.log( a + b );
}


/** Arrow Functions / Funciones flecha (Lambdas) */
const add = ( x, y ) => {
    console.log( x + y );
}

add( 3, 5 );

