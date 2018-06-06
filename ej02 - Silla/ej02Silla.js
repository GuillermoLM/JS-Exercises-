var n1, i;
i = 0;
n1 = parseInt(prompt("Introduce la altura de la silla (min 7 - max30): "));

if(n1 < 7){
    alert("Introduce un número mayor que 7");
}
if(n1 > 30){
    alert("Introduce un número menor que 30");
}

if(n1 >= 7 && n1 <= 30){
    for(i=0; i<n1; i++){
        if(i%1==0){
            document.write("<br>");
            document.write(("*"));
        }
    }
}



