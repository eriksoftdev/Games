/*Js page2 correspondiente al sonido*/
function playclick() {
  var imagen = document.getElementById("m-image");
  var sonido = new Audio("audio/m.ogg");

  imagen.addEventListener("click", function () {
    if (sonido.paused) {
      sonido.currentTime = 0;
      sonido.play();
    }
  });
}
