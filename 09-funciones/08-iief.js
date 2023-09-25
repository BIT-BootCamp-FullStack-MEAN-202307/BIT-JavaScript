// IIEF
// ( definicion de la funcion )();
// !definicion de la funcion();

// IIEF: Funcion Clasica
(function hola () {
    console.log( 'Soy la funcion hola()' );
})();

!function quemasparce() {
    console.log( 'Soy la funcion quemasparce()' );
}();

(() => {
    console.log( 'Soy la funcion quemas()' );
} )();

var result = (function () {
    var name = "Barry";
    return name;
})();

console.log( result );