/* funcion para barajar los elementos del contenedor con clase drag */

function shuffleElements(containerId) {
    var container = document.querySelector(containerId);
    for (var i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

// Llamar a la función para barajar los elementos del contenedor
shuffleElements('.drag');

//declara variables globales para reproducir sonidos para las acciones de palabra correcta
// y cuando se suelta el elemento
const dropSound = new Audio('../audio/drop.ogg');
const wrongSound = new Audio('../audio/nodrop.ogg');
const winSound = new Audio('../audio/win.ogg');




// Esta sección de código es para el manejo de eventos de arrastrar y soltar elementos


const draggables = document.querySelectorAll('.drag div');
const droppables = document.querySelectorAll('.drop div');
let draggingElement = null;
let touchInfo = {};

function onDragStart(e) {
    e.preventDefault();
    draggingElement = e.target;
    draggingElement.classList.add('dragging');
    touchInfo = {
        startX: e.clientX || e.touches[0].clientX,
        startY: e.clientY || e.touches[0].clientY,
    };
}

function onDragMove(e) {
    e.preventDefault();

    if (draggingElement) {
        const offsetX = (e.clientX || e.touches[0].clientX) - touchInfo.startX;
        const offsetY = (e.clientY || e.touches[0].clientY) - touchInfo.startY;
        draggingElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
}

function onDragEnd(e) {
    e.preventDefault();

    if (draggingElement) {
        draggingElement.classList.remove('dragging');
        draggingElement.style.transform = '';

        droppables.forEach(droppable => {
            const droppableRect = droppable.getBoundingClientRect();
            const x = e.clientX || e.changedTouches[0].clientX;
            const y = e.clientY || e.changedTouches[0].clientY;

            if (x >= droppableRect.left && x <= droppableRect.right &&
                y >= droppableRect.top && y <= droppableRect.bottom) {
                const draggableId = draggingElement.id;
                const droppableId = droppable.id;
                const draggableNumber = parseInt(draggableId.replace('drag', ''));
                const droppableNumber = parseInt(droppableId.replace('drop', ''));

                if (draggableNumber === droppableNumber) {
                    droppable.innerHTML = '';
                    droppable.appendChild(draggingElement);
                    draggingElement.style.color = 'black';
                    dropSound.play();
                }
                else {
                    wrongSound.play();
                }
            }
        });
    }

    draggingElement = null;


    const routes = {
        '/b': nextWord_b,
        '/ca': nextWord_ca,
        '/ce': nextWord_ce,
        '/ch': nextWord_ch,
        '/ci': nextWord_ci,
        '/co': nextWord_co,
        '/cu': nextWord_cu,
        '/d': nextWord_d,
        '/f': nextWord_f,
        '/ga': nextWord_ga,
        '/ge': nextWord_ge,
        '/gi': nextWord_gi,
        '/go': nextWord_go,
        '/gu': nextWord_gu,
        '/gue': nextWord_gue,
        '/gui': nextWord_gui,
        '/j': nextWord_j,
        '/l': nextWord_l,
        '/m': nextWord_m,
        '/n': nextWord_n,
        '/%C3%B1': nextWord_ñ,
        '/p': nextWord_p,
        '/r': nextWord_r,
        '/s': nextWord_s,
        '/t': nextWord_t,
        '/v': nextWord_v,
    };


    const allDroppablesFilled = Array.from(droppables).every(d => d.children.length > 0);
    if (allDroppablesFilled) {
        completeWord();


        const ruta = window.location.pathname;
        const rutaParts = ruta.split('/');
        const letraRuta = rutaParts[rutaParts.length - 2];
        

        if (allDroppablesFilled) {
            completeWord();
            for (const route in routes) {
                if (route.includes(letraRuta)) {
                    routes[route]();
                    break;
                }
            }
        }

    }

}

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', onDragStart);
    draggable.addEventListener('mousemove', onDragMove);
    draggable.addEventListener('mouseup', onDragEnd);

    draggable.addEventListener('touchstart', onDragStart);
    draggable.addEventListener('touchmove', onDragMove);
    draggable.addEventListener('touchend', onDragEnd);
});



/* función que lanza confetti al completar la palabra */

function completeWord() {
    setTimeout(() => {
        winSound.play();
    }, 600);

    const count = 200,
        defaults = {
            origin: { y: 0.7 },
        };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            })
        );
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}


/* Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas dentro de las funciones nextword */
function mezclarPaginas(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */

var paginas_b = [
    'abanico.html',
    'abuela.html',
    'balon.html',
    'baño.html',
    'barco.html',
    'bebe.html',
    'beso.html',
    'beto.html',
    'bolso.html',
    'boton.html',
    'lobo.html',
    'rabano.html',
    'silaba.html',
    'silbato.html',
    'tiburon.html',
];

function cargarPaginaAleatoria(paginas_b) {
    mezclarPaginas(paginas_b);
    return paginas_b[0];
}

function nextWord_b() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_b);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_b);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */

var paginas_ca = [
    'calor.html',
    'cama.html',
    'camara.html',
    'camino.html',
    'camion.html',
    'camisa.html',
    'campo.html',
    'cañon.html',
    'cara.html',
    'carne.html',
    'carta.html',
    'casa.html',
    'oscar.html',
    'roca.html',
    'tucan.html',
];
function nextWord_ca() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ca);
    function cargarPaginaAleatoria(paginas_ca) {
        mezclarPaginas(paginas_ca);
        return paginas_ca[0];
    }

    
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ca);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}




/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_ce = [
    'aceite.html',
    'aceituna.html',
    'celular.html',
    'cemento.html',
    'cemita.html',
    'cena.html',
    'cerca.html',
    'cerdo.html',
    'cereal.html',
    'cero.html',
    'cesto.html',
    'lucero.html',
    'nueces.html',
    'oceano.html',
    'once.html',
];
function nextWord_ce() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ce);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ce);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}




/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_ch = [
    'capucha.html',
    'chaleco.html',
    'chapulin.html',
    'charla.html',
    'chef.html',
    'chicharo.html',
    'chile.html',
    'china.html',
    'chispa.html',
    'chocolate.html',
    'chucho.html',
    'enchufe.html',
    'ocho.html',
    'peluche.html',
    'salchicha.html',
];

function nextWord_ch() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ch);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ch);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}

/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_ci = [
    'acierto.html',
    'bocina.html',
    'cielo.html',
    'cien.html',
    'cieno.html',
    'cima.html',
    'cine.html',
    'cinta.html',
    'circo.html',
    'cirio.html',
    'ciruela.html',
    'cisne.html',
    'ciudad.html',
    'cocina.html',
    'encino.html',

];
function nextWord_ci() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ci);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ci);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_co = [
    'caracol.html',
    'casco.html',
    'cocada.html',
    'coctel.html',
    'color.html',
    'comal.html',
    'cometa.html',
    'comida.html',
    'cono.html',
    'copa.html',
    'cordero.html',
    'corona.html',
    'costal.html',
    'rico.html',
    'taco.html',
];
function nextWord_co() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_co);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_co);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_cu = [
    'cuaderno.html',
    'cuarto.html',
    'cuenca.html',
    'cuenta.html',
    'cuento.html',
    'cuerda.html',
    'cuero.html',
    'cuerpo.html',
    'culto.html',
    'cuna.html',
    'cuña.html',
    'cupon.html',
    'escuela.html',
    'licuado.html',
    'oscuridad.html',
];
function nextWord_cu() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_cu);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_cu);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_d = [
    'dado.html',
    'dalmata.html',
    'dama.html',
    'dato.html',
    'dedo.html',
    'deseo.html',
    'dia.html',
    'duda.html',
    'espada.html',
    'idea.html',
    'lodo.html',
    'medida.html',
    'pedal.html',
    'saludo.html',
    'soldado.html',
];
function nextWord_d() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_d);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_d);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}




/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_f = [
    'afuera.html',
    'alfiler.html',
    'cafe.html',
    'delfin.html',
    'felino.html',
    'felipe.html',
    'felpa.html',
    'feria.html',
    'fideo.html',
    'fila.html',
    'foca.html',
    'foco.html',
    'fuente.html',
    'oficina.html',
    'sofa.html',
];
function nextWord_f() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_f);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_f);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_ga = [
    'alga.html',
    'fogata.html',
    'gabinete.html',
    'gacela.html',
    'gafas.html',
    'gaita.html',
    'galera.html',
    'ganado.html',
    'gancho.html',
    'ganso.html',
    'gas.html',
    'gato.html',
    'pegaso.html',
    'regalo.html',
    'soga.html',
];
function nextWord_ga() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ga);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ga);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}




/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_ge = [
    'agenda.html',
    'angel.html',
    'esfinge.html',
    'geiser.html',
    'gel.html',
    'gelatina.html',
    'gema.html',
    'gemelo.html',
    'genio.html',
    'gente.html',
    'germen.html',
    'gesto.html',
    'imagen.html',
    'margen.html',
    'sargento.html',
];
function nextWord_ge() {
    

    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ge);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ge);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_gi = [
    'colegio.html',
    'gibon.html',
    'gigante.html',
    'gilberto.html',
    'gineta.html',
    'girasol.html',
    'giro.html',
    'gis.html',
    'gisela.html',
    'gitana.html',
    'magia.html',
    'pagina.html',
    'refugio.html',
    'region.html',
    'vigilante.html',
];
function nextWord_gi() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_gi);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_gi);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_go = [
    'algodon.html',
    'amigo.html',
    'estomago.html',
    'fuego.html',
    'golosina.html',
    'goma.html',
    'gomita.html',
    'gorila.html',
    'gota.html',
    'lago.html',
    'largo.html',
    'latigo.html',
    'logo.html',
    'mango.html',
    'yugo.html',
];
function nextWord_go() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_go);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_go);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_gu = [
    'guacamaya.html',
    'agudo.html',
    'angulo.html',
    'canguro.html',
    'guacamole.html',
    'guante.html',
    'guardia.html',
    'guarida.html',
    'guru.html',
    'gusano.html',
    'gusto.html',
    'iguana.html',
    'laguna.html',
    'lengua.html',
    'segundo.html',
];
function nextWord_gu() {
 
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_gu);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_gu);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}




/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_gue = [
    'albergue.html',
    'espagueti.html',
    'gueldo.html',
    'guelte.html',
    'guepardo.html',
    'guepe.html',
    'higuera.html',
    'hoguera.html',
    'hormiguero.html',
    'juguete.html',
    'larguero.html',
    'manguera.html',
    'reguera.html',
    'segueta.html',
    'zaguero.html',
];
function nextWord_gue() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_gue);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_gue);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_gui = [
    'aguila.html',
    'aguinaldo.html',
    'anguila.html',
    'guia.html',
    'guinda.html',
    'guindo.html',
    'guinea.html',
    'guiño.html',
    'guion.html',
    'guionista.html',
    'guirnalda.html',
    'guisante.html',
    'guiso.html',
    'guita.html',
    'hormiguita.html',
];
function nextWord_gui() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_gui);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_gui);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_j = [
    'abeja.html',
    'almeja.html',
    'cobija.html',
    'jabali.html',
    'jabon.html',
    'jalea.html',
    'jaula.html',
    'jicote.html',
    'jirafa.html',
    'juego.html',
    'jugo.html',
    'ojo.html',
    'pajaro.html',
    'tejado.html',
    'tijera.html',
];
function nextWord_j() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_j);
    setTimeout(function () {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_j);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}




/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_l = [
    'alma.html',
    'isla.html',
    'lupa.html',
    'malo.html',
    'milpa.html',
    'pala.html',
    'palapa.html',
    'palo.html',
    'paloma.html',
    'pelo.html',
    'pelusa.html',
    'pila.html',
    'pulpo.html',
    'sal.html',
    'sol.html',
];
function nextWord_l() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_l);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_l);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_m = [
    'ama.html',
    'amo.html',
    'ema.html',
    'emi.html',
    'emo.html',
    'mama.html',
    'mami.html',
    'memo.html',
    'mia.html',
    'mimi.html',
    'mimo.html',
    'momia.html',
];
function nextWord_m() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_m);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_m);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_n = [
    'dona.html',
    'duna.html',
    'linea.html',
    'mano.html',
    'mono.html',
    'nata.html',
    'nena.html',
    'neon.html',
    'nido.html',
    'nopal.html',
    'nota.html',
    'nudo.html',
    'pino.html',
    'sonido.html',
    'tinta.html',
];
function nextWord_n() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_n);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_n);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */

var paginas_ñ = [
    'araña.html',
    'dueño.html',
    'españa.html',
    'leña.html',
    'mañana.html',
    'niña.html',
    'niño.html',
    'otoño.html',
    'piña.html',
    'piñata.html',
    'seña.html',
    'señor.html',
    'sueño.html',
    'toño.html',
    'uña.html',
];
function nextWord_ñ() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_ñ);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_ñ);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_p = [
    'aspa.html',
    'espuma.html',
    'mapa.html',
    'papa.html',
    'Papa.html',
    'pasa.html',
    'pepa.html',
    'pepe.html',
    'pesa.html',
    'peso.html',
    'pipa.html',
    'piso.html',
    'puma.html',
    'sapo.html',
    'sopa.html',
];
function nextWord_p() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_p);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_p);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_r = [
    'muro.html',
    'pirata.html',
    'rama.html',
    'rana.html',
    'rata.html',
    'reina.html',
    'remo.html',
    'reno.html',
    'rima.html',
    'rio.html',
    'risa.html',
    'rosa.html',
    'rueda.html',
    'ruta.html',
    'tere.html',
];
function nextWord_r() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_r);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_r);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_s = [
    'suma.html',
    'sismo.html',
    'simio.html',
    'sam.html',
    'sima.html',
    'mes.html',
    'masa.html',
    'misa.html',
    'musa.html',
    'mesa.html',
    'mas.html',
    'asma.html',
    'oso.html',
    'ese.html',
    'susi.html',
];
function nextWord_s() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_s);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_s);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_t = [
    'alto.html',
    'estampa.html',
    'lata.html',
    'meta.html',
    'moto.html',
    'pastel.html',
    'pato.html',
    'salto.html',
    'tamal.html',
    'tapa.html',
    'tela.html',
    'tele.html',
    'tomate.html',
    'topo.html',
    'tos.html',
];
function nextWord_t() {


    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_t);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_t);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}


/* funcion que carga una página al azar tras completar el ejercicio de manera correcta */
var paginas_v = [
    'ave.html',
    'avion.html',
    'lavadora.html',
    'nave.html',
    'nieve.html',
    'uva.html',
    'vaca.html',
    'vaso.html',
    'vela.html',
    'venado.html',
    'verano.html',
    'viento.html',
    'vino.html',
    'violin.html',
    'volcan.html',
];
function nextWord_v() {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array de páginas
    mezclarPaginas(paginas_v);
    setTimeout(function() {
        var paginaAleatoria = cargarPaginaAleatoria(paginas_v);
        window.location.href = paginaAleatoria;
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de cargar la página aleatoria
}



/* funcionalidad de la pista */


function toggleDropTextVisibility() {
    // Almacena el texto de los divs de clase drop en una variable
    let dropText = Array.from(document.querySelectorAll('.drop')).map(drop => drop.textContent);

    // Obtiene el estado almacenado en el almacenamiento local (localStorage)
    let hidden = localStorage.getItem('textVisibility') === 'true';

    // Aplica el estado almacenado
    document.querySelectorAll('.drop').forEach(drop => {
        if (hidden) {
            drop.style.color = 'gray';
        } else {
            drop.style.color = 'rgba(0,0,0,0)';
        }
    });

    // Actualiza el texto del botón en base al estado
    document.querySelector('.ChangeLevel').textContent = hidden ? 'Quitar pista' : 'Pista';

    // Agrega un event listener al botón para alternar la visibilidad del texto de los divs drop
    document.querySelector('.ChangeLevel').addEventListener('click', function () {
        document.querySelectorAll('.drop').forEach((drop, index) => {
            if (hidden) {
                drop.style.color = 'rgba(0,0,0,0)';
            } else {
                drop.style.color = 'gray';
            }
        });
        hidden = !hidden;

        // Almacena el nuevo estado en el almacenamiento local (localStorage)
        localStorage.setItem('textVisibility', hidden.toString());

        // Actualiza el texto del botón
        document.querySelector('.ChangeLevel').textContent = hidden ? 'Quitar pista' : 'Pista';
    });
}

// Llama a la función para activar la funcionalidad de alternar la visibilidad del texto
toggleDropTextVisibility();





// Seccion para el cambio de niveles segun la opcion del select
const letraMap = {
    1: 'm',
    2: 's',
    3: 'p',
    4: 'l',
    5: 't',
    6: 'd',
    7: 'n',
    8: 'r',
    9: 'ñ',
    10: 'ca',
    11: 'co',
    12: 'cu',
    13: 'ce',
    14: 'ci',
    15: 'f',
    16: 'ch',
    17: 'b',
    18: 'v',
    19: 'ga',
    20: 'go',
    21: 'gu',
    22: 'ge',
    23: 'gi',
    24: 'gue',
    25: 'gui',
    26: 'j',
};


const paths = {
    b: cargarPaginaAleatoria(paginas_b),
    ca: cargarPaginaAleatoria(paginas_ca),
    ce: cargarPaginaAleatoria(paginas_ce),
    ch: cargarPaginaAleatoria(paginas_ch),
    ci: cargarPaginaAleatoria(paginas_ci),
    co: cargarPaginaAleatoria(paginas_co),
    cu: cargarPaginaAleatoria(paginas_cu),
    d: cargarPaginaAleatoria(paginas_d),
    f: cargarPaginaAleatoria(paginas_f),
    ga: cargarPaginaAleatoria(paginas_ga),
    ge: cargarPaginaAleatoria(paginas_ge),
    gi: cargarPaginaAleatoria(paginas_gi),
    go: cargarPaginaAleatoria(paginas_go),
    gu: cargarPaginaAleatoria(paginas_gu),
    gue: cargarPaginaAleatoria(paginas_gue),
    gui: cargarPaginaAleatoria(paginas_gui),
    j: cargarPaginaAleatoria(paginas_j),
    l: cargarPaginaAleatoria(paginas_l),
    m: cargarPaginaAleatoria(paginas_m),
    n: cargarPaginaAleatoria(paginas_n),
    ñ: cargarPaginaAleatoria(paginas_ñ),
    p: cargarPaginaAleatoria(paginas_p),
    r: cargarPaginaAleatoria(paginas_r),
    s: cargarPaginaAleatoria(paginas_s),
    t: cargarPaginaAleatoria(paginas_t),
    v: cargarPaginaAleatoria(paginas_v),
};


const select = document.getElementById('select');
select.addEventListener('change', function () {
    const value = select.value;
    const letter = letraMap[value];
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    const letra = letraMap[value];
    const newPath = pathParts.slice(0, -2).join('/') + '/' + letter + '/' + paths[letra];
    location.href = newPath;
});

