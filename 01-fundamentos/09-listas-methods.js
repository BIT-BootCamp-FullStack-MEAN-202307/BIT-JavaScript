// 30 métodos utilizados para trabajar con variables de tipo arreglo (array) en JavaScript.

// 1. Crear un array vacío:
let miArray = [];


// 2. Crear un array con elementos predefinidos:
let miArray = [1, 2, 3, 4, 5];


// 3. Acceder a un elemento específico del array:
let miArray = [1, 2, 3, 4, 5];
console.log(miArray[2]); // Resultado: 3


// 4. Modificar un elemento específico del array:
let miArray = [1, 2, 3, 4, 5];
miArray[2] = 10;
console.log(miArray); // Resultado: [1, 2, 10, 4, 5]


// 5. Obtener la longitud de un array:
let miArray = [1, 2, 3, 4, 5];
console.log(miArray.length); // Resultado: 5


// 6. Agregar elementos al final del array:
let miArray = [1, 2, 3];
miArray.push(4);
console.log(miArray); // Resultado: [1, 2, 3, 4]


// 7. Eliminar el último elemento del array:
let miArray = [1, 2, 3, 4];
miArray.pop();
console.log(miArray); // Resultado: [1, 2, 3]


// 8. Agregar elementos al principio del array:
let miArray = [2, 3, 4];
miArray.unshift(1);
console.log(miArray); // Resultado: [1, 2, 3, 4]


// 9. Eliminar el primer elemento del array:
let miArray = [1, 2, 3, 4];
miArray.shift();
console.log(miArray); // Resultado: [2, 3, 4]


// 10. Obtener el índice de un elemento en el array:
let miArray = [10, 20, 30, 40];
console.log(miArray.indexOf(30)); // Resultado: 2


// 11. Verificar si un elemento existe en el array:
let miArray = [10, 20, 30, 40];
console.log(miArray.includes(30)); // Resultado: true


// 12. Convertir un array en una cadena de texto:
let miArray = [1, 2, 3];
console.log(miArray.join(", ")); // Resultado: "1, 2, 3"


// 13. Convertir una cadena de texto en un array:
let miTexto = "1, 2, 3";
let miArray = miTexto.split(", ");
console.log(miArray); // Resultado: [1, 2, 3]


// 14. Ordenar los elementos de un array en orden ascendente:
let miArray = [3, 1, 2];
miArray.sort();
console.log(miArray); // Resultado: [1, 2, 3]


// 15. Ordenar los elementos de un array en orden descendente:
let miArray = [3, 1, 2];
miArray.sort( function(a, b) {
  return b - a;
});
console.log(miArray); // Resultado: [3, 2, 1]


// 16. Crear un nuevo array a partir de una porción del array original:
let miArray = [1, 2, 3, 4, 5];
let nuevoArray = miArray.slice(2, 4);
console.log(nuevoArray); // Resultado: [3, 4]


// 17. Revertir el orden de los elementos en un array:
let miArray = [1, 2, 3, 4, 5];
miArray.reverse();
console.log(miArray); // Resultado: [5, 4, 3, 2, 1]


// 18. Recorrer y mostrar todos los elementos del array:
let miArray = [1, 2, 3, 4, 5];
miArray.forEach(function(elemento) {
  console.log(elemento);
});


// 19. Filtrar elementos de un array que cumplan una condición:
let miArray = [1, 2, 3, 4, 5];
let filtrados = miArray.filter(function(elemento) {
  return elemento > 3;
});
console.log(filtrados); // Resultado: [4, 5]


// 20. Sumar todos los elementos de un array:
let miArray = [1, 2, 3, 4, 5];
let suma = miArray.reduce(function(acumulador, elemento) {
  return acumulador + elemento;
});
console.log(suma); // Resultado: 15


// 21. Encontrar el elemento máximo en un array:
let miArray = [1, 2, 3, 4, 5];
let maximo = Math.max(...miArray);
console.log(maximo); // Resultado: 5


// 22. Encontrar el elemento mínimo en un array:
let miArray = [1, 2, 3, 4, 5];
let minimo = Math.min(...miArray);
console.log(minimo); // Resultado: 1


// 23. Comprobar si todos los elementos de un array cumplen una condición:
let miArray = [1, 2, 3, 4, 5];
let todosCumplen = miArray.every(function(elemento) {
  return elemento > 0;
});
console.log(todosCumplen); // Resultado: true


// 24. Comprobar si al menos un elemento del array cumple una condición:
let miArray = [1, 2, 3, 4, 5];
let algunoCumple = miArray.some(function(elemento) {
  return elemento > 5;
});
console.log(algunoCumple); // Resultado: false


// 25. Unir dos arrays en uno nuevo:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); // Resultado: [1, 2, 3, 4, 5, 6]


// 26. Copiar un array en otro nuevo:
let miArray = [1, 2, 3];
let copiaArray = miArray.slice();
console.log(copiaArray); // Resultado: [1, 2, 3]


// 27. Eliminar elementos específicos de un array:
let miArray = [1, 2, 3, 4, 5];
miArray.splice(2, 2);
console.log(miArray); // Resultado: [1, 2, 5]


// 28. Convertir un array en un objeto:
let miArray = [["nombre", "Juan"], ["edad", 30], ["ciudad", "Madrid"]];
let miObjeto = Object.fromEntries(miArray);
console.log(miObjeto); // Resultado: { nombre: "Juan", edad: 30, ciudad: "Madrid" }


// 29. Encontrar el índice del primer elemento que cumple una condición:
let miArray = [1, 2, 3, 4, 5];
let indice = miArray.findIndex(function(elemento) {
  return elemento > 3;
});
console.log(indice); // Resultado: 3


// 30. Clonar un array utilizando el operador spread:
let miArray = [1, 2, 3];
let clonArray = [...miArray];
console.log(clonArray); // Resultado: [1, 2, 3]

// 31. Crear un objeto vacío:
let miObjeto = {};


// 32. Crear un objeto con propiedades predefinidas:
let miObjeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};
// 33. Acceder a una propiedad específica del objeto:
let miObjeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};
console.log(miObjeto.nombre); // Resultado: "Juan"