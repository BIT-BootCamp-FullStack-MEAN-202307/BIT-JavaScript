function loadImage( urlImage ) {
    /** Definicion de una promesa */
    const getImage = new Promise( ( resolve, reject ) => {
        const image = new Image();          // <img src="..." />

        // Validando que la imagen cargue
        image.onload = () => {
            resolve( image );
        }
        // Validando que la imagen no cargo
        image.onerror = () => {
            reject( new Error( 'No se pudo cargar la fuente de la imagen' ) );
        }

        // Asignamos la url como recurso del elemento HTML <img />
        image.src = urlImage;
        image.alt = 'Mario Bros';
        image.title = 'Mario Bros salta!!!';

    } );

    return getImage;
}

/** Implementa la forma de resolver la promesa */
const url = 'https://mario.nintendo.com/static/f350c31adcd6378b913f7660db299714/7e15c/mario.png';

// console.log( loadImage() );      // Descomentar para visualizar el estado // Pending

loadImage( url )                    // Pending
    .then( ( image ) => {           // Fullfield
        console.log( image );       

        document.body.appendChild( image );
    } )
    .catch( ( err ) => {            // Rejected
        console.log( err );         

        const $pEl = document.createElement( 'p' );
        $pEl.textContent = 'No se pudo cargar la imagen';
        document.body.appendChild( $pEl );
    } );