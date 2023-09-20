const $formEl = document.querySelector( '[data-form]' );
console.log( $formEl );

let products = [];

$formEl.addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    const 
        $inputProductEl = document.querySelector( '[data-input-product]' ),
        $inputPriceEl = document.querySelector( '[data-input-price]' ),
        $inputQuantityEl = document.querySelector( '[data-input-quantity]' );

    const newProduct = {
        name: $inputProductEl.value,
        price: $inputPriceEl.value,
        quantity: $inputQuantityEl.value
    }

    console.log( newProduct );
    products.push( newProduct );
    console.log( products );

    localStorage.setItem( 'shoppingCart', JSON.stringify( products ) );

});
