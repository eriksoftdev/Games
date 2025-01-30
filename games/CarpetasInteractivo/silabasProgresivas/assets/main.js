/* codigo para mostrar una  lista de imagenes en secuencia cada 3 segundos */

function startImageRotation() {
  var sylables = [
    "syl/ma.jpeg",
    "syl/me.jpeg",
    "syl/mi.jpeg",
    "syl/mo.jpeg",
    "syl/mu.jpeg",
  ];

  let currentIndex = 0;

  function showNextImage() {
    const iframe = document.getElementById("randomImage");
    if (iframe) {
      const imageUrl = sylables[currentIndex];
      iframe.src = imageUrl;

      currentIndex++;
      if (currentIndex >= sylables.length) {
        currentIndex = 0;
      }
    }
  }

  setInterval(showNextImage, 3000);
}

startImageRotation();
