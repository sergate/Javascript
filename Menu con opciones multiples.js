function Factorial(numero){
    let FactNum = 1;
    for (let i=1; i<=numero; i++){
        FactNum = FactNum * i;
    }
    return FactNum;
}

function Promedio(){
    let total = 0, CalFinal = 0;
    for(let i = 1; i <= 4; i++){
        let Califica = prompt(`Introduce la calificacion de la materia` + i);
        let Ncalif = parseInt(Califica);
        total = total + parseInt(Ncalif);
    }
    CalFinal = parseInt(total) / 4;
    alert("La suma total es: " + total + " La calificacion final es: " + CalFinal);
    if (CalFinal >= 9){
        Nota = "Excelente";
    }else if(CalFinal >= 8) {
        Nota = "Muy Bien";
    }else if(CalFinal >= 7) {
        Nota = "Bien";
    }else{
        Nota = "Desaprobado";
    }
    return (CalFinal);
}

function ConGrados(Tipo, GradFC){
    let Grados = 0;
    if (Tipo == "C"){
        Grados = ( GradFC - 32) / 1.8;
    } else{
        Grados = GradFC * 1.8 + 32;
    }
    return Grados
}

let opc = 0;
let Nota = " ";
while (opc != 4){
    opc = prompt(`Menu de Opciones:
1.- Calcular el factorial de un numero
2.- Calcular el promedio de 4 materias
3.- Convertir grados Celsius/Farenheit
4.- Salir
Introduce la Opcion: `);
    if (opc == 1){
        numero = prompt("Introduce el numero para calcular su factorial ");
        FactNum = Factorial(numero);
        alert(`El factorial del numero es: ${FactNum}`);
    } else if (opc == 2){
        CalFinal = Promedio();
        alert(`El promedio final es: ${CalFinal} y corresponde a ${Nota}`);
    } else if (opc == 3){
        let Tipo = prompt("Que deseas convertir? F.- Farenheit a Celsius / C.- Celsius a Farenhei ");
        let GradFC = prompt("Introduce los grados ");
        let Grados = ConGrados(Tipo, GradFC);
        alert(`La conversion de los grados ${GradFC} ${Tipo} es: ${Grados}`);
    }else if (opc == 4){
        document.writeln ("Adios, gracias por participar <br \>");
    } else{
        alert("Opcion invalida, favor de verificarla");
    }
}

