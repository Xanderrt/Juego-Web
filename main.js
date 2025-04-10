
// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0
let pc = 2

jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")


if (jugador == 1) {
    alert("elegiste piedra")        
} else if (jugador == 2) {
    alert("elegiste papel")
} else if (jugador == 3) {
    alert("elegiste tijera")
} else {
    alert("elegiste perder")
}