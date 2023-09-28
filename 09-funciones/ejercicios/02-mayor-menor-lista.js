function mayor( list ) {

    if( list == undefined || list.length == 0  ) {
        throw new Error( 'La lista esta vacia o esta indefinida' );
    }


    let temp = list[ 0 ];

    for( let i = 0; i < list.length; i++ ) {
        if( list[ i ] > temp ) {
            temp = list[ i ];
        }
    }
    
    return temp ;
}

function menor( list ) {

    if( list == undefined || list.length == 0  ) {
        throw new Error( 'La lista esta vacia o esta indefinida' );
    }


    let temp = list[ 0 ];

    for( let i = 0; i < list.length; i++ ) {
        if( list[ i ] < temp ) {
            temp = list[ i ];
        }
    }
    
    return temp ;
}


let numberList = [ 3, 7, 0, 9, 1 ];

const numeroMayor = mayor( numberList );
console.log( numeroMayor );

const numeroMenor = menor( numberList );
console.log( numeroMenor );

