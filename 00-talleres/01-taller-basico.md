# Taller 1 - Básico

Este taller es de nivel básico y pretende afianzar los conocimientos adquiridos sobre los fundamentos de JavaScript.

1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase `Hola X, grandioso! Tienes X años`. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: `Hola Juan, grandioso! Tienes 20 años`

3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

    Si es múltiplo debe imprimir `Si, el número x es múltiplo 5`, de lo contrario debe imprimir `No, el número x no es múltiplo de 5`.

    *NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.*

4. Escribe un programa que le pida al usuario ingresar un número.
   - Si el número es múltiplo de 3 debe imprimir en la consola `bing`.
   - Si el número es múltiplo de 5 debe imprimir en la consola `bong`.
   - Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola `bingbong`.
   - Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.
    NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

6. Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
    Por ejemplo, si el usuario ingresó la frase `Hola Mundo` y el número 5, el programa debe imprimir `Hola Mundo` 5 veces:

    ``` JavaScript
    Hola Mundo
    Hola Mundo
    Hola Mundo
    Hola Mundo
    Hola Mundo
    ```

7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

    ``` JavaScript
    5
    6
    7
    8
    9
    10
    ```

    NOTA:
       - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
       - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

8. Crea un programa a partir de las siguientes instrucciones:

   - Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
   - Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
   - Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
   - Recorre el arreglo e imprímelo.
   - Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

    ``` JavaScript
        Ingresa un nombre > Camilo
        Ingresa otro nombre > Ariel
        Pedro
        Pablo
        Ariel
        Juan
        Diana
        Camilo
    ```

9. Escribe un programa que:
    - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
    - Elimine el segundo elemento.
    - Recorra e imprima el arreglo.

    Ejemplo:

    ``` JavaScript
        Ingresa un número> 5
        1
        3
        4
        5
    ```

    NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.

10. Completa el siguiente programa para imprimir los números que sean mayores a 10.

    ``` JavaScript
    const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
    // escribe tu código acá
    ```

    El resultado debería ser el siguiente:

    ``` JavaScript
    23
    40
    12
    67
    24
    39
    ```

    NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros números.

11. Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

    `const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];`

    El resultado debería ser el siguiente:

    ``` JavaScript
    11
    ```

    NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.
