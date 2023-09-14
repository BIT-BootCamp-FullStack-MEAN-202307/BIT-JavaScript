// 30 métodos utilizados para trabajar con variables de tipo cadena (string) en JavaScript.

let
    str = '',
    str1 = '',
    str2 = '',
    regex = '';

// 1. length: Obtener la longitud de una cadena.
str = "Hola";
console.log( str.length ); // Output: 4


// 2. toUpperCase: Convertir una cadena a mayúsculas.
str = "hola";
console.log( str.toUpperCase() ); // Output: HOLA


// 3.toLowerCase: Convertir una cadena a minúsculas.
str = "HOLA";
console.log( str.toLowerCase() ); // Output: hola


// 3. charAt: Obtener el carácter en una posición específica.
str = "Hola";
console.log( str.charAt(1) ); // Output: o


// 4. indexOf: Encontrar la posición de la primera aparición de un carácter o una subcadena.
str = "Hola mundo";
console.log( str.indexOf("m") ); // Output: 5


// 5. lastIndexOf: Encontrar la posición de la última aparición de un carácter o una subcadena.
str = "Hola mundo";
console.log( str.lastIndexOf("o") ); // Output: 7


// 6. includes: Verificar si una cadena contiene otra cadena.
str = "Hola mundo";
console.log( str.includes("mundo") ); // Output: true


// 7. startsWith: Verificar si una cadena comienza con otra cadena.
str = "Hola mundo";
console.log( str.startsWith("Hola") ); // Output: true


// 8. endsWith: Verificar si una cadena termina con otra cadena.
str = "Hola mundo";
console.log( str.endsWith("mundo") ); // Output: true


// 9. slice: Extraer una porción de una cadena.
str = "Hola mundo";
console.log( str.slice(1, 4) ); // Output: ola


// 10. substring: Extraer una subcadena entre dos índices.
str = "Hola mundo";
console.log( str.substring(1, 4) ); // Output: ola


// 11. substr: Extraer una subcadena comenzando desde un índice y con una longitud determinada.
str = "Hola mundo";
console.log( str.substr(1, 3) ); // Output: ola


// 12. replace: Reemplazar una subcadena por otra.
str = "Hola mundo";
console.log( str.replace("mundo", "amigo") ); // Output: Hola amigo


// 13. trim: Eliminar los espacios en blanco al inicio y al final de una cadena.
str = "   Hola mundo   ";
console.log( str.trim() ); // Output: "Hola mundo"


// 14. repeat: Repetir una cadena cierto número de veces.
str = "Hola";
console.log( str.repeat(3) ); // Output: "HolaHolaHola"


// 15. split: Dividir una cadena en un array de subcadenas utilizando un delimitador.
str = "Hola,amigo,cómo,estás";
console.log( str.split(",") ); // Output: ["Hola", "amigo", "cómo", "estás"]


// 16. concat: Concatenar dos o más cadenas.
str1 = "Hola";
str2 = "mundo";
console.log( str1.concat(" ", str2) ); // Output: "Hola mundo"


// 17. match: Buscar una coincidencia entre una cadena y una expresión regular.
str = "Hola mundo";
regex = /mundo/;
console.log( str.match(regex) ); // Output: ["mundo"]


// 18. search: Buscar la posición de una coincidencia entre una cadena y una expresión regular.
str = "Hola mundo";
regex = /mundo/;
console.log( str.search(regex) ); // Output: 5


// 19. toString: Convertir un valor en una cadena.
const number = 42;
console.log(number.toString() ); // Output: "42"


// 20. localeCompare: Comparar dos cadenas considerando las reglas de ordenamiento locales.
str1 = "árbol";
str2 = "zorro";
console.log( str1.localeCompare( str2) ); // Output: -1


// 21. fromCharCode: Convertir una secuencia de valores Unicode en una cadena.
console.log( String.fromCharCode(65, 66, 67) ); // Output: "ABC"


// 22. padStart: Rellenar el inicio de una cadena con caracteres especificados hasta alcanzar una longitud determinada.
str = "42";
console.log( str.padStart(5, "0") ); // Output: "00042"


// 23. padEnd: Rellenar el final de una cadena con caracteres especificados hasta alcanzar una longitud determinada.
str = "42";
console.log( str.padEnd(5, "0") ); // Output: "42000"


// 24. matchAll: Obtener todas las coincidencias entre una cadena y una expresión regular.
str = "Hola mundo";
regex = /\w+/g;
const matches = [...str.matchAll(regex)];
console.log(matches ); // Output: [["Hola"], ["mundo"]]


// 25. normalize: Normalizar una cadena Unicode.
str = "Café";
console.log( str.normalize() ); // Output: "Café"


// 26. toLocaleUpperCase: Convertir una cadena a mayúsculas según las reglas de la localidad.
str = "hola";
console.log( str.toLocaleUpperCase("es") ); // Output: "HOLA"


// 26. toLocaleLowerCase: Convertir una cadena a minúsculas según las reglas de la localidad.
str = "HOLA";
console.log( str.toLocaleLowerCase("es") ); // Output: "hola"


// 27. trimStart: Eliminar los espacios en blanco al inicio de una cadena.
str = "   Hola mundo";
console.log( str.trimStart() ); // Output: "Hola mundo"


// 28. trimEnd: Eliminar los espacios en blanco al final de una cadena.
str = "Hola mundo   ";
console.log( str.trimEnd() ); // Output: "Hola mundo"
