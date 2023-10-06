async function getData( url ) {
    const registros = undefined;


    try {
        const response = await fetch( url );
        const data = await response.json();

        if( response.status == 200 ) {
            return data;
        }

        
    } 
    catch ( error ) {
        console.error( 'Fallo en el EndPoint' );
        
        const $dataEl = document.querySelector( '.data' );
        const $imgEl = document.createElement( 'img' );
        

        $imgEl.setAttribute( 'src', 'https://images.emojiterra.com/google/android-pie/512px/2639.png' );
        $imgEl.setAttribute( 'alt', 'Not Found' );

        $dataEl.appendChild( $imgEl );

    }
}



const init = async () => {
    let templateHtml = '';
    const url = 'https://fakestoreapi.com/products';
    const datos = await getData( url );
    const $dataEl = document.querySelector( '.data' );

    console.log(datos);

    datos.forEach( objProduct => {
        templateHtml += `
        <div class="card">
            <div class="card-image">
                <img class="product-image" src="${ objProduct.image }" alt="${ objProduct.title }">
            </div>
            <div class="card-title">
                <h3>${ objProduct.title }</h3>
            </div>
            <div class="card-info">
                <p class="category">${ objProduct.category }</p>
                <p class="price">${ objProduct.price }</p>
                <p class="description">${ objProduct.description }</p>
            </div>
        </div>
        `;


        //console.log( objProduct );

    });


    $dataEl.innerHTML = templateHtml;
}

init();



