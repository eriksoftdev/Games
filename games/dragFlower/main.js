//#region Mezcla de manera aleatoria los elementos div que contienen las flores

// Función para reorganizar de manera aleatoria un array utilizando el algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Obtener todos los elementos div dentro de la clase "container"
const divs = Array.from(document.querySelectorAll('.container > div'));

// Reorganizar de manera aleatoria los elementos div en el DOM
const shuffledDivs = shuffleArray(divs);

// Colocar los divs reorganizados de nuevo en el DOM
const container = document.querySelector('.container');
container.innerHTML = ''; // Limpiar el contenido actual

shuffledDivs.forEach((div) => {
    container.appendChild(div);
});



//#region asingar silabas a las macetas y a las flores de manera aleatoria, dependiendo del select



// Define el array de sílabas
const sílabas = ["ma", "me", "mi", "mo", "mu"];

// Función para mezclar el array
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mezcla el array
mezclarArray(sílabas);

// Selecciona todos los elementos con la clase "silabaFooter"
const elementosSilabaFooter = document.querySelectorAll('.silabaFooter');

// Asigna las sílabas sin repetición a cada elemento
for (let i = 0; i < elementosSilabaFooter.length; i++) {
    elementosSilabaFooter[i].textContent = sílabas[i % sílabas.length];
}


// Selecciona todos los elementos con la clase "silaba"
const elementosSilaba = document.querySelectorAll('.silaba');

// Asigna las sílabas de forma consecutiva a cada elemento
for (let i = 0; i < elementosSilaba.length; i++) {
    elementosSilaba[i].textContent = sílabas[i % sílabas.length];
}



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
  

// Obtiene el elemento select
const selectElement = document.querySelector('select');

// Escucha el evento de cambio en el select
selectElement.addEventListener('change', () => {
    // Obtiene el valor de la opción seleccionada
    const opcionSeleccionada = selectElement.value;

    // Obtiene las sílabas correspondientes a la opción seleccionada
    let sílabas = opciones[opcionSeleccionada];

    // Mezcla el array de sílabas
    mezclarArray(sílabas);

    // Asigna las sílabas mezcladas a los divs con la clase "silaba" y "silabaFooter"
    const elementosSilaba = document.querySelectorAll('.silaba');
    const elementosSilabaFooter = document.querySelectorAll('.silabaFooter');

    for (let i = 0; i < elementosSilaba.length; i++) {
        elementosSilaba[i].textContent = sílabas[i % sílabas.length];
    }

    // Asigna las sílabas mezcladas a los elementos con la clase "silabaFooter"
    for (let i = 0; i < elementosSilabaFooter.length; i++) {
        elementosSilabaFooter[i].textContent = sílabas[i % sílabas.length];
    }
});

// Imprime las silabas que contienen los div silaba y silabaFooter


// Obtener los elementos div con las clases "silaba" y "silabaFooter"
const elementosDivSilaba = document.querySelectorAll('.silaba');
const elementosDivSilabaFooter = document.querySelectorAll('.silabaFooter');



//#region detectar colision entre silaba y silabaFooter


document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.querySelector('.container');
    const flowers = document.querySelectorAll('.flower');
    const macetas = document.querySelectorAll('.maceta');
    const body = document.querySelector('body');


    let draggedFlower = null;


    let errorsCount = 0;
    const soundError = new Audio('audio/error.ogg');
    const soundCorrect = new Audio('audio/correct.ogg');
    const erroresElement = document.querySelector('.error');


    flowers.forEach((flower) => {
        flower.addEventListener('dragstart', (e) => {
            draggedFlower = flower;
        });
    });

    macetas.forEach((maceta) => {
        maceta.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        maceta.addEventListener('drop', (e) => {
            if (draggedFlower) {
                const sílabaFlower = draggedFlower.querySelector('.silaba').textContent;
                const sílabaFooter = maceta.querySelector('.silabaFooter').textContent;

                if (sílabaFlower === sílabaFooter) {
                    e.preventDefault();
                    maceta.appendChild(draggedFlower);
                    draggedFlower.style.display = 'none'; // Añadir la propiedad display: none al elemento flower
                    
                     // Cambiar la imagen del maceta
                     const imagenMaceta = maceta.querySelector('img');
                     imagenMaceta.src = 'images/flowerpot.png'; // Reemplaza 'nueva_ruta_imagen.jpg' con la ruta de la nueva imagen
                   
                   
                     // Reproducir el sonido
                    soundCorrect.play();

                    draggedFlower = null;
                }
                else {
                    // Aumentar el contador de errores
                    errorsCount++;
                    // Actualizar el contador de errores en el elemento HTML
                    erroresElement.textContent = `Errores: ${errorsCount}`;
                    // Reproducir el sonido de error
                    soundError.play();
                }

                    
                function contarHijos() {
                    const numeroHijos = contenedor.children.length;
                    console.log('El contenedor tiene', numeroHijos, 'hijos.');
                    if (numeroHijos === 2) {
                        const reloadButton = document.createElement('button');
                        reloadButton.innerHTML = 'Volver a jugar <i class="fas fa-redo"></i>';
                        // Establece las propiedades de estilo
                        reloadButton.style.position = 'absolute';
                        reloadButton.style.top = '40%';
                        reloadButton.style.left = '50%';
                        reloadButton.style.transform = 'translate(-50%, -50%)';
                        reloadButton.style.fontSize = '1rem';
                        reloadButton.style.fontWeight = 'bold';
                        reloadButton.style.borderRadius = '20px';
                        reloadButton.style.padding = '10px 20px';
                        reloadButton.style.cursor = 'pointer';
                        
                        // Agrega el manejador de eventos para recargar la página
                        reloadButton.addEventListener('click', () => {
                            location.reload();
                        });
                        // Agrega el botón al cuerpo del documento
                        body.appendChild(reloadButton);
                    }
                }

                contarHijos();
            }
        });
    });
});

// Recargar pagina tras terminar ejercicio
