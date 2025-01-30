/* Este codigo hace que el iframe se cargue una pagina correspondiente a una vocal de manera aleatoria
 */

function randomPage() {
  const urls = [
    "trazo_a.html",
    "trazo_e.html",
    "trazo_i.html",
    "trazo_o.html",
    "trazo_u.html",
  ];

  // Función de mezcla de Fisher-Yates
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Mezcla el arreglo de URLs
  const shuffledUrls = shuffle(urls);

  const randomIndex = Math.floor(Math.random() * shuffledUrls.length);
  const randomUrl = shuffledUrls[randomIndex];
  const iframe = document.getElementById("randomPage");
  iframe.src = randomUrl;
}
