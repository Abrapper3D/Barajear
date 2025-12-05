// --- CONFIGURACIîN ---
const NUM_DICE_FACES = 6;
const NUM_ROLL_GIFS = 1; // Ajusta este nœmero cuando agregues m‡s GIFs
const ANIMATION_DURATION = 2500; // 2.5 segundos de duraci—n
const DICE_FOLDER = 'dados/';
const ANIMATION_FOLDER = 'animaciones/';
// --------------------

// Funci—n para obtener un nœmero aleatorio entre min y max (incluidos)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Configurar la Imagen Inicial del Dado (al cargar la p‡gina)
function setInitialDice() {
    const diceImg = document.getElementById('dice-img');
    const initialFace = getRandomInt(1, NUM_DICE_FACES);
    diceImg.src = DICE_FOLDER + `dice${initialFace}.png`;
}

setInitialDice();


// 2. Funci—n principal para lanzar el dado
function rollDice() {
    const diceImg = document.getElementById('dice-img');
    const rollButton = document.getElementById('roll-button');
    
    rollButton.disabled = true;

    // --- Parte 1: Iniciar Animaci—n de Carga (GIF) ---

    // 1. Elegir un GIF de animaci—n (si solo tienes 1, siempre elige el 1)
    const randomGifIndex = getRandomInt(1, NUM_ROLL_GIFS);
    const randomGifFileName = `roll_anim${randomGifIndex}.gif`; 
    
    // Ruta base: "animaciones/roll_anim1.gif"
    const randomGifBaseSrc = ANIMATION_FOLDER + randomGifFileName; 
    
    // **SOLUCIîN DEL GIF:** A–adir el timestamp actual como par‡metro de consulta
    // Esto fuerza al navegador a recargar el archivo y reiniciar la animaci—n.
    const finalGifSrc = randomGifBaseSrc + `?t=${new Date().getTime()}`;

    // 2. Asignar la fuente de la imagen (con el cache-buster)
    diceImg.src = finalGifSrc;

    // 3. Generar el resultado (esto se hace al inicio, pero se muestra al final)
    const finalResult = getRandomInt(1, NUM_DICE_FACES);
    
    // --- Parte 2: Esperar y Mostrar Resultado ---

    setTimeout(() => {
        
        // 4. Mostrar la imagen del resultado final
        diceImg.src = DICE_FOLDER + `dice${finalResult}.png`;
        
        // 5. Re-habilitar el bot—n
        rollButton.disabled = false;
        
    }, ANIMATION_DURATION);
}