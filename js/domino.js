const respuestas = {
    1: { 1: 2, 2: 4 },
    2: { 1: 6, 2: 1 },
    3: { 1: 3, 2: 5 },
    4: { 1: 0, 2: 2 },
    5: { 1: 4, 2: 1 },
    6: { 1: 6, 2: 3 },
    7: { 1: 5, 2: 2 },
    8: { 1: 0, 2: 4 },
    9: { 1: 2, 2: 6 },
    10: { 1: 3, 2: 3 },
    11: { 1: 4, 2: 0 },
    12: { 1: 5, 2: 2 },
    13: { 1: 2, 2: 3 },
    14: { 1: 5, 2: 6 },
    15: { 1: 1, 2: 4 },
    16: { 1: 2, 2: 5 },
    17: { 1: 6, 2: 0 },
    18: { 1: 1, 2: 4 },
    19: { 1: 2, 2: 2 },
    20: { 1: 6, 2: 4 },
    21: { 1: 0, 2: 4 },
    22: { 1: 6, 2: 3 },
    23: { 1: 2, 2: 1 },
    24: { 1: 3, 2: 5 },
    25: { 1: 6, 2: 4 },
    26: { 1: 3, 2: 0 },
    27: { 1: 1, 2: 5 },
    28: { 1: 2, 2: 1 },
    29: { 1: 5, 2: 2 },
    30: { 1: 5, 2: 2 },
    31: { 1: 5, 2: 6 },
    32: { 1: 4, 2: 0 },
    33: { 1: 4, 2: 5 },
    34: { 1: 1, 2: 0 },
    35: { 1: 6, 2: 2 },
    36: { 1: 3, 2: 5 },
    37: { 1: 6, 2: 0 },
    38: { 1: 4, 2: 6 },
    39: { 1: 3, 2: 5 },
    40: { 1: 2, 2: 1 },
    41: { 1: 5, 2: 1 },
    42: { 1: 0, 2: 6 },
    43: { 1: 3, 2: 6 },
    44: { 1: 3, 2: 0 },
    45: { 1: 2, 2: 5 },
    46: { 1: 4, 2: 6 },
    47: { 1: 5, 2: 5 },
    48: { 1: 5, 2: 2 }
}
function activar() {
    document.body.innerHTML += "<div><button id='b1'>Nuevo Botón</button></div>";
}
const $cont = document.querySelector('.num'),
    $num1 = document.querySelector('.num1'),
    $num2 = document.querySelector('.num2'),
    $btnNext = document.querySelector('.check'),
    $img = document.querySelector('#img-domino'),
    $intento = document.querySelector('#intento'),
    $error = document.querySelector('#error'),
    $showImg = document.querySelector('#show-image');

const changeImg = (num) => {
    $img.src = `http://localhost/Domino/assets/${num}.jpg`;
    $cont.innerText = num;
    $num1.value = "";
    $num2.value = "";
}

const form = () => {
    $showImg.innerHTML = ` 
   
    `;
}

const saveData = () => {

}

const incIntent = (intento) => {
    parseInt($cont.value) > 48
        ? form()
        : $intento.innerText = intento;

}

$btnNext.addEventListener('click', () => {
    let n1 = parseInt($num1.value),
        n2 = parseInt($num2.value),
        num = parseInt($cont.textContent),
        intento = parseInt($intento.textContent);
    if (num > 48) {
        const div = document.querySelector("div");
        div.innerHTML = ` 
        
        <section id="container">
			<header>
			</header>
			
    <center>
        <h1>Felicidades</h1> 
        <h3>Logro terminar todos los niveles ${$intento.innerText} intentos</h3>
        <h4>Gracias por jugar</h4>  
        <button class="btn-start" onclick="location.reload()">Jugar de nuevo</button> <br><br><br>

        <a href="index.html"> Volver a la pantalla de inicio </a></center>
    `;


    }

    else if (typeof n1 == 'number' && typeof n2 == 'number') {
        if (n1 === respuestas[`${num}`][1] && n2 === respuestas[`${num}`][2]) {
            num++;
            changeImg(num);
            $error.textContent = '';
        } else {
            $error.textContent = 'Respuesta incorrecta'; $error.classList.remove('visibility');
            setTimeout(() => {
                $error.classList.add('visibility'); $num1.value = ""; $num2.value = "";
            }, 1000);
        }
        intento++;
        incIntent(intento);
    }
});