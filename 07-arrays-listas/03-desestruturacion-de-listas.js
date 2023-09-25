const heroes = [ 'Superman', 'Batman', 'Wonder Woman', 'American Greatest Hero' ]

console.log( heroes[ 2 ] );

/** Desestructuracion en listas */
const [ , , ww, ] = heroes;
console.log( ww );