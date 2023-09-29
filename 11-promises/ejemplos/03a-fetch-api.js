const urlEndPoint = 'https://api.breakingbadquotes.xyz/v1/quotes';

const data = fetch( urlEndPoint );

//console.log( data );              // Pending


data
    .then( ( response ) => {        // Fullfield
        return response.json();    
    })
    .then( data => {
        console.log( data );
    })
    .catch( ( error ) => {          // Reject
        console.error( error );
    });