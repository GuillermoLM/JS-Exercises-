function myFunction() {
    var text;
    var fruits = document.getElementById("myInput").value;

    switch(fruits) {
        case "Madrid":
            text = "La Universidad de Madrid te convalida 30 créditos";
        break;
        case "Valencia":
            text = "La Universidad de Valencia te convalida 0 créditos";
        break;
        case "Murcia":
            text = "La Universidad de Murcia te convalida 25 créditos";
        break;
        case "Barcelona":
            text = "La Universidad de Barcelona te convalida 10 créditos";
         break;
        default:
        text = "Introduce una de nuestras universidades: Madrid, Valencia, Murcia o Barcelona";
    }
    document.getElementById("demo").innerHTML = text;
}