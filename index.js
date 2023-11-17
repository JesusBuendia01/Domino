var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var edad = urlParams.get('edad');
var contador = urlParams.get('contador');
var edadTxt = document.getElementById('edad');
var percentilTxt = document.getElementById('percentil');
var rangoTxt = document.getElementById('rango');
var percentil = 0;

if (edad >= 12 || edad <= 13) {
    if (contador == 38)
        percentil = 95;
    else if (contador == 35)
        percentil = 90;
    else if (contador == 32)
        percentil = 75;
    else if (contador == 27)
        percentil = 50;
    else if (contador == 22)
        percentil = 25;
    else if (contador == 14)
        percentil = 10;
    else if (contador == 9)
        percentil = 5;
} else if (edad >= 14 || edad <= 15) {
    if (contador == 39)
        percentil = 95;
    else if (contador == 37)
        percentil = 90;
    else if (contador == 33)
        percentil = 75;
    else if (contador == 28)
        percentil = 50;
    else if (contador == 23)
        percentil = 25;
    else if (contador == 15)
        percentil = 10;
    else if (contador == 11)
        percentil = 5;
} else if (edad >= 16 || edad <= 17) {
    if (contador == 41)
        percentil = 95;
    else if (contador == 39)
        percentil = 90;
    else if (contador == 34)
        percentil = 75;
    else if (contador == 29)
        percentil = 50;
    else if (contador == 24)
        percentil = 25;
    else if (contador == 16)
        percentil = 10;
    else if (contador == 12)
        percentil = 5;
} else if (edad >= 18 || edad <= 65) {
    if (contador == 41)
        percentil = 95;
    else if (contador == 40)
        percentil = 90;
    else if (contador == 36)
        percentil = 75;
    else if (contador == 31)
        percentil = 50;
    else if (contador == 25)
        percentil = 25;
    else if (contador == 20)
        percentil = 10;
    else if (contador == 16)
        percentil = 5;
}



if (percentil == 95)
    rangoTxt.innerHTML = "Su rango es SUPERIOR ";
else if (percentil >= 75 && percentil <= 90) {
    rangoTxt.innerHTML = "Su rango es SUPERIOR AL TÉRMINO MEDIO ";
}
else if (percentil == 50)
    rangoTxt.innerHTML = "Su rango es TÉRMINO MEDIO ";
else if (percentil >= 10 && percentil <= 25)
    rangoTxt.innerHTML = "Su rango es INFERIOR AL TÉRMINO MEDIO ";
else if (percentil >= 0 && percentil <= 0)
    rangoTxt.innerHTML = "Su rango es DEFICIENTE ";

edadTxt.innerHTML = "Edad: "+edad + " años";
percentilTxt.innerHTML = "Percentiles: "+percentil + "%";