import EnemyController from "./EnemyController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Dimensione CANVAS - del campo di gioco
canvas.width = 1000;
canvas.height = 864;

// Background img CANVAS
const background = new Image();
background.src = "img/space.png"


const enemyController = new EnemyController(canvas);

// Funzione che stampa img in CANVAS
function game (params) {
    ctx.drawImage(background,0,0, canvas.width, canvas.height)
    enemyController.draw(ctx);
}
setInterval(game, 1000/60);