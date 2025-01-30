//centra el texto de los svg
window.addEventListener("load", function() {
  const ids = ['svg_1', 'svg_2', 'svg_3', 'svg_4', 'svg_5', 'svg_6', 'svg_7', 'svg_8', 'svg_9', 'svg_10'];
  ids.forEach((id) => {
      const svg = document.getElementById(id);
      const texto = document.getElementById(`texto${id.split('_')[1]}`);
      
      const bbox = svg.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;
      
      texto.setAttribute('x', centerX);
      texto.setAttribute('y', centerY);
  });
  });
  

// Función para mezclar los elementos del contenedor

function shuffleElements(containerId) {
  var container = document.querySelector(containerId);
  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
}

// Llamar a la función para barajar los elementos del contenedor
shuffleElements('.content');



//colores aleatorios para los botones

  document.addEventListener("DOMContentLoaded", function() {
        
    // Función para mezclar el array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    // Array de colores
    const colors = ['orange', 'blue', 'red', 'green', 'purple'];
  
    // Mezclar el array
    const shuffledColors = shuffleArray(colors);
  
    // Asignar los colores mezclados a los botones
    const buttons = document.querySelectorAll('.color-button');
    buttons.forEach((button, index) => {
      const color = shuffledColors[index];
      button.style.backgroundColor = color;
      button.setAttribute('data-color', color);
    });

    
    // Declarar variables globales para almacenar el color seleccionado y el id del elemento seleccionado
    let selectedColor = '';
    let selectedElementId = '';
  
    // Función para cambiar el color seleccionado
    function changeColor(color) {
      selectedColor = color;
    }
  
    document.querySelectorAll('.coloreable').forEach(function (element) {
      element.addEventListener('click', function () {
        if (selectedColor) {
          this.style.fill = selectedColor;
          // Reproducir el sonido aquí
          var audio = new Audio('audio/bubble.ogg');
          audio.play();
        }
      });
    });
  
    // Asignar la función changeOrder a los botones
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        changeColor(button.getAttribute('data-color'));
      });
    });


function storeButtonColor(buttonId) {
  const button = document.getElementById(buttonId);
  return button.getAttribute('data-color');
}


const colorNames = {
  'rgb(255, 0, 0)': 'red',
  'rgb(0, 0, 255)': 'blue',
  'rgb(0, 128, 0)': 'green',
  'rgb(255, 165, 0)': 'orange',
  'rgb(128, 0, 128)': 'purple',
};

// Función para convertir el código RGB a nombre de color
function rgbToColorName(rgb) {
  return colorNames[rgb] || 'desconocido';
}

function checkButton(buttonId) {
  storeButtonColor(buttonId);

  document.getElementById('check').addEventListener('click', function() {
    var paths = ['svg_1', 'svg_2', 'svg_3', 'svg_4', 'svg_5'];
    var first5Paths = paths.slice(0, 5);
    var allPathsHaveColor = true;
    var colorsSet = new Set();
    first5Paths.forEach(function(id) {
      var path = document.getElementById(id);
      var computedColor = window.getComputedStyle(path).getPropertyValue('fill');
      colorsSet.add(computedColor);
      if (computedColor === 'rgb(255, 255, 255)' || computedColor === '#ffffff') {
        allPathsHaveColor = false;
      }
    });

    if (allPathsHaveColor) {
      var paths6to10 = ['svg_6', 'svg_7', 'svg_8', 'svg_9', 'svg_10'];
      var pathsHaveColor = true;
      paths6to10.forEach(function(id) {
        var path = document.getElementById(id);
        var computedColor = window.getComputedStyle(path).getPropertyValue('fill');
        if (computedColor !== 'rgb(255, 255, 255)' && computedColor !== '#ffffff') {
          pathsHaveColor = false;
        }
      });

      if (pathsHaveColor) {
        if (colorsSet.size === 1) {
          const colorOfPaths = rgbToColorName(colorsSet.values().next().value); 
          const buttonColor = document.getElementById(buttonId).getAttribute('data-color');
          if (buttonColor === colorOfPaths) {
            var audio = new Audio('audio/win.ogg');
            audio.onended = function() {
              if (confirm('Correcto')) {
                window.location.reload();
              }
            };
            audio.play();
          } else {
              alert('Inténtalo de nuevo.');
          }
        } else {
          alert('Incorrecto. Los peces tienen colores diferentes.');
        }
      } else {
        var audio = new Audio('audio/error.ogg');
        audio.onended = function() {
          if (confirm('Inténtalo de nuevo')) {
            window.location.reload();
          }
        };
        audio.play();
      }
    } else {
      var audio = new Audio('audio/error.ogg');
      audio.onended = function() {
        if (confirm('Inténtalo de nuevo')) {
          window.location.reload();
        }
      };
      audio.play();
    }
  });
}


if (document.getElementById('ma')) {
  checkButton('ma');
}

if (document.getElementById('me')) {
  checkButton('me');
}

if (document.getElementById('mi')) {
  checkButton('mi');
}

if (document.getElementById('mo')) {
  checkButton('mo');
}

if (document.getElementById('mu')) {
  checkButton('mu');
}

});


//reproduce un sonido cuando se pulsa el boton de la silaba

const buttonSound = document.querySelectorAll('.color-button');
buttonSound.forEach(button => {
  button.addEventListener('click', () => {
    const audio = new Audio('audio/select.ogg');
    audio.play();
  });
});

// cuando escucha el evento click se cambia el cursor
document.addEventListener('mousedown', function() {
  document.body.style.cursor = 'url(images/closedhand.png) 48 48, auto'; // Cambia el cursor a tu imagen personalizada cuando se mantiene presionado el clic
});

document.addEventListener('mouseup', function() {
  document.body.style.cursor = 'url(images/hand.png) 48 48, auto'; // Restablece el cursor a su valor predeterminado cuando se suelta el clic
});


document.querySelector('footer').addEventListener('mousedown', function() {
  document.querySelector('footer').style.cursor = 'url(images/manoCerrada.png) 36 36, auto'; // Cambia el cursor a la imagen de mano cerrada al mantener presionado el clic en el footer
});

document.querySelector('footer').addEventListener('mouseup', function() {
  document.querySelector('footer').style.cursor = 'url(images/manoAbierta.png) 36 36, auto'; // Restablece el cursor a la imagen de mano abierta al soltar el clic en el footer
});