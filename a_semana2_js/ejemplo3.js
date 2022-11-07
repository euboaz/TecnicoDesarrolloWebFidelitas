var pesoAve = parseFloat(prompt("Ingrese el peso del ave para catagorizarla: "));

if (pesoAve<=2){alert("El peso ingresado corresponde a un Ave de Peso Bajo");
} else if (pesoAve<=2.75){alert("El peso ingresado corresponde a un Ave de Medio");
} else{alert("El peso ingresado corresponde a un Ave de Alto");}