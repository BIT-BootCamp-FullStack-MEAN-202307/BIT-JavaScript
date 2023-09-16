let compare = 'a' > 1;

compare = '2' > 1;
console.log( compare );     // Cadena se convertira en un tipo Number TRUE

compare = '01' == 1;
console.log( compare );     // Cadena se convertira en un tipo Number TRUE

compare = '01' !== 1;
console.log( compare );     // Cadena se convertira en un tipo Number TRUE