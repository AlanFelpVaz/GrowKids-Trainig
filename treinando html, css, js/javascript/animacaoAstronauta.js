var astronauta = document.getElementById("imageAnimation")

let flutuacao = 0.0;
let suavizacao = 0.025;
let animated_value = 0;


const center = { 
    y: parseFloat(getComputedStyle(astronauta).top)
}

function comecarAnimacao() {
    flutuacao = center.y - (25 * Math.sin(suavizacao * animated_value));

    astronauta.style.top = `${flutuacao}px`;

    animated_value++;

    requestAnimationFrame(comecarAnimacao)
}
comecarAnimacao()