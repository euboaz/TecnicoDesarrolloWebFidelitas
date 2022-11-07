var numero = parseFloat(prompt("Ingrese un numero: "));

if(numero<10 && numero%3==0){alert("El numero ingresado es un numero impar, menor a 10");
}else if (numero<10 && numero%2==0){alert("El numero ingresado es un numero par, menor a 10");
}else if (numero == 10){alert("El numero ingresado es igual a 10");
}else{alert("El numero ingresado es mayor a 10 y su promedio es de: "+numero/1);}