// for( inicializador; condicion; aumento o decremento)
// for( let i = 0; i < 9; i++ ) {
//     console.log( i );
// }

// for( let i = 9; i >= 0; i-- ) {
//     console.log( i );
// }

// for ( let i = 1; i <= 10; i = i + 2 ) {         // i += 2 --- abrebietura de --> i = i + 2
//     console.log( i );
// }

// for ( let i = 10; i >= 0; i -= 2 ) {         // i -= 2 --- abrebietura de --> i = i - 2
//     console.log( i );
// }

// for ( let i = 0; i <= 100; i += 5 ) {
//     console.log( i );
// }

// Concepto matematico
// [ 1 - 5 ] --> 2, 3, 4
// [ 1 - 5 ) --> 2, 3, 4, 5
// ( 1 - 5 ) --> 1, 2, 3, 4, 5

// for ( let i = 0; i < 101; i++ ) {
//     if( i % 5 == 0 ) {
//         console.log( i );
//     }
// }

const nombres = [ 'Juan', 'Tania', 'Yecid', 'Catalina', 'Claudio', 'Sergio'  ];   // nombres.length = longitud ( 3 )

// console.log( nombres[ 2 ] );

// for( let i = 0; i < nombres.length; i++ ) {
//     console.log( nombres[ i ] );
// }

// for( let i = nombres.length - 1 ; i >= 0 ; i-- ) {
//     console.log( nombres[ i ] );
// }

// for( let i = 0; i < nombres.length; i += 2 ) {
//     console.log( nombres[ i ] );
// }

// for( let i = 0; i < nombres.length; i++ ) {
//     if( i % 2 == 0 ) {
//         console.log( nombres[ i ] );
//     }
// }

// for( let i = 0; i < nombres.length; i++ ) {
//     if( i % 2 == 0 ) {
//         console.log( i, nombres[ i ] );
//     }
// }



// let i = 0;
// while( i < nombres.length ) {
//     if( i % 2 == 0 ) {
//         console.log( i, nombres[ i ] );
//     }

//     i++;
// }