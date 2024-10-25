const personagemRyu = document.getElementById('ryu'); 
const ataqueHaduken = document.getElementById('Haduken');
const somHadouken = document.getElementById('hadouken-sound');

let posicaoRyu = { esquerda: 50, baixo: 50 };
let pulando = false;

document.addEventListener('keydown', (evento) => {
    let key = evento.key.toLowerCase()
    if (key === 'd') {
        moverRyuParaDireita();
    } else if (key === 'a') {
        moverRyuParaEsquerda();
    } else if (key === ' ') {
        lancarHaduken();
    }
    atualizarPosicaoRyu();
});

function moverRyuParaDireita() {
    if (posicaoRyu.esquerda < 1720) {
        posicaoRyu.esquerda += 10;
    }
}

function moverRyuParaEsquerda() {
    if (posicaoRyu.esquerda > 0) {
        posicaoRyu.esquerda -= 10;
    }
}

function realizarSalto() {
    pulando = true;
    // Adicionar lógica para pular aqui (se necessário)
    // Você pode implementar a animação do salto se desejar
    setTimeout(() => {
        pulando = false; // Termina o salto após um tempo
    }, 1000); // Define a duração do salto
}

function atualizarPosicaoRyu() {
    personagemRyu.style.left = `${posicaoRyu.esquerda}px`;
}

function lancarHaduken() {
    ataqueHaduken.style.display = 'block';
    personagemRyu.src = "./img/ryu-magia.png";
    ataqueHaduken.style.left = `${posicaoRyu.esquerda + 50}px`;
    somHadouken.play();

    moverHaduken();
}

function moverHaduken() {
    let intervaloHaduken = setInterval(() => {
        ataqueHaduken.style.left = `${parseInt(ataqueHaduken.style.left) + 50}px`;
        if (parseInt(ataqueHaduken.style.left) > window.innerWidth) {
            clearInterval(intervaloHaduken);
            ataqueHaduken.style.display = 'none';
            personagemRyu.src = "./img/ryu-ginga.gif";
        }
    }, 20);
}
