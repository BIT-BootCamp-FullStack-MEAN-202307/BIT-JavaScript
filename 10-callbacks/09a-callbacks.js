function hola() {
    console.log( 'Hola' )
}

function adios() {
    console.log( 'adios' )
}

/** Implementacion */
hola();
setTimeout( () => {
    console.log( 'Suerte es que le digo!' )
}, 2000 );
setTimeout( () => {
    console.log( 'Agonia!' )
}, 2200 );
adios();


