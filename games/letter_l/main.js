/*La función dragstart_handler se utiliza como controlador de eventos para el evento dragstart. Establece los datos 
para la operación de arrastrar y soltar mediante el método setData del objeto dataTransfer. 
En este caso, establece los datos en el valor del atributo id del elemento que se está arrastrando.
Configura la funcionalidad de arrastrar y soltar para varios elementos. 
Cuando se arrastra uno de estos elementos, se llama a la función dragstart_handler y establece
los datos para la operación de arrastrar y soltar.
Aqui se obtiene el identificador cada uno de los elementos en el div "banco" y se almacena en la variable let element,element1,...element11
 */
function dragstart_handler(el) {
  el.dataTransfer.setData("image", el.target.id);
  el.dataTransfer.effectAllowed = "move";
}

let element,
  element1,
  element2,
  element3,
  element4,
  element5,
  element6,
  element7,
  element8,
  element9,
  element10,
  element11;

window.addEventListener("DOMContentLoaded", () => {
  element = document.getElementById("draggable");
  element1 = document.getElementById("draggable1");
  element2 = document.getElementById("draggable2");
  element3 = document.getElementById("draggable3");
  element4 = document.getElementById("draggable4");
  element5 = document.getElementById("draggable5");
  element6 = document.getElementById("draggable6");
  element7 = document.getElementById("draggable7");
  element8 = document.getElementById("draggable8");
  element9 = document.getElementById("draggable9");
  element10 = document.getElementById("draggable10");
  element11 = document.getElementById("draggable11");

  element.addEventListener("dragstart", dragstart_handler);
  element1.addEventListener("dragstart", dragstart_handler);
  element2.addEventListener("dragstart", dragstart_handler);
  element3.addEventListener("dragstart", dragstart_handler);
  element4.addEventListener("dragstart", dragstart_handler);
  element5.addEventListener("dragstart", dragstart_handler);
  element6.addEventListener("dragstart", dragstart_handler);
  element7.addEventListener("dragstart", dragstart_handler);
  element8.addEventListener("dragstart", dragstart_handler);
  element9.addEventListener("dragstart", dragstart_handler);
  element10.addEventListener("dragstart", dragstart_handler);
  element11.addEventListener("dragstart", dragstart_handler);
});

/* La función dragover_handler es un controlador de eventos para el evento dragover.Su objetivo es prevenir el 
comportamiento predeterminado del navegador cuando un elemento se arrastra sobre otro elemento
 */ function dragover_handler(el) {
  el.preventDefault();
  el.dataTransfer.dropEffect = "move";
}

/* dropunique, drop1,drop2,...drop11 son funciones que controlan el comportamiento cuando se arrastra un elemento sobre otro
 y se suelta, realizando acciones específicas dependiendo del elemento arrastrado y el elemento objetivo. */
/* 
 La función dropunique es un controlador de eventos para el evento drop.Maneja la acción de soltar 
 un elemento arrastrado sobre otro elemento. Se utiliza el método preventDefault() para 
 evitar el comportamiento predeterminado del navegador al soltar elementos. Se obtiene
la información del elemento arrastrado utilizando el método getData() del objeto dataTransfer.
A continuación, se obtiene el elemento arrastrado y el elemento objetivo utilizando los objetos 
document.getElementById() y el.target, respectivamente.
 */

function dropunique(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}


function drop1(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element1) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}

function drop2(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element2) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}

function drop3(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element3) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}

function drop4(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element4) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}


function drop5(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element5) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}


function drop6(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element6) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}


function drop7(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element7) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}

function drop8(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element8) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}

function drop9(el) {
  el.preventDefault();
  const data = el.dataTransfer.getData("image");
  const draggedElement = document.getElementById(data);
  const targetElement = el.target;

  if (draggedElement === element9) {
    targetElement.appendChild(draggedElement);
    const sound = new Audio("audio/correct.ogg");
    sound.play();
  } else {
    const errorSound = new Audio("audio/error.ogg");
    errorSound.play();
  }
}




function camposLlenos() {
  if (
    isElementPresent &&
    isElementPresent2 &&
    isElementPresent3 &&
    isElementPresent4 &&
    isElementPresent5 &&
    isElementPresent6 &&
    isElementPresent7 &&
    isElementPresent8 &&
    isElementPresent9 &&
    isElementPresent10 &&
    isElementPresent11
  ) {
    setTimeout(function () {
      var audio = new Audio("audio/winner.ogg");
      audio.play();
    }, 500);

    setTimeout(function () {
      alert("¡Felicidades haz terminado el juego!");
      onload = location.reload();
    }, 1000);
  }
}