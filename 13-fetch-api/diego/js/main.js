const url = 'https://api.breakingbadquotes.xyz/v1/quotes';
const $rootEl = document.querySelector( 'div.root' );

console.log( $rootEl );

function obtenerFraseAleatoria () {
    fetch( url )
        .then( function( response ){
            return response.json();
        })
        .then( ( data ) => {
            // console.log( data[ 0 ].quote );

            let html = '<p>' + data[ 0 ].quote + '<span>' + data[ 0 ].author + '</span></p>';

            $rootEl.innerHTML = html;
        } )
        .catch( () => {
                console.log( 'Muy mal' )
        });
}

obtenerFraseAleatoria();