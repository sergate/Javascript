let estatura = parseInt(prompt("Ingrese la estatura en centímetros"));
let cantpers = 0;
let sumest = 0;

while(estatura>0){
    estatura = parseInt(prompt("Ingrese la estatura en centímetros"));
    cantpers = cantpers + 1;
    sumest = sumest + estatura;
}

if(cantpers === 0){
    alert('No hay estaturas ingresadas');
} else{
    alert(`El promedio de estaturas de las ${cantpers} personas es de: ${sumest/cantpers} centímetros`);
}
