const urlEndPoint = 'https://ap.breakingbadquotes.xyz/v1/quotes';

const promise = fetch( urlEndPoint );

// console.log( data );        // Pending


async function getData() {

    /** try/catch: Controlar las excepciones */
    try {                                           
        const response = await promise;         
        // console.log( response );

        if( response.status == 200 ) {
            const data = await response.json();
            console.log( data );
        }                                       // Fullfield
    } 
    catch ( error ) {                           // Rejected
        // console.error( error );
        console.error( 'Fallo la peticion a la API' ); 
    }

}

getData();