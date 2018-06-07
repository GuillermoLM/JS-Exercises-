var numIntroducido: string = prompt("Introduce un número de varias cifras, o no: ");
var num = parseInt(numIntroducido);

var b:string =  num.toString(2);

for (var i:number = 0; i < b.length; i++) 
{
    if(b[i]===b[i+1])
    {
        document.write('Numero no simpatico');
    }
}

document.write("Numero simpático");

