//Declaracion de Variables

alert("Ingrese la medida de los triangulos para determinar su tipo \nRectángulo\nAcutángulo\nObtusángulo");
var angulo1,angulo2,angulo3;

for (var i = 0; i<2; i++){
angulo1 = prompt("Ingrese el valor del primer angulo: ");
angulo2 = prompt("Ingrese el valor del segundo angulo: ");
angulo3 = prompt("Ingrese el valor del tercer angulo: ");

if (angulo1&&angulo2&&angulo3<90){
alert("Angulo 1 = "+angulo1+"°"+"Angulo 2 = "+angulo2+"°"+"Angulo 3 = "+angulo3+"°"+" El triangulo es Acutangulo");
}else if (angulo1||angulo2||angulo3==90){
alert("Angulo 1 = "+angulo1+"°"+"Angulo 2 = "+angulo2+"°"+"Angulo 3 = "+angulo3+"°"+" El triangulo es Rectangulo");
}alert("Angulo 1 = "+angulo1+"°"+"Angulo 2 = "+angulo2+"°"+"Angulo 3 = "+angulo3+"°"+" El triangulo es Obtusangulo");
}
    

