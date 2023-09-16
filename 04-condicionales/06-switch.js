let numeroDia = prompt( 'Digite el # de un dia de la semana' );

// console.log( typeof numeroDia );
numeroDia = Number( numeroDia );
// console.log( typeof numeroDia );

switch( numeroDia ) {
    case 1:
        console.log( 'Lunes' );
        break;
    case 2:
        console.log( 'Martes' );
        break;
    case 3:
        console.log( 'Miercoles' );
        break;
    case 4:
        console.log( 'Jueves' );
        break;
    case 5:
        console.log( 'Viernes' );
        break;
    case 6:
        console.log( 'Sabado' );
        break;
    case 7:
        console.log( 'Domingo' );
        break;
    default:
        console.log( 'El dia ' + numeroDia + ' no existeeeeeeee!' );
}