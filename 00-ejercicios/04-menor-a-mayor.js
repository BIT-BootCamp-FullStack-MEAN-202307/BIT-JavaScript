let array = [8, 1, 3, 5, 2];
let temp = array[0];

for (let j = 0; j < array.length - 1; j++) {

    for (let i = 0; i < array.length - 1; i++) {

        console.log(i, i + 1);

        if( array[i + 1] < array[i] ) {

            temp = array[i];
            array[i] = array[i + 1]
            array[i + 1] = temp;
        
        }
    
    }       

}

console.log( array );