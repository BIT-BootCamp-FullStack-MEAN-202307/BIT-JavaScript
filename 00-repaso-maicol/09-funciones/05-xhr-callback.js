// Crear una nueva instancia de XHR
var xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/posts' );

// Configurar la función de devolución de llamada para cuando se reciba una respuesta
xhr.onload = function() {

    // Comprobar el estado de la respuesta
    if ( xhr.status === 200 ) {
        // Procesar la respuesta JSON
        var posts = JSON.parse(xhr.responseText);
        console.log( posts );
    } else {
        console.log('Error al realizar la solicitud');
    }
};

// Enviar la solicitud
xhr.send();