var letra;

function vocalconsonante(){
    letra = prompt("Ingrese la letra a validar: ");

    if (letra === "a"||letra === "e"||letra === "i"||letra === "o"||letra === "u"){alert("La letra "+letra+" es una Vocal");
}else{alert("La letra "+letra+" es una Consonante");}

}