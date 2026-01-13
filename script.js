// ============================================
// CONFIGURATION DES IMAGES
// ============================================
const IMG_FOND_PIECE = "assets/sans-element.png";
const IMG_VRAI_TABLEAU = "assets/tableau-final.jpg";

// Question 1 (La Fille)
const IMG_Q1_AVEC_RUBAN = "assets/fille-avec-ruban.png";
const IMG_Q1_SANS_RUBAN = "assets/fille-sans-ruban.png";

// Question 2 (Les Cadres au mur)
const IMG_Q2_2_TABLEAUX = "assets/version-2tableaux.png";
const IMG_Q2_3_TABLEAUX = "assets/version-3tableaux.png";

// Question 3 (L'Ours)
const IMG_Q3_OURS_NOIR = "assets/ours-noir.png";
const IMG_Q3_OURS_BLANC = "assets/ours-blanc.png";

// ============================================
// DONNÉES DU QUIZ
// ============================================
const questions = [
    {
        text: "La fille portait-elle un ruban ?",
        choices: [
            { label: "Oui", image: IMG_Q1_AVEC_RUBAN },
            { label: "Non", image: IMG_Q1_SANS_RUBAN }
        ]
    },
    {
        text: "Combien de tableaux y avait-il au mur ?",
        choices: [
            { label: "Deux", image: IMG_Q2_2_TABLEAUX },
            { label: "Trois", image: IMG_Q2_3_TABLEAUX }
        ]
    },
    {
        text: "De quelle couleur était l'ours ?",
        choices: [
            { label: "Noir", image: IMG_Q3_OURS_NOIR },
            { label: "Blanc", image: IMG_Q3_OURS_BLANC }
        ]
    }
];

// ============================================
// ÉTAT DU JEU
// ============================================
let currentQuestionIndex = 0;
let selectedLayers = [];

// ============================================
// ÉLÉMENTS DOM
// ============================================
const phaseWelcome = document.getElementById('phase-welcome');
const phaseObservation = document.getElementById('phase-observation');
const phaseConstruction = document.getElementById('phase-construction');
const phaseComparison = document.getElementById('phase-comparison');
const imgObservation = document.getElementById('img-observation');
const imgOriginal = document.getElementById('img-original');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices');
const currentQuestionSpan = document.getElementById('current-question');
const timerCountdown = document.getElementById('timer-countdown');
const userResult = document.getElementById('user-result');

// ============================================
// FONCTIONS DU JEU
// ============================================
function initGame() {
    imgObservation.src = IMG_VRAI_TABLEAU;
    imgOriginal.src = IMG_VRAI_TABLEAU;
}

function startGame() {
    phaseWelcome.classList.add('fade-out');

    setTimeout(() => {
        phaseWelcome.classList.remove('active', 'fade-out');
        phaseObservation.classList.add('active');

        const timerBar = document.querySelector('.timer-bar');
        if (timerBar) {
            timerBar.style.animation = 'none';
            timerBar.offsetHeight;
            timerBar.style.animation = 'timerShrink 10s linear forwards';
        }

        startObservationTimer();
    }, 600);
}

function startObservationTimer() {
    let seconds = 10;
    timerCountdown.textContent = seconds;

    const interval = setInterval(() => {
        seconds--;
        timerCountdown.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(interval);
            transitionToConstruction();
        }
    }, 1000);
}

function transitionToConstruction() {
    phaseObservation.classList.add('fade-out');

    setTimeout(() => {
        phaseObservation.classList.remove('active', 'fade-out');
        phaseConstruction.classList.add('active');
        showQuestion();
    }, 600);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.text;

    // Mettre à jour la barre de progression
    updateProgressBar();

    choicesContainer.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.label;
        btn.onclick = () => selectChoice(index);
        choicesContainer.appendChild(btn);
    });
}

function updateProgressBar() {
    const dots = document.querySelectorAll('.question-progress-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index < currentQuestionIndex) {
            dot.classList.add('completed');
        } else if (index === currentQuestionIndex) {
            dot.classList.add('active');
        }
    });
}

function selectChoice(choiceIndex) {
    const question = questions[currentQuestionIndex];
    const selectedImage = question.choices[choiceIndex].image;

    selectedLayers.push(selectedImage);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 300);
    } else {
        setTimeout(transitionToComparison, 500);
    }
}

function transitionToComparison() {
    phaseConstruction.classList.add('fade-out');

    setTimeout(() => {
        phaseConstruction.classList.remove('active', 'fade-out');
        phaseComparison.classList.add('active');
        buildFinalResult();
    }, 600);
}

function buildFinalResult() {
    userResult.innerHTML = '';

    const fondImg = document.createElement('img');
    fondImg.src = IMG_FOND_PIECE;
    fondImg.alt = 'Fond';
    userResult.appendChild(fondImg);

    selectedLayers.forEach(src => {
        const layerImg = document.createElement('img');
        layerImg.src = src;
        layerImg.alt = 'Calque';
        layerImg.className = 'layer';
        userResult.appendChild(layerImg);
    });
}

function restartGame() {
    currentQuestionIndex = 0;
    selectedLayers = [];

    phaseComparison.classList.remove('active');
    phaseWelcome.classList.add('active');
}

// ============================================
// DÉMARRAGE
// ============================================
document.addEventListener('DOMContentLoaded', initGame);
