/** for-in: Itera de 1 en 1 hacia delante y solo extrae el valor dentro del campo de la lista */
const frutas = [ 'Mango', 'Mandarina', 'Mangostino' ];

frutas.push( 'Mora' );

for( let index in frutas ) {
    console.log( index );
}