// Define la forma como traemos por defecto el primer titulo
function getDataTitle() {
    const url = 'https://fakestoreapi.com/products/1';           // EndPoint al producto por ID
    

    // Por defecto fetch hace uso del verbo GET
    fetch( url )                        // Promesa
        .then( response =>{             // Exitosa: response... toda la respuesta del servidor> headers, status, statusText, etc
            console.log( response );

            return response.json();     // Parseando toda la respuesta para extraer la data 
        })
        .then( data => {                // Data: Objeto
            console.log( data.title );  // Onteniendo el titulo del objeto

            // DOM: 
            const $dataEl = document.querySelector( '.data' );      // Obtenemos la etiqueta: <div class="data"></div> del DOM
            const $h1El = document.createElement( 'h1' );           // Creamos un elemento <h1>

            $h1El.textContent = data.title;                         // Elemento <h1> le inyectamos el titulo del objeto
            $dataEl.appendChild( $h1El );                           // Agrega elmento <h1> como hijo del elemento <div class="data"></div> en el DOM
        })                              // Si hay algun error
        .catch( ( error ) => {
            console.error( error )
        });
 
}


getDataTitle();

/** Toda la logica del boton */
let count = 2;                                              // Me permitira enviar un ID incremental en cada evenco click
const $btnEl = document.querySelector( '.btn-pedir' );      // Obtenemos el elemento <button> del DOM   

// Elemento <button> escuchara solo los eventos de tipo click 
$btnEl.addEventListener( 'click', () => {

    const url = `https://fakestoreapi.com/products/${ count }`;     // EndPoint al producto por ID (el ID se incrementa)

    fetch( url )
        .then( response => {
            return response.json();
        })
        .then( data => {

            const $dataEl = document.querySelector( '.data' );      // Obtenemos la etiqueta: <div class="data"></div> del DOM
            
            const $h1AEliminar = $dataEl.firstChild;                // Obtenemos el primer hijo del elemento <div class="data"></div>
            $dataEl.removeChild( $h1AEliminar );                    // Elimna el elemento hijo de <div class="data"></div>

            const $h1El = document.createElement( 'h1' );           // Creamos un elemento <h1>
            $h1El.textContent = data.title;                         
            
           
            $dataEl.appendChild( $h1El );                           // Agrega elmento <h1> como hijo del elemento <div class="data"></div> en el DOM
        })
        .catch( error => {
            console.log( error );                                   // Elemento <h1> le inyectamos el titulo del objeto
        })

    count++;            // Incrementa el ID con el que reealizaremos la peticion

} );

