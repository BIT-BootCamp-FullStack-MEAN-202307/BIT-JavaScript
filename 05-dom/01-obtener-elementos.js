/** API JavaScript */
const $btnEl = document.getElementById( 'btn-enviar' );

$btnEl.addEventListener( 'click', function ( event ) {
    event.preventDefault();

    const $inputEl = document.getElementById( 'nombre' );

    console.log( $inputEl.value );

    const $fieldEl = document.getElementById( 'field' );
    const $pEl = document.createElement( 'p' );
    
    $pEl.textContent = $inputEl.value;      // Asignando el valor que tengo en el input al parrafo
    
    
    $fieldEl.append( $pEl );                // Agrego como hijo al elemento
});

console.log( $btnEl );