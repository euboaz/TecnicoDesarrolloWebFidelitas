var numero;
const numeros = [];

function LeerNumeros(){
for (var i= 0; i < 3; i++) {
    numero = parseInt(prompt("Ingrese 10 numeros enteros: "));
    numeros [i] = numero;
}
}

function BuscarNumeros(){
    numero = parseInt(prompt("Ingrese el numero a buscar: : "));
    var prueba = numeros.indexOf(numero);
    if(prueba === -1){
alert("El numero solicitado no se encuentra en el arreglo.")
    }else{
    alert("El numero solicitado se encuentra en la pocision: "+prueba);
    }
}