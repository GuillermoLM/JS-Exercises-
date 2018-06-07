var numIntroducido = prompt("Introduce un numero de líneas para dibujar un árbol: ");
var num = parseInt(numIntroducido);
var espacio = "&nbsp&nbsp";
if (num < 5) {
    alert('Debes introducir un numero mayor de 5');
}
else {
    var a = "<br>";
    var j = 1;
    for (var i = 0; i < num; i++, j = i + 1) {
        for (j; j < num; j++) {
            (a += espacio);
        }
        for (j = 0; j < 2 * i + 1; j++) {
            (a += "*");
        }
        a += "<br>";
    }
    document.write(a);
}
