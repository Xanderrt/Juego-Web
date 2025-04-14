// VARIABLES
let ataqueJugador;
let ataqueEnemigo;

// // FUNCIONES

function iniciarJuego() {
  let botonMonstruoJugador = document.getElementById("boton-elegir");
  botonMonstruoJugador.addEventListener("click", seleccionarMonstruoJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMonstruoJugador() {
  let inputHydrovortex = document.getElementById("hydrovortex");
  let inputTerramorph = document.getElementById("terramorph");
  let inputPyroclastia = document.getElementById("pyroclastia");
  let inputFlowqua = document.getElementById("flowqua");
  let inputMagmatron = document.getElementById("magmatron");
  let inputVapullar = document.getElementById("vapullar");
  let spanMonstruoJugador = document.getElementById("monstruo-jugador");

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
  let spanMonstruoEnemigo = document.getElementById("monstruo-enemigo");

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

function crearMensaje() {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu monstruo atacó con " +
    ataqueJugador +
    " y el monstruo enemigo atacó con " +
    ataqueEnemigo +
    ", Que pasara?";

  sectionMensajes.appendChild(parrafo);
}

function combate() {
  if (ataqueEnemigo == ataqueJugador) {
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
  } else {
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
