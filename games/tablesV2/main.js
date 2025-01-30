// funcion que utiliza el algoritmo de Fisher-Yates para barajar un array

function barajar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//   Baraja las bolitas de helado para que aparezcan en forma aleatoria.

function barajarBolaIce(parentElement) {
  const children = Array.from(parentElement.children);
  const shuffledChildren = barajar(children);

  parentElement.innerHTML = '';
  shuffledChildren.forEach(child => parentElement.appendChild(child));
}

const bolaIce = document.querySelector('.bola-ice');
barajarBolaIce(bolaIce);


// Asignar los elementos barajados a los divs con clase texto

function asignarElementosBarajados(arr, elementos) {
  const shuffledArray = barajar(arr);
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = shuffledArray[i];
  }
}


// Asigna cada uno de los elementos a los divs texto
const result2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const result3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
const result4 = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
const result5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const result6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const result7 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const result8 = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
const result9 = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];


const textoElements = bolaIce.querySelectorAll('.texto');

asignarElementosBarajados(result2, textoElements);


/* Funcion que obtiene el valor de la bola y la convierte en un numero entero */

function obtenerValorBola(selector) {
  const bola = document.querySelector(selector);
  const texto = bola.querySelector('.texto').textContent;
  const valorInt = Number(texto);
  return valorInt;
}

const valorBola1 = obtenerValorBola('.bola1');
const valorBola2 = obtenerValorBola('.bola2');
const valorBola3 = obtenerValorBola('.bola3');
const valorBola4 = obtenerValorBola('.bola4');
const valorBola5 = obtenerValorBola('.bola5');
const valorBola6 = obtenerValorBola('.bola6');
const valorBola7 = obtenerValorBola('.bola7');
const valorBola8 = obtenerValorBola('.bola8');
const valorBola9 = obtenerValorBola('.bola9');
const valorBola10 = obtenerValorBola('.bola10');



//Muestra el ratio de tablas de acuerdo  a la tabla que se elija en el select

function barajarYMostrarElemento(multiplicando, array) {
  const flushArray = barajar(array);
  const element = flushArray[0];
  document.querySelector('.tabla').textContent = multiplicando + "x" + element;

}

//Contiene los valores multiplicador para el multiplicando 
const multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
barajarYMostrarElemento(2, multiplicador);


//Funcion que encuentra el valor de la bola que coincide con el resultado de la expresion de multiplicacion 

function encontrarBolaQueCoincideConResultado() {
  const tabla = document.querySelector('.tabla');
  const contenido = tabla.innerText;

  const expresion = contenido.replace('x', '*');
  const resultado = eval(expresion);

  for (let i = 1; i <= 10; i++) {
    const selector = `.bola${i}`;
    const valor = obtenerValorBola(selector);
    if (valor === resultado) {
      return selector;
    }
  }

  return null; // no encontró un valor que coincida con el resultado
}

const bolaQueCoincide = encontrarBolaQueCoincideConResultado();
console.log(bolaQueCoincide);


//variables con videos de las tablas de multiplicar

window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

video2 = 'https://www.youtube.com/embed/tbdqMzuKA9I?si=d-JEL7Drxe7gXJ-m';
video3 = 'https://www.youtube.com/embed/Zpwo3lI3QDA?si=V2r9hz3YpE32A9fZ';
video4 = 'https://www.youtube.com/embed/deDpy8-bXMg?si=SEPUha-M7suyeiS8';
video5 = 'https://www.youtube.com/embed/F1jxIX1vZiY?si=bS52rmX5hCh01i0W';
video6 = 'https://www.youtube.com/embed/u5JXGELHT1Y?si=jKHbAvYnJOzlPayi';


/* Se carga  multiplicacion y resultados segun el select */

var selectedAction = 1;

const acciones = {
  1: () => {
    asignarElementosBarajados(result2, textoElements);
    barajarYMostrarElemento(2, multiplicador);
    document.getElementById('VisaChipCardVideo').src = video2;

  },
  2: () => {
    asignarElementosBarajados(result3, textoElements);
    barajarYMostrarElemento(3, multiplicador);
    document.getElementById('VisaChipCardVideo').src = video3;


  },
  3: () => {
    asignarElementosBarajados(result4, textoElements);
    barajarYMostrarElemento(4, multiplicador);
    document.getElementById('VisaChipCardVideo').src = video4;



  },
  4: () => {
    asignarElementosBarajados(result5, textoElements);
    barajarYMostrarElemento(5, multiplicador);
    document.getElementById('VisaChipCardVideo').src = video5;

  },
  5: () => {
    asignarElementosBarajados(result6, textoElements);
    barajarYMostrarElemento(6, multiplicador);
    document.getElementById('VisaChipCardVideo').src = video6;

  },
  6: () => {
    asignarElementosBarajados(result7, textoElements);
    barajarYMostrarElemento(7, multiplicador);

  },
  7: () => {
    asignarElementosBarajados(result8, textoElements);
    barajarYMostrarElemento(8, multiplicador);

  },
  8: () => {
    asignarElementosBarajados(result9, textoElements);
    barajarYMostrarElemento(9, multiplicador);

  },
};

document.getElementById("select-tabla").addEventListener("change", () => {
  const valorSeleccionado = parseInt(document.getElementById("select-tabla").value);
  acciones[valorSeleccionado]();
  // Guardar el valor seleccionado en localStorage
  localStorage.setItem('selectedAction', valorSeleccionado);
  selectedAction = valorSeleccionado; // Actualizar selectedAction con el nuevo valor

});



// Recuperar el valor de la acción seleccionada al recargar la página
document.addEventListener('DOMContentLoaded', () => {
  const selectedActionValue = localStorage.getItem('selectedAction');
  if (selectedActionValue) {
    selectedAction = parseInt(selectedActionValue); // Asignar el valor del localStorage a selectedAction
    const selectedActionFunction = acciones[selectedAction];
    if (selectedActionFunction) {
      selectedActionFunction();
    }
  }
});


/* //Funcion para seleccionar el nivel de dificultad

const dropIcecream = document.querySelector('.drop-icecream');
const beepSound = new Audio('audio/beep.ogg');
let selectedOption = '1';
let intervalId = null;
let observer = null;

const selectElement = document.getElementById('select-nivel');

selectElement.addEventListener('change', function() {
  selectedOption = this.value;
  
  if (selectedOption === '2' || selectedOption === '3') {
    initDropIcecreamObserver();
  } else {
    if (observer) {
      observer.disconnect();
      clearInterval(intervalId);
    }
  }
}); */

const dropIcecream = document.querySelector('.drop-icecream');
const beepSound = new Audio('audio/beep.ogg');
let selectedOption = localStorage.getItem('selectedOption') || '1';
let intervalId = null;
let observer = null;

let selectElement = null;

selectElement = document.getElementById('select-nivel');

selectElement.addEventListener('change', function () {
  selectedOption = this.value;

  localStorage.setItem('selectedOption', selectedOption); // Guardar el nuevo valor seleccionado en localStorage

  if (selectedOption === '2' || selectedOption === '3') {
    initDropIcecreamObserver();
  } else {
    if (observer) {
      observer.disconnect();
      clearInterval(intervalId);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  selectElement.value = selectedOption; // Asignar el valor seleccionado en localStorage al select

  if (selectedOption === '2' || selectedOption === '3') {
    initDropIcecreamObserver();
  }
});








function initDropIcecreamObserver() {
  const dropIcecream = document.querySelector('.drop-icecream');

  if (observer) {
    observer.disconnect();
    clearInterval(intervalId);
  }

  observer = new MutationObserver(() => {
    if (dropIcecream.childElementCount === 0) {
      console.log('No hay elementos');
      tiempoNivel();
    } else {
      clearInterval(intervalId);
    }
  });

  observer.observe(dropIcecream, { childList: true });

  function tiempoNivel() {
    intervalId = setInterval(() => {
      acciones[selectedAction]();
      beepSound.play();
    }, selectedOption === '3' ? 5000 : 8000); // Duración de 4 segundos para '3', de lo contrario 6 segundos
  }

  tiempoNivel();
}




console.log(selectedOption);



//Haciendo los elementos arrastrables


/*  const dropIcecream = document.querySelector('.drop-icecream');  */

// Iterar sobre los elementos bola1 a bola10

/* 
for (let i = 1; i <= 10; i++) {
  const bola = document.querySelector(`.bola${i}`);

  // Agregar el evento dragstart a cada elemento bola
  bola.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', bola.outerHTML);
  });
}

dropIcecream.addEventListener('dragover', (e) => {
  e.preventDefault();
});


// Se declaran las variables para los sonidos
const successSound = new Audio('audio/success.ogg');
const errorSound = new Audio('audio/error.ogg');


//Variables para Aciertos y erores

let aciertos = 0;
let errores = 0;


dropIcecream.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const html = document.createElement('div');
  html.innerHTML = data;

  // Obtener la clase del elemento que coincide con el resultado
  const claseResultado = encontrarBolaQueCoincideConResultado();


  // Verificar si el elemento arrastrado tiene la clase correcta



  if (html.querySelector(`${claseResultado}`)) {
    dropIcecream.appendChild(html);
    successSound.play();
    aciertos++;
    document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
    document.querySelector('.container').classList.add('show-background');

    setTimeout(() => {
      acciones[selectedAction]();
      // Eliminar todos los elementos hijos de drop-icecream
      while (dropIcecream.firstChild) {
        dropIcecream.removeChild(dropIcecream.firstChild);
        // Eliminar la clase show-background de container
        document.querySelector('.container').classList.remove('show-background');
      }
    }, 2000);

  }  else {
    errorSound.play();
    errores++;
    document.querySelector('.errors p').textContent = `Errores: ${errores}`;
  }

}); */





// Seleccionar los elementos con clase bola

/*   for (let i = 1; i <= 10; i++) {
  const bola = document.querySelector(`.bola${i}`);

  // Agregar el evento dragstart a cada elemento bola
  bola.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', bola.outerHTML);
  });
}

// Agregar evento dragover para permitir el arrastre en escritorio
document.addEventListener('dragover', (e) => {
  e.preventDefault(); // Comenta o elimina esta línea
});
if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPad Simulator|iPod|BlackBerry|Windows Phone/i)) {
  document.addEventListener('touchstart', (e) => {
    // e.preventDefault(); // Comenta o elimina esta línea
  });
  
  document.addEventListener('touchend', (e) => {
    // e.preventDefault(); // Comenta o elimina esta línea
  });
}

// Se declaran las variables para los sonidos
const successSound = new Audio('audio/success.ogg');
const errorSound = new Audio('audio/error.ogg');

// Variables para Aciertos y errores
let aciertos = 0;
let errores = 0;

// Evento drop en el elemento dropIcecream
dropIcecream.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const data = e.dataTransfer.getData('text');
  const html = document.createElement('div');
  html.innerHTML = data;

  // Obtener la clase del elemento que coincide con el resultado
  const claseResultado = encontrarBolaQueCoincideConResultado();

  // Verificar si el elemento arrastrado tiene la clase correcta
  if (html.querySelector(`${claseResultado}`)) {
    dropIcecream.appendChild(html);
    successSound.play();
    aciertos++;
    document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
    document.querySelector('.container').classList.add('show-background');

    setTimeout(() => {
      acciones[selectedAction]();
      // Eliminar todos los elementos hijos de drop-icecream
      while (dropIcecream.firstChild) {
        dropIcecream.removeChild(dropIcecream.firstChild);
        // Eliminar la clase show-background de container
        document.querySelector('.container').classList.remove('show-background');
      }
    }, 2000);

  } else {
    errorSound.play();
    errores++;
    document.querySelector('.errors p').textContent = `Errores: ${errores}`;
  }
}); 
 */










/* Usando interactjs */



/*   // Se declaran las variables para los sonidos
const successSound = new Audio('audio/success.ogg');
const errorSound = new Audio('audio/error.ogg');

//Variables para Aciertos y errores
let aciertos = 0;
let errores = 0;

// Objeto para almacenar las posiciones originales de los elementos arrastrables
const originalPositions = {};

// Reemplazar el código para hacer los elementos arrastrables con interact.js
for (let i = 1; i <= 10; i++) {
  const element = document.querySelector('.bola' + i);

  interact(element)
    .draggable({
      listeners: {
        start(event) {
          const target = event.target;
          originalPositions[target] = { x: 0, y: 0 };
          target.setAttribute('data-x', 0);
          target.setAttribute('data-y', 0);
        },
        move(event) {
          const target = event.target;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }
      }
    });
}

// Reemplazar el evento drop en dropIcecream con interact.js
interact(dropIcecream)
  .dropzone({
    ondrop: function (event) {
      const data = event.relatedTarget.outerHTML;
      const html = document.createElement('div');
      html.innerHTML = data;

      // Obtener la clase del elemento que coincide con el resultado
      const claseResultado = encontrarBolaQueCoincideConResultado();

      if (html.querySelector(claseResultado)) {
        successSound.play();
        aciertos++;
        document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
        document.querySelector('.container').classList.add('show-background');

        // Mover el elemento al contenedor dropIcecream
        dropIcecream.appendChild(event.relatedTarget);
        event.relatedTarget.removeAttribute('data-x');
        event.relatedTarget.removeAttribute('data-y');
        event.relatedTarget.style.transform = 'translate(0px, 0px)';

        // Devolver el elemento a su posición original después de 2 segundos
        setTimeout(() => {
          acciones[selectedAction]();
          // Eliminar todos los elementos hijos de drop-icecream
          while (dropIcecream.firstChild) {
            dropIcecream.removeChild(dropIcecream.firstChild);
            // Eliminar la clase show-background de container
            document.querySelector('.container').classList.remove('show-background');
          }
        }, 2000);
      } else {
        errorSound.play();
        errores++;
        document.querySelector('.errors p').textContent = `Errores: ${errores}`;


        const originalPosition = originalPositions[event.relatedTarget];
        event.relatedTarget.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
        event.relatedTarget.setAttribute('data-x', originalPosition.x);
        event.relatedTarget.setAttribute('data-y', originalPosition.y);
      }
    }
  }); */



























// const successSound = new Audio('audio/success.ogg');
// const errorSound = new Audio('audio/error.ogg');

// //Variables para Aciertos y errores
// let aciertos = 0;
// let errores = 0;

// // Al cargar la página
// window.addEventListener('load', () => {
//   // Recuperar valores de localStorage
//   if (localStorage.getItem('aciertos')) {
//     aciertos = parseInt(localStorage.getItem('aciertos'));
//   } else {
//     aciertos = 0;
//   }
//   if (localStorage.getItem('errores')) {
//     errores = parseInt(localStorage.getItem('errores'));
//   } else {
//     errores = 0;
//   }

//   // Actualizar texto de la etiqueta <p> con los valores de localStorage
//   document.querySelector('.errors p').textContent = `Errores: ${errores}`;
//   document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
// });


// // Objeto para almacenar las posiciones originales de los elementos arrastrables
// const originalPositions = {};

// // Reemplazar el código para hacer los elementos arrastrables con interact.js
// for (let i = 1; i <= 10; i++) {
//   const element = document.querySelector('.bola' + i);

//   interact(element)
//     .draggable({
//       listeners: {
//         start(event) {
//           const target = event.target;
//           originalPositions[target] = { x: 0, y: 0 };
//           target.setAttribute('data-x', 0);
//           target.setAttribute('data-y', 0);
//         },
//         move(event) {
//           const target = event.target;
//           const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
//           const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//           target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
//           target.setAttribute('data-x', x);
//           target.setAttribute('data-y', y);
//         }
//       }
//     });
// }

// // Reemplazar el evento drop en dropIcecream con interact.js
// interact(dropIcecream)
//   .dropzone({
//     ondrop: function (event) {
//       const data = event.relatedTarget.outerHTML;
//       const html = document.createElement('div');
//       html.innerHTML = data;

//       // Obtener la clase del elemento que coincide con el resultado
//       const claseResultado = encontrarBolaQueCoincideConResultado();

//       if (html.querySelector(claseResultado)) {
//         successSound.play();
//         aciertos++;
//         document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
//         document.querySelector('.container').classList.add('show-background');

//         // Mover el elemento al contenedor dropIcecream
//         dropIcecream.appendChild(event.relatedTarget);
//         event.relatedTarget.removeAttribute('data-x');
//         event.relatedTarget.removeAttribute('data-y');
//         event.relatedTarget.style.transform = 'translate(0px, 0px)';


//         // Guardar valores en localStorage
//         localStorage.setItem('aciertos', aciertos);


//         // Devolver el elemento a su posición original después de 2 segundos
//         /*           setTimeout(() => {
//                     acciones[selectedAction]();
//                     // Eliminar todos los elementos hijos de drop-icecream
//                     while (dropIcecream.firstChild) {
//                       dropIcecream.removeChild(dropIcecream.firstChild);
//                       // Eliminar la clase show-background de container
//                       document.querySelector('.container').classList.remove('show-background');
//                     }
//                   }, 2000); */

//         // Reload the page after 2 seconds
//         setTimeout(() => {
//           location.reload(); // This reloads the page
//         }, 2000);
//       } else {
//         errorSound.play();
//         errores++;
//         document.querySelector('.errors p').textContent = `Errores: ${errores}`;


//         const originalPosition = originalPositions[event.relatedTarget];
//         event.relatedTarget.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
//         event.relatedTarget.setAttribute('data-x', originalPosition.x);
//         event.relatedTarget.setAttribute('data-y', originalPosition.y);
//         localStorage.setItem('errores', errores);
//       }
//     }
//   });




const successSound = new Audio('audio/success.ogg');
const errorSound = new Audio('audio/error.ogg');

//Variables para Aciertos y errores
let aciertos = 0;
let errores = 0;

// Al cargar la página
window.addEventListener('load', () => {
  // Recuperar valores de localStorage
  if (localStorage.getItem('aciertos')) {
    aciertos = parseInt(localStorage.getItem('aciertos'));
  } else {
    aciertos = 0;
  }
  if (localStorage.getItem('errores')) {
    errores = parseInt(localStorage.getItem('errores'));
  } else {
    errores = 0;
  }

  // Actualizar texto de la etiqueta <p> con los valores de localStorage
  document.querySelector('.errors p').textContent = `Errores: ${errores}`;
  document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
});


// Objeto para almacenar las posiciones originales de los elementos arrastrables
const originalPositions = {};

// Reemplazar el código para hacer los elementos arrastrables con interact.js
for (let i = 1; i <= 10; i++) {
  const element = document.querySelector('.bola' + i);

  interact(element)
    .draggable({
      listeners: {
        start(event) {
          const target = event.target;
          originalPositions[target] = { x: 0, y: 0 };
          target.setAttribute('data-x', 0);
          target.setAttribute('data-y', 0);
        },
        move(event) {
          const target = event.target;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },
        end: function(event) {
          const originalPosition = originalPositions[event.target];
          event.target.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
          event.target.setAttribute('data-x', originalPosition.x);
          event.target.setAttribute('data-y', originalPosition.y);
        }
      }
    });
}

// Reemplazar el evento drop en dropIcecream con interact.js
interact(dropIcecream)
  .dropzone({
    ondrop: function (event) {
      const data = event.relatedTarget.outerHTML;
      const html = document.createElement('div');
      html.innerHTML = data;

      // Obtener la clase del elemento que coincide con el resultado
      const claseResultado = encontrarBolaQueCoincideConResultado();

      if (html.querySelector(claseResultado)) {
        successSound.play();
        aciertos++;
        document.querySelector('.aciertos p').textContent = `Aciertos: ${aciertos}`;
        document.querySelector('.container').classList.add('show-background');

        // Mover el elemento al contenedor dropIcecream
        dropIcecream.appendChild(event.relatedTarget);
        event.relatedTarget.removeAttribute('data-x');
        event.relatedTarget.removeAttribute('data-y');
        event.relatedTarget.style.transform = 'translate(0px, 0px)';


        // Guardar valores en localStorage
        localStorage.setItem('aciertos', aciertos);


        setTimeout(() => {
          location.reload(); // This reloads the page
        }, 2000);
      } else {
        errorSound.play();
        errores++;
        document.querySelector('.errors p').textContent = `Errores: ${errores}`;


        const originalPosition = originalPositions[event.relatedTarget];
        event.relatedTarget.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
        event.relatedTarget.setAttribute('data-x', originalPosition.x);
        event.relatedTarget.setAttribute('data-y', originalPosition.y);
        localStorage.setItem('errores', errores);
      }
    }
  });

//Reinicia la puntuacion

  function reiniciar(){
    localStorage.setItem('aciertos', 0);
    localStorage.setItem('errores', 0)
    location.reload();
  }

