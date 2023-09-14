const nombre = prompt( 'Digita tu nombre' );

/** Formas de contatenar */
const concatenarUsandoOperadorDeSuma = 'Hola ' + nombre + ' bienvenido!'
alert( concatenarUsandoOperadorDeSuma );

const concatenarUsandoFuncionJS = 'Hola '.concat( nombre ).concat( ' bienvenido! ' );
alert( concatenarUsandoFuncionJS );

// ECScript 6
// ``:  Backtics (Obligatorias)
// ${}: Interpolacion
const templateString = `Hola ${ nombre } bienvenido!`;
alert( templateString );



