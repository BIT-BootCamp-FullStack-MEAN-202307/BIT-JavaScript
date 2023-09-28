// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

let number = prompt( 'Ingrese un #' );
number = Number( number );

let message = '';

if( number % 3 == 0 ) {
    message = message + 'bing';
}
if( number % 5 == 0 ) {
    message = message + 'bong';
}

if( ! message ) {
    console.log( number );
}
else {
    console.log( message );
}



