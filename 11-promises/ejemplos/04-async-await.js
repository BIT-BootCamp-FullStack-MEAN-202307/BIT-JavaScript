const urlEndPoint = 'https://api.breakingbadquotes.xyz/v1/quotes';

const promise = fetch( urlEndPoint );

// console.log( data );        // Pending


async function getData() {
    const response = await promise;         // Fullfield
    console.log( response );
    
    const data = await response.json();
    console.log( data );
}

getData();

