let value;          // undefined

// Conversion de Boolean a String
value = true;
console.log( typeof value );            // 'boolean'

value = 'Juan';                         // Infiere / Asigna
value = String( value );                // Convierte / Infiere / Asigna
console.log( typeof value );            // 'string'

// Conversion de String a Number
let 
    numberA = '9',
    numberB = "3.2",
    numberC = '6';

// Java:
// '' -> Caracteres        letra = 'a'                  char
// "" -> Strings           cadena = "Juan Carlos"       string
// JavaScript: Le importa muy poco las comillas simples o dobles
 
console.log( typeof numberA );  // String

numberA = Number( numberA );
console.log( typeof numberA );         // Number: 10 => 10, 21.6 => 21.6

let result = numberA / Number( numberB );
console.log( result );

numberB = parseInt( numberB );    // 21.6 => 21  
console.log( typeof numberB );

numberC = parseFloat( numberC );  // 10 -> 10.0
console.log( typeof numberC );

// Conversion de Number a Boolean & Boolean a Number
const uno = 1, cero = 0;    // Binarios 

console.log( Boolean( uno ) );  // true
console.log( Boolean( cero ) ); // false

console.log( Number( true ) );  // 1
console.log( Number( false ) ); // 0