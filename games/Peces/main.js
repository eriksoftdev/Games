/* Declaracion de variables de audio  */

const successSound = new Audio('audio/success.ogg');
const errorSound = new Audio('audio/error.ogg');



const gameContainer = document.getElementById('game-container');
const targetSyllable = document.getElementById('target-syllable');
const scoreElement = document.getElementById('score');
const missesElement = document.getElementById('misses');
const sea = document.getElementById('sea');


let score = 0;
let misses = 0;


// Opciones del select

let m = 'm';
let s = 's';
let p = 'p';
let l = 'l';
let t = 't';
let d = 'd';

let vocals = ['a', 'e', 'i', 'o', 'u'];

let currentTarget;

let syllables = [`${m}${vocals[0]}`, `${m}${vocals[1]}`, `${m}${vocals[2]}`, `${m}${vocals[3]}`, `${m}${vocals[4]}`];

function updateTargetSyllable() {
    currentTarget = syllables[Math.floor(Math.random() * syllables.length)];
    targetSyllable.textContent = `Dispara a: ${currentTarget}`;
}


document.getElementById("letra").addEventListener("change", function () {
    var seleccion = this.value;
    console.log("Se ha seleccionado la opción: " + seleccion);

    if (seleccion == 1) {
        syllables = [`${m}${vocals[0]}`, `${m}${vocals[1]}`, `${m}${vocals[2]}`, `${m}${vocals[3]}`, `${m}${vocals[4]}`];
    } else if (seleccion == 2) {
        syllables = [`${s}${vocals[0]}`, `${s}${vocals[1]}`, `${s}${vocals[2]}`, `${s}${vocals[3]}`, `${s}${vocals[4]}`];
    } else if (seleccion == 3) {
        syllables = [`${p}${vocals[0]}`, `${p}${vocals[1]}`, `${p}${vocals[2]}`, `${p}${vocals[3]}`, `${p}${vocals[4]}`];
    } else if (seleccion == 4) {
        syllables = [`${l}${vocals[0]}`, `${l}${vocals[1]}`, `${l}${vocals[2]}`, `${l}${vocals[3]}`, `${l}${vocals[4]}`];
    }
    else if (seleccion == 5) {
        syllables = [`${t}${vocals[0]}`, `${t}${vocals[1]}`, `${t}${vocals[2]}`, `${t}${vocals[3]}`, `${t}${vocals[4]}`];
    }
    else if (seleccion == 6) {
        syllables = [`${d}${vocals[0]}`, `${d}${vocals[1]}`, `${d}${vocals[2]}`, `${d}${vocals[3]}`, `${d}${vocals[4]}`];
    }

    updateTargetSyllable();
});




/* Funciones para crear el pez y las animaciones */

function createFish() {
    const fish = document.createElement('div');
    fish.className = 'fish';
    const startX = Math.random() * 65;
    fish.style.left = `${startX}%`;
    fish.style.bottom = '-80px';

    const fishBody = document.createElement('div');
    fishBody.className = 'fish-body';
    fishBody.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;

    const fishEye = document.createElement('div');
    fishEye.className = 'fish-eye';

    const fishPupil = document.createElement('div');
    fishPupil.className = 'fish-pupil';

    const fishTail = document.createElement('div');
    fishTail.className = 'fish-tail';
    fishTail.style.borderRightColor = fishBody.style.backgroundColor;

    const fishFin = document.createElement('div');
    fishFin.className = 'fish-fin';
    fishFin.style.backgroundColor = fishBody.style.backgroundColor;

    const fishText = document.createElement('div');
    fishText.className = 'fish-text';
    fishText.textContent = syllables[Math.floor(Math.random() * syllables.length)];

    fishEye.appendChild(fishPupil);
    fishBody.appendChild(fishEye);
    fishBody.appendChild(fishFin);
    fish.appendChild(fishBody);
    fish.appendChild(fishTail);
    fish.appendChild(fishText);

    fish.addEventListener('click', () => {
        if (fishText.textContent === currentTarget) {
            successSound.play();
            score++;
            scoreElement.textContent = `Puntuación: ${score}`;
            createBubbles(fish.offsetLeft, fish.offsetTop);
            updateTargetSyllable();
        } else {
            errorSound.play();
            misses++;
            missesElement.textContent = `Fallas: ${misses}`;
        }
        fish.remove();
    });

    gameContainer.appendChild(fish);

    // const jumpHeight = Math.random() * 30 + 40;
    const jumpHeight = 80;
    const jumpDuration = 8;

    fish.animate([
        { transform: `translate(-100%, 0)` },
        { transform: `translate(0, -${jumpHeight * 0.8}vh)` }, // Ajuste para mover hacia arriba mientras sube
        { transform: `translate(100%, -${jumpHeight}vh)` }, // Punto intermedio para hacer semicircular
        { transform: `translate(200%, -${jumpHeight * 0.8}vh)` }, // Ajuste para un movimiento más suave
        { transform: `translate(400%, 0)` }
    ], {
        duration: jumpDuration * 1000, // Ajustar la duración para que la animación dure más
        easing: 'ease-in-out',

    });

    setTimeout(() => {
        createRipple(fish.offsetLeft, sea.offsetTop);
        fish.remove();
    }, jumpDuration * 3000);


}



// Peces hacia lado izquierdo


function createFishLeft() {
    const fish = document.createElement('div');
    fish.className = 'fish';
    const startX = Math.random() * 65;
    fish.style.left = `${startX}%`;
    fish.style.bottom = '-80px';

    const fishBody = document.createElement('div');
    fishBody.className = 'fish-body';
    fishBody.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;

    const fishEye = document.createElement('div');
    fishEye.className = 'fish-eye-left';

    const fishPupil = document.createElement('div');
    fishPupil.className = 'fish-pupil-left';

    const fishTail = document.createElement('div');
    fishTail.className = 'fish-tail-left';
    fishTail.style.borderRightColor = fishBody.style.backgroundColor;

    const fishFin = document.createElement('div');
    fishFin.className = 'fish-fin';
    fishFin.style.backgroundColor = fishBody.style.backgroundColor;

    const fishText = document.createElement('div');
    fishText.className = 'fish-text';
    fishText.textContent = syllables[Math.floor(Math.random() * syllables.length)];

    fishEye.appendChild(fishPupil);
    fishBody.appendChild(fishEye);
    fishBody.appendChild(fishFin);
    fish.appendChild(fishBody);
    fish.appendChild(fishTail);
    fish.appendChild(fishText);

    fish.addEventListener('click', () => {
        if (fishText.textContent === currentTarget) {
            successSound.play();
            score++;
            scoreElement.textContent = `Puntuación: ${score}`;
            createBubbles(fish.offsetLeft, fish.offsetTop);
            updateTargetSyllable();
        } else {
            errorSound.play();
            misses++;
            missesElement.textContent = `Fallas: ${misses}`;
        }
        fish.remove();
    });

    gameContainer.appendChild(fish);

    // const jumpHeight = Math.random() * 30 + 40;
    const jumpHeight = 70;
    const jumpDuration = 10;

/*     fish.animate([
        { transform: `translate(-100%, 0)` },
        { transform: `translate(0, -${jumpHeight * 0.8}vh)` }, // Ajuste para mover hacia arriba mientras sube
        { transform: `translate(-100%, -${jumpHeight}vh)` }, // Punto intermedio para hacer semicircular
        { transform: `translate(-200%, -${jumpHeight * 0.8}vh)` }, // Ajuste para un movimiento más suave
        { transform: `translate(-400%, 0)` }
    ], {
        duration: jumpDuration * 1000, // Ajustar la duración para que la animación dure más
        easing: 'ease-in-out',

    }); */

    fish.animate([
        { transform: `translate(250%, 0)` },
        { transform: `translate(0, -${jumpHeight * 0.8}vh)` }, // Ajuste para mover hacia arriba mientras sube
        { transform: `translate(-30%, -${jumpHeight}vh)` }, // Punto intermedio para hacer semicircular
        { transform: `translate(-30%, -${jumpHeight * 0.8}vh)` }, // Ajuste para un movimiento más suave
        { transform: `translate(-30%, 0)` }
    ], {
        duration: jumpDuration * 1000, // Ajustar la duración para que la animación dure más
        easing: 'ease-in-out',

    });




    setTimeout(() => {
        createRipple(fish.offsetLeft, sea.offsetTop);
        fish.remove();
    }, jumpDuration * 3000);


}


























function createBubbles(x, y) {
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${x + Math.random() * 50}px`;
        bubble.style.top = `${y + Math.random() * 50}px`;
        bubble.style.width = `${Math.random() * 20 + 5}px`;
        bubble.style.height = bubble.style.width;
        gameContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 4000);
    }
}

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'water-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    gameContainer.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1500);
}

function shootBubble(event) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${event.clientX}px`;
    bubble.style.bottom = '40%';
    bubble.style.width = '40px';
    bubble.style.height = '40px';
    gameContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 4000);
}

function createSeagull() {
    const seagull = document.createElement('div');
    seagull.className = 'seagull';
    seagull.innerHTML = '<img src="img/gaviota.svg" alt="Seagull">';
    seagull.style.top = `${Math.random() * 30}%`;
    gameContainer.appendChild(seagull);
    setTimeout(() => seagull.remove(), 20000);
}

function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.textContent = '☁️';
    cloud.style.top = `${Math.random() * 30}%`;
    gameContainer.appendChild(cloud);
    setTimeout(() => cloud.remove(), 30000);
}

gameContainer.addEventListener('click', shootBubble);

updateTargetSyllable();
 setInterval(createFish, 2200);  // Reduce el intervalo de tiempo del pez 1.5   
 setInterval(createFishLeft, 3000);  // Reduce el intervalo de tiempo del pez 1.5 
setInterval(createSeagull, 10000);
setInterval(createCloud, 15000);

