const dia = prompt( '# dia' );

switch( Number( dia ) ) {
    case 1:
    case 2:
    case 3:
    case 4:   
    case 5:
        console.log( 'Entre semana' );
        break;
    case 6:   
    case 7:
        console.log( 'Fin de semana' );
        break;
    default:
        console.log( 'Cambia de proveedor de matitas verdes' )
}