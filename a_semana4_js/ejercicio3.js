var letra;

function VocalConsonante(){
    const vocalconsonante = [];
    for(var i = 0; i < 20; i++){
        letra = prompt("Ingrese la letra a validar: ");
        vocalconsonante [i] = letra;

}}

function MostrarDatos(){
    var validacion;
    for(var i = 0; i < 20; i++){
validacion = vocalconsonante [i]
        if (validacion === "a"||letra === "e"||letra === "i"||letra === "o"||letra === "u"){alert("La letra "+letra+" es una Vocal y se encuentra en la pocision: "+i);
    }else{alert("La letra "+letra+" es una Consonante y se encuentra en la pocision: "+i);} 
}
}
