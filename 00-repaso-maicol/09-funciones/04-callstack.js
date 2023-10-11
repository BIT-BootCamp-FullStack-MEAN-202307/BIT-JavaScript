function saludo () {
    saludaMama();
}

function saludaMama() {
    console.log( 'Mama saluda' )
}

function saludaPapa() {
    console.log( 'Papa saluda' );
}


/** Implementacion */
setTimeout( () => {
    console.log( 'Ya paso un segundo' );
}, 1000 );
saludaPapa();

setTimeout( () => {
    console.log( 'Ya paso medio segundo' );
}, 500 );
saludo();
