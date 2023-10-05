function getData() {
    const url = 'https://fakestoreapi.com/products/2';
    

    fetch( url )
        .then( response =>{
            // console.log( response.json() );

            return response.json();
        })
        .then( data => {
            console.log( data.title );

            const $dataEl = document.querySelector( '.data' );
            const $h1El = document.createElement( 'h1' );

            $h1El.textContent = data.title;
            $dataEl.appendChild( $h1El );
        })
        .catch( ( error ) => {
            console.error( error )
        });
 
}

let count = 1;
getData();

const $btnEl = document.querySelector( '.btn-pedir' );

$btnEl.addEventListener( 'click', () => {

    const url = `https://fakestoreapi.com/products/${ count }`;

    fetch( url )
        .then( response => {
            return response.json();
        })
        .then( data => {

            const $dataEl = document.querySelector( '.data' );
            
            const $h1AEliminar = $dataEl.firstChild;
            $dataEl.removeChild( $h1AEliminar );

            const $h1El = document.createElement( 'h1' );
            $h1El.textContent = data.title;
            
           
            $dataEl.appendChild( $h1El );
        })
        .catch( error => {
            console.log( error );
        })

    count++;

} );

