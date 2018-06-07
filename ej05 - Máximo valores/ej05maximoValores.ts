var numero1 = parseInt(prompt("Introduce el primer número: "));
var numero2 = parseInt(prompt("Introduce el segundo número: "));

if(numero1 > numero2){
    alert("El "+numero1+" es mayor que "+numero2);
}
if(numero2 > numero1){
    alert("El "+numero2+" es mayor que "+numero1);
}
if(numero1 === numero2){
    alert("Son iguales");
}