// VARIABLES

//// SECCIONES
let seccionSeleccionarMonstruo = document.getElementById(
  "seleccionar-monstruo"
);
const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const seccionReiniciar = document.getElementById("reiniciar");

//// BOTONES
const botonMonstruoJugador = document.getElementById("boton-elegir");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");

//MONSTRUOS
const inputHydrovortex = document.getElementById("hydrovortex");
const inputTerramorph = document.getElementById("terramorph");
const inputPyroclastia = document.getElementById("pyroclastia");
const inputFlowqua = document.getElementById("flowqua");
const inputMagmatron = document.getElementById("magmatron");
const inputVapullar = document.getElementById("vapullar");
const spanMonstruoJugador = document.getElementById("monstruo-jugador");

const spanMonstruoEnemigo = document.getElementById("monstruo-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

let monstruos = [];
let ataqueJugador;
let ataqueEnemigo;
let opcionDeMonstruo;
let vidasJugador = 3;
let vidasEnemigo = 3;

//CLASES
class Monstruo {
  constructor(nombre, img, vida){
    this.nombre = nombre
    this.img = img
    this.vida = vida
    this.ataques = []
  }
}

let hydrovortex = new Monstruo('Hydrovortex', '/img/hydrovortex.png', 5)
let terramorph = new Monstruo('Terramorph', '/img/terramorph.png', 5)
let pyroclastia = new Monstruo('Pyroclastia', '/img/pyroclastia.png', 5)
let flowqua = new Monstruo('Flowqua', '/img/flowqua.png', 5)
let magmatron = new Monstruo('Magmatron', '/img/magmatron.png', 5)
let vapullar = new Monstruo('Vapullar', '/img/vapullar.png', 5)

hydrovortex.ataques.push(
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌿', id: 'boton-tierra'},
  {nombre: '🔥', id: 'boton-fuego'},
)

terramorph.ataques.push(
  {nombre: '🌿', id: 'boton-tierra'},
  {nombre: '🌿', id: 'boton-tierra'},
  {nombre: '🌿', id: 'boton-tierra'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
)

pyroclastia.ataques.push(
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌿', id: 'boton-tierra'},
)

flowqua.ataques.push(
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌿', id: 'boton-tierra'},
  {nombre: '🌿', id: 'boton-tierra'}, 
)

magmatron.ataques.push(  
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🌿', id: 'boton-tierra'},
  {nombre: '🌿', id: 'boton-tierra'},
)

vapullar.ataques.push(
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
)

monstruos.push(hydrovortex, terramorph, pyroclastia, flowqua, magmatron, vapullar)


//// FUNCIONES

function iniciarJuego() {
  seccionSeleccionarAtaque.style.display = "none";

  monstruos.forEach((monstruo) => {
    opcionDeMonstruo = `
    <input type="radio" name="monstruo" id=${monstruo.nombre} />
    <label for=${monstruo.nombre} class="tarjeta-de-monstruo">
      <p>${monstruo.nombre}</p>
      <img src=${monstruo.img} alt=${monstruo.nombre} />
    </label>
    `;

    contenedorTarjetas.innerHTML += opcionDeMonstruo
  })

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
