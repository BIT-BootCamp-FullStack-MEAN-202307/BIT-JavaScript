const dia = prompt( '# dia' );

if ( dia < 1 ) {
    console.log( 'Deja de ser negativo' );
} 
else if ( dia > 0 && dia < 6 ) {
    console.log( 'Entre semana' );
}
else if( dia < 9 ) {
    console.log( 'Fin de semana' );
}
else {
    console.log( 'Error' )
}