alert("Bienvenido al sistema para determinar Consonante o Vocal");

var ciclo = 0;
while (ciclo != 1){
    var letra = prompt("Ingrese la letra a consultar: ")
switch(letra){

    case a: alert("La letra digitada es a y es una Vocal");
    ciclo = parseInt(prompt("Desea consultar otra letra: 0) Si 1) NO "));
    break;
    case e: alert("La letra digitada es e y es una Vocal");
    ciclo = parseInt(prompt("Desea consultar otra letra: 0) Si 1) NO "));
    break;
    case i: alert("La letra digitada es i y es una Vocal");
    ciclo = parseInt(prompt("Desea consultar otra letra: 0) Si 1) NO "));
    break;
    case o: alert("La letra digitada es o y es una Vocal");
    ciclo = parseInt(prompt("Desea consultar otra letra: 0) Si 1) NO "));
    break;
    case u: alert("La letra digitada es u y es una Vocal");
    ciclo = parseInt(prompt("Desea consultar otra letra: 0) Si 1) NO "));
    break;
    default: alert("La letra digitada es "+letra+" y es una Consonante");
    ciclo = parseInt(prompt("Desea consultar otra letra: 0) Si 1) NO "));
    break;
}
}


