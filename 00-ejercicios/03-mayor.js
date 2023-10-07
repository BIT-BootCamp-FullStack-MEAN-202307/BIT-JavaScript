const list = [8, 1, 3, 5, 2];


let temp = list[0];

for (let i = 0; i < list.length; i++) {
    
    if(list[i] < temp) {
        temp=list[i];
    }
}
console.log(temp)
