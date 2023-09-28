function getData(url) {
    // Crear una instancia del objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Crear una nueva Promesa
    return new Promise( function( resolve, reject ) {
        // Establecer el método y la URL de la solicitud HTTP
        xhr.open("GET", url);
    
        // Manejar la respuesta cuando la solicitud se complete
        xhr.onload = function() {
            // Si el estado de la solicitud es 200 (OK)
            if ( xhr.status === 200 ) {
                // Analizar la respuesta JSON
                const response = JSON.parse( xhr.responseText );
                // Resolver la Promesa con la respuesta
                resolve( response );
            } else {
                // Si la solicitud falla, rechazar la Promesa con un objeto Error
                reject(new Error("Error al realizar la solicitud"));
            }
        };
    
        // Enviar la solicitud HTTP
        xhr.send();
    });
}

// Ejemplo de uso de la función getData con Promesas
const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/comments?postId=";
const url3 = "https://jsonplaceholder.typicode.com/albums?userId=";
const url4 = "https://jsonplaceholder.typicode.com/photos?albumId=";
const url5 = "https://jsonplaceholder.typicode.com/todos?userId=";

// Hacer una solicitud HTTP para la URL 1
getData(url1)
    .then(function(response1) {
        console.log("Respuesta 1:", response1);
        // Hacer una solicitud HTTP para la URL 2 con el ID de la URL 1
        return getData(url2 + response1.id);
    })
    .then(function(response2) {
        console.log("Respuesta 2:", response2);
        // Hacer una solicitud HTTP para la URL 3 con el postId de la URL 2
        return getData(url3 + response2[0].postId);
    })
    .then(function(response3) {
        console.log("Respuesta 3:", response3);
        // Hacer una solicitud HTTP para la URL 4 con el ID de la URL 3
        return getData(url4 + response3[0].id);
    })
    .then(function(response4) {
        console.log("Respuesta 4:", response4);
        // Hacer una solicitud HTTP para la URL 5 con el userId de la URL 4
        return getData(url5 + response4[0].userId);
    })
    .then(function(response5) {
        console.log("Respuesta 5:", response5);
    })
    .catch(function(error) {
        console.error(error);
    });
  