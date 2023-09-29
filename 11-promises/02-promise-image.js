/** Definicion de una promesa */
const obtenerImagen = new Promise( ( resolve, reject ) => {

    const hayImagen = false;

    if( hayImagen ) {
        resolve( 'Carga la imagen exitosamente' );
    }
    else {
        reject( 'El archivo esperado no ha cargado!' );
    }

});


/** Implementa la forma de resolver la promesa */
obtenerImagen
    .then( ( response ) => {
        console.log( response );
    } )
    .catch( ( error ) => {
        console.log( error );
    } );