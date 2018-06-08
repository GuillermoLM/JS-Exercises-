var numIntroducido = prompt("Introduce un número de varias cifras: ");
var num = parseInt(numIntroducido);
var divNum = num / 2;
var isNumEs = false;
for (var i = divNum; i > -1; i--) {
    if (i === 1 || i === 3 || i === 5) {
        isNumEs = true;
    }
}
for (var i = divNum + 1; i < num + 1; i++) {
    if (i === 1 || i === 3 || i === 5) {
        isNumEs = false;
    }
}
if (isNumEs) {
    document.write("El numero es estricto");
}
else {
    document.write("El numero NO es estricto");
}
// for(var i=0; i<numIntroducido.length; i++)
// {
//     numIntroducido.charAt(i);
//     if(numIntroducido.charAt(0) === "1" || numIntroducido.charAt(0) === "3" ||numIntroducido.charAt(0) === "5")
//     {
//         alert("Se trata de un numero estricto");
//     }
//     if(numIntroducido.charAt(1) === "1" || numIntroducido.charAt(1) === "3" ||numIntroducido.charAt(1) === "5")
//     {
//         alert("Se trata de un numero estricto");
//     }
//     if(numIntroducido.charAt(2) === "1" || numIntroducido.charAt(2) === "3" ||numIntroducido.charAt(2) === "5")
//     {
//         alert("Se trata de un numero estricto");
//     }
//     if(numIntroducido.charAt(i) !== "1" || numIntroducido.charAt(i) !== "3" ||numIntroducido.charAt(i) !== "5")
//     {
//         alert("NO es un numero estricto");
//     }
// }
// if(numIntroducido.charAt(0)=== "1" || numIntroducido.charAt(0)=== "3" || numIntroducido.charAt(0)=== "5"){
//     alert(numIntroducido + " Es un número estricto")
// }
// if(numIntroducido.charAt(1)=== "1" || numIntroducido.charAt(1)=== "3" || numIntroducido.charAt(1)=== "5"){
//     alert(numIntroducido + " Es un número estricto")
// }
// document.write(numIntroducido.charAt(0));
