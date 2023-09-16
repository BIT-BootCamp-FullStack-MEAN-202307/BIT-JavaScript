const edad = 18, altura = 178;

// Tablas de verdad
// AND -> && (ampersand), OR -> || (pipe), NOR -> ! (Cierre de la admiracion)
let result = edad > 18 || edad == 18;       // false || true = true
console.log( result );

result = edad > 18 && altura >= 180;        // false && false = false  
console.log( result );

result = ! ( edad > 18 ) && ! ( altura >= 180 );  // ! false && ! false = true
console.log( result ); 

// >
// <
// <=
// >=
// !
