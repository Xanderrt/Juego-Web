// VARIABLES

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

//// SECCIONES
let seccionSeleccionarMonstruo = document.getElementById(
  "seleccionar-monstruo"
);
let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
let seccionReiniciar = document.getElementById("reiniciar");

//// BOTONES
let botonMonstruoJugador = document.getElementById("boton-elegir");
let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let botonReiniciar = document.getElementById("boton-reiniciar");

//MONSTRUOS
let inputHydrovortex = document.getElementById("hydrovortex");
let inputTerramorph = document.getElementById("terramorph");
let inputPyroclastia = document.getElementById("pyroclastia");
let inputFlowqua = document.getElementById("flowqua");
let inputMagmatron = document.getElementById("magmatron");
let inputVapullar = document.getElementById("vapullar");
let spanMonstruoJugador = document.getElementById("monstruo-jugador");

let spanMonstruoEnemigo = document.getElementById("monstruo-enemigo");

let sectionMensajes = document.getElementById("resultado");
let ataquesDelJugador = document.getElementById("ataques-del-jugador");
let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

let spanVidasJugador = document.getElementById("vidas-jugador");
let spanVidasEnemigo = document.getElementById("vidas-enemigo");


//// FUNCIONES

function iniciarJuego() {
  seccionSeleccionarAtaque.style.display = "none";

  seccionReiniciar.style.display = "none";

  botonMonstruoJugador.addEventListener("click", seleccionarMonstruoJugador);

  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);

  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMonstruoJugador() {
  seccionSeleccionarMonstruo.style.display = "none";
  seccionSeleccionarAtaque.style.display = "flex";

  if (inputHydrovortex.checked) {
    spanMonstruoJugador.innerHTML = "Hydrovortex";
  } else if (inputTerramorph.checked) {
    spanMonstruoJugador.innerHTML = "Terramorph";
  } else if (inputPyroclastia.checked) {
    spanMonstruoJugador.innerHTML = "Pyroclastia";
  } else if (inputFlowqua.checked) {
    spanMonstruoJugador.innerHTML = "Flowqua";
  } else if (inputMagmatron.checked) {
    spanMonstruoJugador.innerHTML = "Magmatron";
  } else if (inputVapullar.checked) {
    spanMonstruoJugador.innerHTML = "Vapullar";
  } else {
    alert("SELECCIONA UN MONSTRUO");
  }

  seleccionarMonstruoEnemigo();
}

function seleccionarMonstruoEnemigo() {
  let monstruoAleatorio = aleatorio(1, 6);
  
  if (monstruoAleatorio == 1) {
    spanMonstruoEnemigo.innerHTML = "Hydrovortex";
  } else if (monstruoAleatorio == 2) {
    spanMonstruoEnemigo.innerHTML = "Terramorph";
  } else if (monstruoAleatorio == 3) {
    spanMonstruoEnemigo.innerHTML = "Pyroclastia";
  } else if (monstruoAleatorio == 4) {
    spanMonstruoEnemigo.innerHTML = "Flowqua";
  } else if (monstruoAleatorio == 5) {
    spanMonstruoEnemigo.innerHTML = "Magmatron";
  } else {
    spanMonstruoEnemigo.innerHTML = "Vapullar";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  botonAgua.disabled = true;
  botonFuego.disabled = true;
  botonTierra.disabled = true;

  seccionReiniciar.style.display = "block";
}

function combate() {
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("ES UN EMPATE 🤝");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("HAS GANADO, GENIAL! 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("HAS GANADO, GENIAL! 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("HAS GANADO, GENIAL! 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE, MALA SUERTE! 💔");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("🎉🎉 Ganaste, Felicidades! 🎉🎉");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Perdiste, pero puedes seguir intentando 💪");
  }
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
