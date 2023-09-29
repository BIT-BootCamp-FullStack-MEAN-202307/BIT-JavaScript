/** Definicion de una promesa */
const hernanPromete = new Promise( ( resolve, reject ) => {
    //resolve( 'Hernan estudio juiciosamente JavaScript' );             // resolve(): Se invoca cuando la promesa se cumple
    reject( 'Hernan no cumplio su promesa de estudiar JavaScript' );    // reject(): Se invoca cuando la promesa se cumple
});


/** Implementa la forma de resolver la promesa */
hernanPromete
    .then( ( resultado ) => {
        console.log( resultado );       // 'Hernan estudio juiciosamente JavaScript'
    } )
    .catch( ( err ) => {
        console.log( '>>>', err );      // 'Hernan no cumplio su promesa de estudiar JavaScript'
    } );