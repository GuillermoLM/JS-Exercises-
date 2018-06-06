var n1, i;
i = 0;
n1 = parseInt(prompt("Introduce la tabla a multiplicar: "));

for(i=0; i<=10; i++){
    if(i%1==0){
        document.write("<br>"+n1+"*"+i+"="+(n1*i));
    }
}