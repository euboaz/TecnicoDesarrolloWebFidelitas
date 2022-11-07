
//Declaracion de Variables
var precio = parseFloat(prompt("Ingrese el valor del pantalon para calcular costo con descuento: "));
var preciototal;

//Estructura de If - Else para calcular los descuentos y precios de los pantalones

if(precio<=20000){ preciototal = precio-(precio*0.05);
                   alert("El precio original del producto es de: "+precio+"\n"+
                         "El descuento aplicado corresponde a: "+precio*0.05+"\n"+
                         "El precio total a cobrar es de: "+preciototal);
}else if (precio<=30000){preciototal = precio-(precio*0.10);
    alert("El precio original del producto es de: "+precio+"\n"+
          "El descuento aplicado corresponde a: "+precio*0.10+"\n"+
          "El precio total a cobrar es de: "+preciototal);
}else{preciototal = precio-(precio*0.15);
    alert("El precio original del producto es de: "+precio+"\n"+
          "El descuento aplicado corresponde a: "+precio*0.15+"\n"+
          "El precio total a cobrar es de: "+preciototal);
}