function esMayor( numeroLista, numeroTemporal ) {
    return numeroLista > numeroTemporal;
}

function esMenor( numeroLista, numeroTemporal ) {
    return numeroLista < numeroTemporal;
}


function mayorMenor( list, done ) {

    if( list == undefined || list.length == 0  ) {
        throw new Error( 'La lista esta vacia o esta indefinida' );
    }


    let temp = list[ 0 ];

    for( let i = 0; i < list.length; i++ ) {
        if( done( list[ i ], temp ) ) {
            temp = list[ i ];
        }
    }
    
    return temp ;
}


let numberList = [ 3, 7, 0, 9, 1 ];
const numeroMayor = mayorMenor( numberList, esMayor );
console.log( numeroMayor );

const numeroMenor = mayorMenor( numberList, esMenor );
console.log( numeroMenor );

