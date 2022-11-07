var numero1,numero2,resultado;

function leer(){

    numero1 = parseInt(prompt("Ingrese el valor del primer numero: "));
    numero2 = parseInt(prompt("Ingrese el valor del primer numero: "));
    if(numero1>numero2){alert("El numero: "+numero1+" es mayor a el numero "+numero2);
    }else{alert("El numero: "+numero2+" es mayor a el numero "+numero1);}
}