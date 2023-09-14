/** En los lenguajes tradicionales 
 * Tipos Primitivos: 
 *   - Cadenas (Strings), 
 *   - Falso/Verdadero (Booleans),
 *   - Enteros (Integer/int)
 *   - Punto decimal (Float)
 *   - Punto decimal de doble precision (Double)
 * Tipos Complejos
 * 
 * Estructuras de datos
 * - Objects
 * - Arrays
 * - List
*/

/** En JavaScript
 * * Tipos Primitivos: 
 *   - Cadenas (Strings), 
 *   - Falso/Verdadero (Booleans),
 *   - Numeros (Numbers)
 *   - Objects 'object'
 *   - Arrays o Lists (Uno no se parece al otro) 'Object'
 * 
 *   - null             (nulo)
 *   - undefined        (Indefinido)
 *   - NaN              (Not is a Number)
 */

let value = 'Juanito';
console.log( value, typeof value );

value = 79878292;
console.log( value, typeof value );

value = '79878292';
console.log( value, typeof value );

value = true;
console.log( value, typeof value );

value = 0.9;
console.log( value, typeof value );

value = null;
console.log( value, typeof value );

/** Una lista */
value = [ 'Juan', 79878292, true, 0.9 ];
console.log( value, typeof value );

value = [
    [ 0, 'X', 0 ],
    [ 0, 'X', 0 ],
    [ 0, 'X', 0 ]
];
console.log( value, typeof value );

/** Objeto Literal o Explicito */
value = {
    model: 1990,
    color: 'red',
    brand: 'Volkswagen',
    info: function () { 
        console.log( 'Este es un lindo ' + this.brand + ' de color ' + this.color + ' del anio ' + this.model );
    }
}
console.log( value, typeof value );
value.info();