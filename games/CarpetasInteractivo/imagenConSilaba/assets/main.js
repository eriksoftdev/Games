/*codigo que muestra una imagen en secuencia en la pagina6 */

function showNextImagenToSilaba() {
  var imagenToSilabaRandom = [
    "images/map.png",
    "images/table.png",
    "images/honey.png",
    "images/mountain.png",
    "images/doll.png",
  ];

  var shuffleArray = function (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar
    while (currentIndex !== 0) {
      // Seleccionar un elemento sin mezclar
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  var iframe = document.getElementById("objetoToSilaba");
  if (iframe) {
    // Mezclar el array de imágenes
    var shuffledImagenToSilabaRandom = shuffleArray(imagenToSilabaRandom);
    var imageUrl = shuffledImagenToSilabaRandom[0];

    iframe.src = imageUrl;

    var maElements = document.getElementsByClassName("ma");
    var meElements = document.getElementsByClassName("me");
    var miElements = document.getElementsByClassName("mi");
    var moElements = document.getElementsByClassName("mo");
    var muElements = document.getElementsByClassName("mu");

    var addClickEvent = function (element, imageUrl, correctClassName) {
      element.addEventListener("click", function () {
        if (imageUrl.includes(correctClassName)) {
          var sonido = new Audio("audio/good.ogg");
          sonido.play();

          setTimeout(function () {
            location.reload();
          }, 1000);
        } else {
          var sonido = new Audio("audio/incorrect.ogg");
          sonido.play();
        }
      });
    };

    for (var i = 0; i < maElements.length; i++) {
      addClickEvent(maElements[i], imageUrl, "map");
    }

    for (var i = 0; i < meElements.length; i++) {
      addClickEvent(meElements[i], imageUrl, "table");
    }

    for (var i = 0; i < miElements.length; i++) {
      addClickEvent(miElements[i], imageUrl, "honey");
    }

    for (var i = 0; i < moElements.length; i++) {
      addClickEvent(moElements[i], imageUrl, "mountain");
    }

    for (var i = 0; i < muElements.length; i++) {
      addClickEvent(muElements[i], imageUrl, "doll");
    }
  }
}

/*funcion que ordena aleatoriamente las imagenes de la silaba*/

function shuffleDivs() {
  const contenedor = document.querySelector(".imagenSilabaRandom");
  const divs = Array.from(contenedor.children);

  for (let i = divs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [divs[i], divs[j]] = [divs[j], divs[i]];
  }

  divs.forEach(div => contenedor.appendChild(div));
}

document.addEventListener("DOMContentLoaded", function () {
  showNextImagenToSilaba();
  shuffleDivs();
});
