var numIntroducido = prompt("Introduce un numero para dibujar una silla: ");
var num = parseInt(numIntroducido);
if (num < 7 || num > 30) {
    alert('Debes introducir un numero entre 7 y 30');
}
var x = Math.round(num / 2);
while (num > 0) {
    if (num > x) {
        document.write("<br>" + '*');
    }
    if (num === x) {
        document.write("<br>" + '******');
    }
    if (num < x) {
        document.write("<br>" + '*' + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*");
    }
    num--;
}
