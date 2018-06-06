var max=20;
	// determina el numero de lineas mostradas
	var j=1;
	// contiene el resultado a mostrar
	var result="";
 
	for(i=1;i<=max;i+=2)
	{
		result+="<br>"+(Array((1+(Math.ceil(max/2))-j)).join(" ")+Array(i+1).join("*"));
		j=j+1;
	}
 
	//tronco
	if(max>=7)
	{
		result+="<br>"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
		result+="<br>"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
	}
 
	document.getElementById(id).innerHTML=result;