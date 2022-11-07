var numeros = new Array(10)

for (i=0;i<10;i++){
    numeros[i]=parseInt(prompt("Ingrese un numero entero: "));
}

alert("Contenido del array sin ordenar: "+numeros)
alert("Contenido del array en forma descendente: "+numeros.sort((a,b)=> b - a));
alert("Contenido del array en forma ascendente: "+numeros.sort((a,b)=> a - b));