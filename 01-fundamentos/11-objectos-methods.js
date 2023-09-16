// 30 métodos utilizados para trabajar con variables de tipo objeto (object) en JavaScript.

// 1. Crear un objeto persona con propiedades como nombre, edad y profesión.
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  };
  
  
  // 2. Acceder a las propiedades de un objeto utilizando la notación de punto.
  console.log( persona.nombre ); // Salida: Juan
  console.log( persona.edad ); // Salida: 30
  
  
  // 3. Acceder a las propiedades de un objeto utilizando la notación de corchetes.
  console.log( persona["nombre"] ); // Salida: Juan
  console.log( persona["edad"] ); // Salida: 30
  
  
  // 4. Actualizar el valor de una propiedad en un objeto.
  persona.edad = 31;
  console.log( persona.edad ); // Salida: 31
  
  
  // 5. Agregar una nueva propiedad a un objeto.
  persona.direccion = "Calle Principal";
  console.log( persona.direccion ); // Salida: Calle Principal
  
  
  // 6. Eliminar una propiedad de un objeto.
  delete persona.profesion;
  console.log( persona.profesion ); // Salida: undefined
  
  
  // 7. Verificar si una propiedad existe en un objeto.
  console.log( "nombre" in persona ); // Salida: true
  console.log( "profesion" in persona ); // Salida: false
  
  
  // 8. Iterar sobre las propiedades de un objeto utilizando un bucle for...in.
  for (let propiedad in persona) {
    console.log( propiedad + ": " + persona[ propiedad ] );
  }
  
  
  // 9. Crear un método en un objeto para realizar una acción.
  const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log( "Hola, soy " + this.nombre );
    }
  };
  
  persona.saludar(); // Salida: Hola, soy Juan
  
  
  // 10. Utilizar el método Object.keys() para obtener un array de las propiedades de un objeto.
  const propiedades = Object.keys( persona );
  console.log( propiedades ); // Salida: ["nombre", "edad"]
  
  
  // 11. Utilizar el método Object.values() para obtener un array de los valores de las propiedades de un objeto.
  const valores = Object.values( persona );
  console.log( valores ); // Salida: ["Juan", 30]
  
  
  // 12. Utilizar el método Object.entries() para obtener un array de las propiedades y valores de un objeto como pares clave-valor.
  const entradas = Object.entries( persona );
  console.log( entradas );  // Salida: [["nombre", "Juan"], ["edad", 30]]
  
  
  // 13. Utilizar el método Object.assign() para combinar las propiedades de dos objetos en uno nuevo.
  const persona2 = {
    profesion: "Ingeniero de Software",
    experiencia: 5
  };
  
  let personaCombinada = Object.assign( {}, persona, persona2 );
  console.log( personaCombinada );  // Salida: { nombre: "Juan", edad: 30, profesion: "Ingeniero de Software", experiencia: 5 }
  
  
  // 14. Utilizar el operador de propagación (...) para combinar las propiedades de dos objetos en uno nuevo.
  personaCombinada = { ...persona, ...persona2 };
  console.log( personaCombinada );  // Salida: { nombre: "Juan", edad: 30, profesion: "Ingeniero de Software", experiencia: 5 }
  
  
  // 15. Crear un objeto con un método que utilice la función de flecha (=>) para acceder correctamente al contexto this.
  const objeto = {
    propiedad: "Valor",
    metodo: function() {
      setTimeout( () => {
        console.log( this.propiedad );
      }, 1000 );
    }
  };
  
  objeto.metodo(); // Salida: Valor (después de 1 segundo)
  
  
  // 16. Utilizar el concepto de encapsulación para proteger las propiedades de un objeto mediante el uso de closures.
  function crearObjeto() {
    let propiedadPrivada = "Valor Privado";
  
    return {
      getPropiedad: function() {
        return propiedadPrivada;
      },
      setPropiedad: function(valor) {
        propiedadPrivada = valor;
      }
    };
  }
  
  const object = crearObjeto();
  console.log( object.getPropiedad() ); // Salida: Valor Privado
  object.setPropiedad( "Nuevo Valor" );
  console.log( object.getPropiedad() ); // Salida: Nuevo Valor
  
  
  // 17. Utilizar el concepto de herencia de objetos utilizando el método Object.create().
  const persona = {
    nombre: "Juan",
    saludar: function() {
      console.log( "Hola, soy " + this.nombre );
    }
  };
  
  const empleado = Object.create( persona );
  empleado.profesion = "Ingeniero";
  empleado.trabajar = function() {
    console.log( "Trabajando como " + this.profesion );
  };
  
  empleado.saludar(); // Salida: Hola, soy Juan
  empleado.trabajar(); // Salida: Trabajando como Ingeniero
  
  
  // 18. Utilizar el operador instanceof para verificar si un objeto es una instancia de una clase o constructor específico.
  function Persona( nombre ) {
    this.nombre = nombre;
  }
  
  const persona = new Persona( "Juan" );
  console.log( persona instanceof Persona ); // Salida: true
  
  
  // 19. Utilizar el método hasOwnProperty() para verificar si una propiedad específica pertenece a un objeto y no a su prototipo.
  const persona = {
    nombre: "Juan"
  };
  
  // 'nombre' in persona
  // persona?.nombre
  console.log( persona.hasOwnProperty( "nombre" ) ); // Salida: true
  console.log( persona.hasOwnProperty( "edad" ) ); // Salida: false
  
  
  // 20. Utilizar el operador condicional (?:) para realizar una asignación condicional en un objeto.
  const edad = 25;
  
  const persona = {
    nombre: "Juan",
    categoria: edad < 18 ? "Menor" : "Mayor"
  };
  
  console.log( persona.categoria ); // Salida: Mayor
  
  
  // 21. Utilizar el concepto de objetos anidados para representar estructuras más complejas.
  const empresa = {
    nombre: "Mi Empresa",
    empleados: [
      { nombre: "Juan", edad: 30 },
      { nombre: "María", edad: 25 },
      { nombre: "Carlos", edad: 35 }
    ]
  };
  
  console.log( empresa.empleados[0].nombre ); // Salida: Juan
  
  
  // 22. Utilizar el método JSON.stringify() para convertir un objeto en una cadena JSON.
  const persona = { nombre: "Juan", edad: 30 };
  const json = JSON.stringify( persona );
  console.log( json ); // Salida: {"nombre":"Juan","edad":30}
  
  
  // 23. Utilizar el método JSON.parse() para convertir una cadena JSON en un objeto.
  const jsonObject = '{"nombre":"Juan","edad":30}';
  const persona = JSON.parse( jsonObject );
  console.log( persona.nombre ); // Salida: Juan
  
  
  // 24. Utilizar los métodos get y set para definir propiedades de acceso en un objeto.
  const persona = {
    nombre: "Juan",
    get edad() {
      return this._edad;
    },
    set edad(valor) {
      if (valor >= 0 && valor <= 120) {
        this._edad = valor;
      } else {
        console.log("Edad inválida");
      }
    }
  };
  
  persona.edad = 25;
  console.log( persona.edad ); // Salida: 25
  
  persona.edad = 150; // Salida: Edad inválida
  
  
  // 25. Utilizar el método Object.freeze() para hacer que un objeto sea inmutable (no se puedan agregar, eliminar o modificar sus propiedades).
  const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  Object.freeze( persona );
  
  persona.nombre = "María"; // No se realiza ningún cambio
  console.log( persona.nombre ); // Salida: Juan
  
  
  // 26. Utilizar el método Object.seal() para hacer que un objeto sea sellado (no se puedan agregar ni eliminar propiedades, pero sí se pueden modificar las existentes).
  const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  Object.seal( persona );
  
  persona.nombre = "María"; // Se modifica la propiedad existente
  console.log( persona.nombre ); // Salida: María
  
  persona.profesion = "Ingeniero"; // No se agrega la nueva propiedad
  console.log( persona.profesion ); // Salida: undefined
  
  
  // 27. Utilizar el método Object.is() para comparar dos valores y determinar si son idénticos.
  console.log( Object.is( 5, 5 ) ); // Salida: true
  console.log( Object.is( 5, "5" ) ); // Salida: false
  
  
  // 28. Utilizar el método Object.getOwnPropertyNames() para obtener un array con los nombres de todas las propiedades (tanto enumerables como no enumerables) de un objeto.
  const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  const properties = Object.getOwnPropertyNames( persona );
  console.log( properties ); // Salida: ["nombre", "edad"]
  
  
  // 29. Utilizar el método Object.getPrototypeOf() para obtener el prototipo de un objeto.
  const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  const prototipo = Object.getPrototypeOf( persona );
  console.log(prototipo); // Salida: {}
  
  
  // 30. Utilizar el método Object.setPrototypeOf() para establecer el prototipo de un objeto.
  const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  const nuevoPrototipo = { profesion: "Ingeniero" };
  
  Object.setPrototypeOf( persona, nuevoPrototipo );
  
  console.log( persona.profesion ); // Salida: Ingeniero