function menorAMayor( value1, value2 ) {
    return value1 < value2;
}

function mayorAMenor( value1, value2 ) {
    return value1 > value2;
}

function ordenar( array, done ) {
    let temp = array[0];

    for (let j = 0; j < array.length - 1; j++) {

        for (let i = 0; i < array.length - 1; i++) {
    
            // console.log(i, i + 1);
    
            if( done( array[i + 1], array[i] ) ) {
    
                temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp;
            
            }
        
        }       
    
    }

    return array;
}


const numeros = [ 5, 4, 6, 8, 2, 1 ];
let resultado = ordenar( numeros, menorAMayor );
console.log( resultado );
     

const numeros2 = [ 5, 4, 6, 8, 2, 1 ];
resultado = ordenar( numeros2, mayorAMenor );
console.log( resultado );

