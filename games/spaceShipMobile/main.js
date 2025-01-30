// Deshabilitar la caché para la página actual
if (window.performance) {
  if (performance.setResourceTimingBufferSize) {
      performance.setResourceTimingBufferSize(0);
  }
}

const laser = document.querySelector('.laser');
let currentPosition = 50; // Posición inicial centrada
let isKeyDown = false; // Variable para verificar si una tecla está presionada

function positionLaser() {
  const laserWidth = laser.clientWidth;
  const windowWidth = window.innerWidth;

  const initialPosition = (windowWidth / 2) - (laserWidth / 2);
  currentPosition = initialPosition;
  laser.style.left = `${initialPosition}px`;
}

positionLaser(); // Posicionar el láser al cargar la página

function moveLaser(direction, speed) {
  const laserWidth = laser.clientWidth;
  const windowWidth = window.innerWidth;

  if (direction === 'ArrowLeft') {
    currentPosition = Math.max(0, currentPosition - speed);
    laser.style.left = `${currentPosition}px`;
  } else if (direction === 'ArrowRight') {
    currentPosition = Math.min(windowWidth - laserWidth, currentPosition + speed);
    laser.style.left = `${currentPosition}px`;
  }

  if (isKeyDown) {
    requestAnimationFrame(() => {
      moveLaser(direction, speed);
    });
  }
}

window.addEventListener('resize', positionLaser); // Volver a posicionar el láser al cambiar el tamaño de la ventana

const leftButton = document.querySelector('.left');

const rightButton = document.querySelector('.right');

leftButton.addEventListener('click', () => {
  moveLaser('ArrowLeft', 30);
});



rightButton.addEventListener('click', () => {
  moveLaser('ArrowRight', 30);
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'ArrowLeft' || key === 'ArrowRight') {
    isKeyDown = true;
    moveLaser(key, 30);
  }
});

document.addEventListener('keyup', () => {
  isKeyDown = false;
});






//#region genera la silaba a disparar y asigna las silabas para los divs ademas dever en que div esta la silaba a disparar


let silabaADisparar; // Variable global para almacenar la sílaba a disparar

function generarSilabaAleatoria(silabas) {
  return silabas[Math.floor(Math.random() * silabas.length)];
}


function mostrarMensajeDisparo(silaba) {
  const divSilabaADisparar = document.querySelector('.silabaADisparar');

  if (divSilabaADisparar) {
    divSilabaADisparar.textContent = `${silaba}`;
  } 
}




// Genera las sílabas para los divs
function asignarSilabasAleatorias(silabasOriginales) {
  const divs = document.querySelectorAll('.container div');
  
  // Asignar las sílabas originales a los primeros cinco divs sin repetir
  const silabasAleatorias = silabasOriginales.slice().sort(() => Math.random() - 0.5);
  divs.forEach((div, index) => {
    div.textContent = silabasAleatorias[index];
  });

  // Asignar una sílaba extra aleatoria al sexto div
  divs[5].textContent = silabasOriginales[Math.floor(Math.random() * silabasOriginales.length)];
}

// Lógica principal
const silabasOriginales = ['ma', 'me', 'mi', 'mo', 'mu'];
silabaADisparar = generarSilabaAleatoria(silabasOriginales);
mostrarMensajeDisparo(silabaADisparar);
asignarSilabasAleatorias(silabasOriginales); 


const select = document.querySelector('select');

const opciones = {
  '1': ['ma', 'me', 'mi', 'mo', 'mu'],
  '2': ['sa', 'se', 'si', 'so', 'su'],
  '3': ['la', 'le', 'li', 'lo', 'lu'],
  '4': ['pa', 'pe', 'pi', 'po', 'pu'],
  '5': ['ta', 'te', 'ti', 'to', 'tu'],
  '6': ['na', 'ne', 'ni', 'no', 'nu'],
  '7': ['da', 'de', 'di', 'do', 'du'],
  '8': ['ba', 'be', 'bi', 'bo', 'bu'],
  '9': ['va', 've', 'vi', 'vo', 'vu'],
  '10': ['fa', 'fe', 'fi', 'fo', 'fu'],
  '11': ['ja', 'je', 'ji', 'jo', 'ju'],
  '12': ['ga', 'go', 'gu', 'ga', 'go'],
  '13': ['ge', 'gi', 'gi', 'ge', 'ge'],
  '14': ['gue', 'gue', 'gui', 'gue', 'gui'],
  '15': ['ra', 're', 'ri', 'ro', 'ru'],
  '16': ['cha', 'che', 'chi', 'cho', 'chu'],
  '17': ['ña', 'ñe', 'ñi', 'ño', 'ñu'],
  '18': ['que', 'qui', 'qui', 'que', 'que'],
  '19': ['za', 'ze', 'zi', 'zo', 'zu'],
  '20': ['ca', 'co', 'cu', 'ca', 'co'],
  '21': ['ce', 'ci', 'ci', 'ce', 'ci']

};

select.addEventListener('change', function() {
  const opcionSeleccionada = select.value;
  const silabasOriginales = opciones[opcionSeleccionada];

  if (silabasOriginales) {
    silabaADisparar = generarSilabaAleatoria(silabasOriginales);
    mostrarMensajeDisparo(silabaADisparar);
    asignarSilabasAleatorias(silabasOriginales);
  }
});




//#region Verificación de colisión y silaba a disparar correcta





// Verificación de colisión y silaba a disparar correcta


document.addEventListener('DOMContentLoaded', function() {
  const laserLight = document.querySelector('.laser-light');
  const mElements = document.querySelectorAll('.m1, .m2, .m3, .m4, .m5, .m6');

  let contadorAciertos = 0;




  function checkCollision(element) {
    const elementRect = element.getBoundingClientRect();
    const laserLightRect = laserLight.getBoundingClientRect();
  
    if (
      elementRect.top < laserLightRect.bottom &&
      elementRect.right > laserLightRect.left &&
      elementRect.bottom > laserLightRect.top &&
      elementRect.left < laserLightRect.right
    ) {
      if (element.textContent === silabaADisparar && spaceKeyPressed) {
        console.log(`Colisión detectada con el div que contiene la sílaba a disparar: ${silabaADisparar}`);
        // Reproducir el sonido al detectar la colisión y la tecla de espacio pulsada
        new Audio('audio/explosion.ogg').play();
        
        // Hacer el div que contiene la sílaba a disparar invisible después de reproducir el sonido de la explosión
        element.style.visibility = 'hidden';
        contadorAciertos++;
        document.querySelector('.acierto').textContent = `Aciertos: ${contadorAciertos}`;


// Reasignar las sílabas a los divs después de que suene el sonido de explosión
setTimeout(() => {
  const opcionSeleccionada = select.value;
  const silabasOriginales = opciones[opcionSeleccionada];

  if (silabasOriginales) {
    silabaADisparar = generarSilabaAleatoria(silabasOriginales);
    mostrarMensajeDisparo(silabaADisparar);
    asignarSilabasAleatorias(silabasOriginales);
    element.style.visibility = 'visible'; // Hacer visible el div después de un segundo
  }
}, 1000);
}
}
  }





  setInterval(() => {
    if (spaceKeyPressed) {
      mElements.forEach(element => {
        checkCollision(element);
      });
    }
  }, 100); // Comprueba la colisión cada 100 milisegundos
});

// Disparo


let isLaserGreen = false; // Estado inicial del láser (verde: false, azul: true)
let spaceKeyPressed = false; // Variable para rastrear si se ha pulsado la tecla de espacio
let contadorDisparos = 0;

let laserSound = new Audio('audio/shot.ogg'); // Reemplaza 'audio/shot.ogg' con la ruta correcta de tu archivo de sonido

function updateLaserColor() {
  if (isLaserGreen) {
    laser.classList.remove('laser-blue');
    laser.classList.add('laser-green');
  } else {
    laser.classList.remove('laser-green');
    laser.classList.add('laser-blue');
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    spaceKeyPressed = true; // Marcar que se ha pulsado la tecla de espacio
    updateLaserColor();
    laserSound.currentTime = 0; // Reiniciar la reproducción del sonido
    laserSound.play(); // Reproducir el sonido
    contadorDisparos++;
    document.querySelector('.disparo').textContent = `Disparos: ${contadorDisparos}`;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === ' ') {
    spaceKeyPressed = false; // Marcar que se ha soltado la tecla de espacio
    updateLaserColor();
  }
});

const shootButton = document.querySelector('.shoot');

shootButton.addEventListener('click', () => {
  spaceKeyPressed = true; // Marcar que se ha pulsado la tecla de espacio
  updateLaserColor();
  laserSound.currentTime = 0; // Reiniciar la reproducción del sonido
  laserSound.play(); // Reproducir el sonido
  contadorDisparos++;
  document.querySelector('.disparo').textContent = `Disparos: ${contadorDisparos}`;
  setTimeout(() => {
    spaceKeyPressed = false; // Marcar que se ha soltado la tecla de espacio después de un breve período de tiempo
    updateLaserColor();
  }, 200);
});



//cambia el color del laser cuando se dispara

function updateLaserColor() {
  const laserLight = document.querySelector('.laser-light');
  if (laserLight) {
    if (spaceKeyPressed) {
      isLaserGreen = !isLaserGreen; // Cambiar el estado del láser
      if (isLaserGreen) {
        laserLight.style.backgroundColor = 'red';
        laserLight.style.boxShadow = '0 0 10px 5px rgba(255, 0, 0, 0.7)'; // Box-shadow rojo
      } else {
        laserLight.style.backgroundColor = 'blue';
        laserLight.style.boxShadow = '0 0 10px 5px rgba(0, 0, 255, 0.7)'; // Box-shadow azul
      }
    } else {
      laserLight.style.backgroundColor = 'rgb(183 255 0 / 80%)'; // Volver al color original (o puedes establecer el color que deseas como normal)
      laserLight.style.boxShadow = 'none'; // Quitar el box-shadow cuando no se esté pulsando la tecla de espacio
    }
  }
}






