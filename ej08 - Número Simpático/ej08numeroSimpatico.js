var numIntroducido = prompt("Introduce un número de varias cifras: ");
var num = parseInt(numIntroducido);
var b = num.toString(2);
for (var i = 0; i < b.length; i++) {
    if (b[i] === b[i + 1]) {
        document.write('Numero no simpatico');
    }
}
document.write("Numero simpático");
