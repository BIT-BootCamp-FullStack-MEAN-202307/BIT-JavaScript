// Realizar una solicitud utilizando Fetch API
fetch( 'https://jsonplaceholder.typicode.com/posts' )               // Promise <Pending>
    .then( function ( response ) {                                  // Promise <Fullfield>
        // console.log( response );

        // Comprobar el estado de la respuesta
        if ( response.status === 200 ) {
            // Procesar la respuesta JSON
            return response.json();
        } else {
            throw new Error('Error al realizar la solicitud');
        }
    })
    .then( function( posts ) {
        console.log( posts );
    })
    .catch(function( error ) {                                      // Promise <Reject>
        console.log( error );
    });