const edad = 45.5;

console.log(
    Math.ceil( edad )  // Clase Proporciona el objecot global
);

console.log(
    parseInt( edad )
); 

// 30 métodos utilizados para trabajar con variables de tipo numbero (number) en JavaScript.

let
    num = 0,
    roundedNum = 0,
    numStr = 0,
    parsedNum = 0,
    number = 0,
    numberString = 0,
    parsedInt = 0,
    parsedFloat = 0,
    notANumber = '',
    infinity = 0,
    angleInRadians = 0,
    exponent = 0,
    result = 0,
    numbers = [];

// 1. toFixed(): Redondea un número al número específico de decimales.
num = 3.14159;
roundedNum = num.toFixed( 2 ); // Resultado: 3.14
console.log( roundedNum );


// 2. parseInt(): Convierte una cadena en un número entero.
numStr = "42";
parsedNum = parseInt( numStr ); // Resultado: 42
console.log( parsedNum );


// 3. parseFloat(): Convierte una cadena en un número decimal.
numStr = "3.14";
parsedNum = parseFloat( numStr ); // Resultado: 3.14
console.log( parsedNum );


// 4. Math.round(): Redondea un número al entero más cercano.
num = 3.6;
roundedNum = Math.round( num ); // Resultado: 4
console.log( roundedNum );


// 5. Math.ceil(): Redondea un número al siguiente entero mayor o igual.
num = 4.1;
roundedNum = Math.ceil( num ); // Resultado: 5
console.log( roundedNum );


// 6. Math.floor(): Redondea un número al entero menor o igual más cercano.
num = 4.9;
roundedNum = Math.floor( num ); // Resultado: 4
console.log( roundedNum );


// 7. Math.abs(): Devuelve el valor absoluto de un número.
num = -5;
let absNum = Math.abs( num ); // Resultado: 5
console.log( absNum );


// 8. Math.max(): Devuelve el número más grande de una lista de argumentos.
let maxNum = Math.max( 4, 8, 2, 10 ); // Resultado: 10
console.log( maxNum );


// 9. Math.min(): Devuelve el número más pequeño de una lista de argumentos.
let minNum = Math.min( 4, 8, 2, 10 ); // Resultado: 2
console.log( minNum );


// 10. Math.pow(): Calcula la potencia de un número.
let base = 2;
let exponente = 3;
let resultado = Math.pow( base, exponente ); // Resultado: 8
console.log( resultado );


// 11. Math.sqrt(): Calcula la raíz cuadrada de un número.
num = 9;
let raizCuadrada = Math.sqrt( num ); // Resultado: 3
console.log( raizCuadrada );


// 12. Math.random(): Genera un número aleatorio entre 0 y 1.
let randomNum = Math.random(); // Resultado: 0.12345 (valor aleatorio)
console.log( randomNum );


// 13. Number.isInteger(): Verifica si un número es entero.
num = 5.5;
let esEntero = Number.isInteger( num ); // Resultado: false
console.log( esEntero );


// 14. Number.isNaN(): Verifica si un valor no es un número (NaN).
let valor = "Hola";
let esNaN = Number.isNaN( valor ); // Resultado: true
console.log( esNaN );


// 15. Number.parseFloat(): Convierte una cadena en un número decimal.
numStr = "3.14";
parsedNum = Number.parseFloat( numStr ); // Resultado: 3.14
console.log( parsedNum );


// 16. Método toExponential():
number = 123456789;
const exponential = number.toExponential( 2 );
console.log( exponential ); // Output: 1.23e+8


// 17. Método toFixed():
number = 3.14159;
const fixed = number.toFixed( 2 );
console.log( fixed ); // Output: 3.14


// 18. Método toPrecision():
number = 123.456789;
const precision = number.toPrecision( 5 );
console.log( precision ); // Output: 123.46


// 19. Método parseInt():
numberString = "10";
parsedInt = parseInt( numberString );
console.log( parsedInt ); // Output: 10


// 20. Método parseFloat():
numberString = "3.14";
parsedFloat = parseFloat( numberString );
console.log( parsedFloat ); // Output: 3.14


// 21. Método isNaN():
notANumber = NaN;
console.log( isNaN( notANumber ) ); // Output: true


// 22. Método isFinite():
infinity = Infinity;
console.log( isFinite( infinity ) ); // Output: false


// 23. Método Math.abs():
number = -10;
const absoluteValue = Math.abs( number );
console.log( absoluteValue ); // Output: 10


// 24. Método Math.ceil():
number = 4.2;
const ceilValue = Math.ceil( number );
console.log( ceilValue ); // Output: 5


// 25. Método Math.floor():
number = 4.8;
const floorValue = Math.floor( number );
console.log( floorValue ); // Output: 4


// 26. Método Math.round():
number = 4.5;
const roundedValue = Math.round( number );
console.log( roundedValue ); // Output: 5


// 27. Método Math.max():
numbers = [ 1, 2, 3, 4, 5 ];
const maxValue = Math.max( ...numbers );
console.log( maxValue ); // Output: 5


// 28. Método Math.min():
numbers = [ 1, 2, 3, 4, 5 ];
const minValue = Math.min( ...numbers );
console.log( minValue ); // Output: 1


// 29. Método Math.pow():
const base = 2;
exponent = 3;
result = Math.pow( base, exponent );
console.log( result ); // Output: 8


// 30. Método Math.sqrt():
number = 16;
const squareRoot = Math.sqrt( number );
console.log( squareRoot ); // Output: 4


// 31. Método Math.random():
const randomValue = Math.random();
console.log( randomValue ); // Output: A random decimal between 0 and 1


// 32. Método Math.sin():
angleInRadians = Math.PI / 2;
const sineValue = Math.sin( angleInRadians );
console.log( sineValue ); // Output: 1


// 33. Método Math.cos():
angleInRadians = Math.PI;
const cosineValue = Math.cos( angleInRadians );
console.log( cosineValue ); // Output: -1


// 34. Método Math.tan():
angleInRadians = Math.PI / 4;
const tangentValue = Math.tan( angleInRadians );
console.log( tangentValue ); // Output: 1


// 35. Método Math.log():
number = 10;
const logarithm = Math.log( number );
console.log( logarithm ); // Output: 2.302585092994046


// 36. Método Math.exp():
exponent = 2;
result = Math.exp( exponent );
console.log( result ); // Output: 7.3890560989306495


// 37. Método Number.isInteger():
const integerNumber = 5;
console.log( Number.isInteger( integerNumber ) ); // Output: true

const floatNumber = 5.5;
console.log( Number.isInteger( floatNumber ) ); // Output: false


// 38. Método Number.parseFloat():
numberString = "3.14";
parsedFloat = Number.parseFloat( numberString );
console.log( parsedFloat ); // Output: 3.14


// 39. Método Number.parseInt():
numberString = "10";
parsedInt = Number.parseInt( numberString );
console.log( parsedInt ); // Output: 10


// 40. Método Number.MAX_SAFE_INTEGER:
console.log( Number.MAX_SAFE_INTEGER ); // Output: 9007199254740991


// 41. Método Number.MIN_SAFE_INTEGER:
console.log( Number.MIN_SAFE_INTEGER ); // Output: -9007199254740991


// 42. Método Number.isNaN():
notANumber = NaN;
console.log( Number.isNaN( notANumber ) ); // Output: true


// 43. Método Number.isFinite():
infinity = Infinity;
console.log( Number.isFinite( infinity ) ); // Output: false


// 44. Método Number.isSafeInteger():
const safeInteger = 42;
console.log( Number.isSafeInteger( safeInteger ) ); // Output: true

const unsafeInteger = Math.pow( 2, 53 );
console.log( Number.isSafeInteger(unsafeInteger ) ); // Output: false


// 45. Método Number.EPSILON:
console.log( Number.EPSILON ); // Output: 2.220446049250313e-16


