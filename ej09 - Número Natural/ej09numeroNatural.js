var numIntroducido1 = prompt("Introduce un número de varias cifras: ");
var numIntroducido2 = prompt("Introduce un número de varias cifras: ");
if (numIntroducido1[numIntroducido2] === undefined) {
    document.write("-1");
}
else {
    var show = parseInt(numIntroducido1[numIntroducido2]);
    document.write("Es: " + show);
}
