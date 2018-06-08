var arrayOfNumbers: number[] = [];

for (var i = 0; i <= 3; i++) {
    var numIntroducido: string = prompt("Introduce 4 números: ");
    var num = parseInt(numIntroducido);
    var newArray = arrayOfNumbers.push(num);   
}

var sumaE:number=0;
for (var i = 0; i < arrayOfNumbers.length; i++) {
    sumaE+=arrayOfNumbers[i];
}

arrayOfNumbers.sort();
document.write("El numero más pequeño introducido es: " + arrayOfNumbers[0] + "<br>");
document.write("El numero más grande introducido es: " + arrayOfNumbers[arrayOfNumbers.length-1] + "<br>");
document.write("La suma de todos los elementos del array es: "+ sumaE);