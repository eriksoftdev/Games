const preloader = document.getElementById('preloader');

// Función para configurar los botones
function setupButtons(links, prefix) {
    for (let i = 0; i < links.length; i++) {
        document.getElementById(`${prefix}${i + 1}`).onclick = function () {
            // Muestra la pantalla de carga
            preloader.style.display = 'flex'; // Cambiar a 'flex' para centrar el contenido

            // Redirige después de un breve retraso
            setTimeout(function () {
                window.location.href = links[i];
            }, 1000); // Espera un segundo antes de redirigir
        };
    }
}

// Juegos de arrastrar y soltar
const links = [
    'games/dragFlower/index.html',
    'games/dp/index.html',
    'games/letter_l/index.html',
    'games/silabasDrop2/m/ama.html',
    'games/tablesV2/index.html',
];
setupButtons(links, 'boton');

// Juegos de Pintar
const linksPintar = [
    'games/paintPath/index.html',
    'games/fish/ma.html',
    'games/fish/me.html',
    'games/fish/mi.html',
    'games/fish/mo.html',
    'games/fish/mu.html',
    'games/CarpetasInteractivo/dibujarM/page3.html',
    'games/CarpetasInteractivo/dibujarSilabas/page8.html',
];
setupButtons(linksPintar, 'botonPintar');

// Juegos de Disparo
const linksDisparo = [
    'games/spaceShip/index.html',
    'games/spaceShipMobile/index.html',
    'games/Peces/index.html',
];
setupButtons(linksDisparo, 'botonDisparo');

// Juegos de Letras y Sonidos
const linksLetrasSonidos = [
    'games/CarpetasInteractivo/ClickSonidoM/page2.html',
    'games/CarpetasInteractivo/videoM/page4.html',
    'games/CarpetasInteractivo/silabasProgresivas/page5.html',
];
setupButtons(linksLetrasSonidos, 'botonLetrasSonidos');

// Juegos de Relacionar
const linksRelacionar = [
    'games/CarpetasInteractivo/imagenConSilaba/page6.html',
];
setupButtons(linksRelacionar, 'botonRelacionar');