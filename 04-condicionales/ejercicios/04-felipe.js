let numeroDia = prompt ('Digite el # de un dia de la semana');

numeroDia = Number( numeroDia );

if( numeroDia <= 0 ){
    console.log('No es un dia en la semana');
}
else if( numeroDia <= 5 ){
    console.log(' entresemana');
}
else if( numeroDia <=7 ){
    console.log('fin de semana')
}
else {
    console.log('no es un dia de la semana')
};