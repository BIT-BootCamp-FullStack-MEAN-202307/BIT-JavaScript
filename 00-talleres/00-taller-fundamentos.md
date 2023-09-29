# Taller 1

Algunas consideraciones:

- Los temas que abordará el taller están relacionados con los fundamentos de JavaScript: Variables, Constantes, Tipos de datos, sus operaciones, listas y objetos & condicionales usando if, if-else, if-else-if, ternarios y switch.

- Realizar algunos de estos puntos requerirá algunos conceptos generales de otras áreas, sientase en la libertad de consultar las fórmulas que requiere para realizar dichos cálculos. Si tiene dudas sobre alguno de los puntos o la forma de abordarlos para resolverlos, por favor, pregunte.
  
- Haga este taller a conciencia. No copie soluciones encontradas en otros sitios o soluciones generadas por inteligencia artificial. Si no se encuentra en la capacidad de sustentarlas en caso de ser solicitado posterior a la ejecución del taller.
  
- Entrega: Viernes 29 de Septiembre.

## Tema 1: Variables y Constantes

1. Crea un programa que declare una variable para almacenar la temperatura actual en grados Celsius. Luego, convierte esta temperatura a grados Fahrenheit utilizando la fórmula correspondiente y muestra el resultado en la consola.

2. Declara una constante llamada PI y asigna el valor de π (aproximadamente 3.14159) a ella. Luego, pide al usuario que ingrese el radio de un círculo y calcula su área utilizando la constante PI.

3. Declara una variable para representar la edad de un usuario. Luego, utiliza condicionales para determinar si el usuario es mayor o menor de edad y muestra un mensaje apropiado.

4. Usa el prompt para tomar dos números como argumentos y utilice una variable para almacenar la suma de estos números. Luego, muestra el resultado en la consola.

5. Declara una variable de tipo string con una cadena de texto larga. Luego, utiliza métodos de cadenas para obtener la longitud de la cadena, convertirla a minúsculas y mostrar la última palabra en mayúsculas.

## Tema 2: Tipos de Datos

1. Declara una variable y asígnale un valor booleano. Luego, utiliza una estructura condicional para determinar si el valor es verdadero o falso y muestra un mensaje apropiado, por ejemplo "Es verdadero" o "Es falso".

2. Usa el prompt para que tome un número. Indique si el número es par o impar lanzando un alert()

3. Declara un lista que contenga diferentes tipos de datos (números, cadenas, booleanos, objetos, etc.). Cuenta cuantos valore contiene la lista e informa lanzando un alert()

4. Crea un programa que declare un lista de nombres de frutas. Luego, elimina la primera fruta, ahora cambia el valor de la segunda fruta que ahora esta de primero en la lista, inserta una nueva fruta al final de la lista y muestra toda la lista en consola.

5. Declara un objeto que represente a una persona con propiedades como nombre, edad y dirección. Luego, muestra la información de la persona en la consola accediendo directamente a sus propiedades. El mensaje debe decir algo como: `Juan tiene 45 años y vive en la calle 63 con carrera 24`

## Tema 3: Operadores

1. Crea un programa que solicite al usuario dos números usando el prompt y realice operaciones de suma, resta, multiplicación y división con estos números. Muestra los resultados en la consola para cada una de estas operaciones.

2. Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. Utiliza operadores de comparación para determinar si son iguales o si una es mayor que la otra. Muestra los resultados en la consola.

3. Usando el prompt solicita al usuario digitar su nombre y utilice el operador de concatenación (+) para unir el nombre ingresado de manera que el resultado se despliegue en un alert y sea el siguiente `Hola Juan, bienvenido!`

4. Crea un programa que calcule el área de un triángulo utilizando la fórmula: `área = (base * altura) / 2`. Solicita al usuario que ingrese los valores de la base y la altura usando el prompt

5. Declara una variable booleana llamada esMayor y asigna el resultado de una comparación entre dos edades (por ejemplo, 18 y 25). Luego, muestra el valor de esMayor en la consola.

## Tema 4: Incrementales y Decrementales

1. Declarar dos variables numéricas e incrementar una de ellas y decrementar la otra en una sola línea de código utilizando operadores de incremento y decremento. Muestra los valores resultantes.

2. Usando el prompt captura el nombre de un producto. Define una variable que se llame precio con el valor inicial de 0 (cero) e incrementa el precio en 1 por cada letra que tenga el producto, ejemplo:
    - Si el producto se llama 'Mango', el precio debe ser de 5. El mensaje será `El mango tiene un valor de $5 la unidad`
    - Si el producto se llama 'Mandarina', el precio debe ser de 9. El mensaje será  `El mandarina tiene un valor de $9 la unidad`

3. Es noche de amor y amistad, en esta ocasión el cover para ingresar a la disco incrementará 2 veces para los chicos y decrementará 2 veces para las chicas. El valor habitual es de 7 dólares. Usando el prompt solicite el nombre y el genero de una persona e imprima usando alert() el siguiente mensaje si es un chico `Juan tu entrada a la disco vale $9 dólares`, en caso de ser chica `Ana tu entrada a la disco vale $5 dólares`

## Tema 5: Condicionales

1. Crea un programa que solicite al usuario un número y determine si es positivo, negativo o cero utilizando una estructura condicional (if).

2. Declara una variable para representar la temperatura en grados Celsius. Utiliza una estructura if-else para determinar si la temperatura está por encima o por debajo de cero grados y muestra un mensaje apropiado.

3. Escribe un programa que pida al usuario su edad y determine si es un niño, adolescente o adulto utilizando una estructura if-else-if.

4. Crea un programa que tome un número como argumento y utilice el operador ternario para determinar si es par o impar. Devuelve un mensaje que indique el resultado.

5. Usa el prompt para capturar dos numeros que representarán los ejes X y Y. Utiliza una estructura if, if-else para determinar en qué cuadrante se encuentra el punto que representa cada valor ingresado por el usuario, así:
   - Si los dos valores son positivos, el punto se encuentra en el cuadrante 1
   - Si X es positivo y Y es negativo, el punto se encuentra en el cuadrante 2
   - Si los dos valore son negaticos, el punto se encuentra en el cuadrante 3
   - Si X es negativo y Y es positivo, el punto se encuentra en el cuadrante 4

## Tema 6: Switch

1. Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:
   - Si saca menos de 2.5 ( `'Insuficiente, has perdido la materia'` )
   - Si saca 2.5 y de menos de 3.5 ( `'Insuficiente, tienes derecho a habilitar'` )
   - Si saca 3.5 y menos de 4.0 ( `'Aceptable'` )
   - Si saca 4.1 y hasta 5.0 ( `'Excelente'` )

2. Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero, etc.). Utiliza una estructura switch para mostrar cuántos días tiene ese mes.

3. Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento y devuelva el nombre del mes utilizando una estructura switch.

4. Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente.

5. Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). Utiliza una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur).
