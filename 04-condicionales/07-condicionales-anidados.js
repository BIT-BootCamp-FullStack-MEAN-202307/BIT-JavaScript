const name = 'Luis';
const age = 21;
const military = true;
const gender = 'other';

if( age >= 18 ) {
    if( gender != 'male' ) {
        console.log( 'No olvides que tienes un descuento' );
    } 
    else {
        if( military ) {
            console.log( 'Disfruta el concierto' );
        }
        else {
            console.log( 'Pilas se lo llevan' );
        }
    }
}
else {
    console.log( 'Vaya que le limpien la colita' );
}


