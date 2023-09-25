function operaciones( a, b ) {

    function suma( x, y ) {
        console.log( x + y );
    }
    
    function resta( x, y ) {
        console.log( x - y );
    }
    
    function multiplicacion( x, y ) {
        console.log( x * y );
    }
    
    function division( x, y ) {
        console.log( x / y );
    }

    suma( a, b );
    resta( a, b );
    multiplicacion( a, b );
    division( a, b )

}

operaciones( 3, 6 );