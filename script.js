// ============================================
// CONFIGURATION DES NIVEAUX
// ============================================

// LEVEL 1 - Tableau original (3 questions - Mode Essai)
const LEVEL1 = {
    name: "Mode Essai",
    observationTime: 10,
    fondPiece: "assets/sans-element.png",
    vraiTableau: "assets/tableau-final.jpg",
    questions: [
        {
            text: "La fille portait-elle un ruban ?",
            choices: [
                { label: "Oui", image: "assets/fille-avec-ruban.png" },
                { label: "Non", image: "assets/fille-sans-ruban.png" }
            ]
        },
        {
            text: "Combien de tableaux y avait-il au mur ?",
            choices: [
                { label: "Deux", image: "assets/version-2tableaux.png" },
                { label: "Trois", image: "assets/version-3tableaux.png" }
            ]
        },
        {
            text: "De quelle couleur était l'ours ?",
            choices: [
                { label: "Noir", image: "assets/ours-noir.png" },
                { label: "Blanc", image: "assets/ours-blanc.png" }
            ]
        }
    ]
};

// LEVEL 2 - Tableau Eugène Buland (10 questions)
const LEVEL2 = {
    name: "Tableau Buland",
    observationTime: 15,
    fondPiece: "assets/level2/fond-vide.jpg",
    vraiTableau: "assets/level2/tableau-complet.jpg",
    questions: [
        {
            text: "Quelle était la couleur des rideaux ?",
            choices: [
                { label: "Noir", image: "assets/level2/q1-rideaux-noir.png" },
                { label: "Blanc", image: "assets/level2/q1-rideaux-blanc.png" },
                { label: "Rouge", image: "assets/level2/q1-rideaux-rouge.png" }
            ]
        },
        {
            text: "De quelle couleur est le poster accroché sur le mur du fond ?",
            choices: [
                { label: "Orange", image: "assets/level2/q2-poster-orange.png" },
                { label: "Jaune", image: "assets/level2/q2-poster-jaune.png" },
                { label: "Rouge", image: "assets/level2/q2-poster-rouge.png" }
            ]
        },
        {
            text: "Quel est le nombre de personnes dans la pièce ?",
            choices: [
                { label: "5", image: "assets/level2/q3-personnes-5.png" },
                { label: "4", image: "assets/level2/q3-personnes-4.png" }
            ]
        },
        {
            text: "Combien de personnes vous regardent ?",
            choices: [
                { label: "1", image: "assets/level2/q9-regard-1.png" },
                { label: "2", image: "assets/level2/q9-regard-2.png" },
                { label: "Aucun", image: "assets/level2/q9-regard-aucun.png" }
            ]
        },
        {
            text: "Combien de personnes possèdent un couvre-chef ?",
            choices: [
                { label: "3", image: "assets/level2/q4-couvrechef-3.png" },
                { label: "2", image: "assets/level2/q4-couvrechef-2.png" },
                { label: "1", image: "assets/level2/q4-couvrechef-1.png" }
            ]
        },
        {
            text: "Quel élément retrouve-t-on sur le rebord de la fenêtre ?",
            choices: [
                { label: "Une bouteille", image: "assets/level2/q5-fenetre-bouteille.png" },
                { label: "Une bougie", image: "assets/level2/q5-fenetre-bougie.png" },
                { label: "Un livre", image: "assets/level2/q5-fenetre-livre.png" }
            ]
        },
        {
            text: "Quel objet est présent sur le coin de la table ?",
            choices: [
                { label: "Une boîte d'allumettes", image: "assets/level2/q6-table-allumettes.png" },
                { label: "Un pot d'encre", image: "assets/level2/q6-table-encre.png" },
                { label: "Aucun des deux", image: "assets/level2/q6-table-aucun.png" }
            ]
        },
        {
            text: "Quel est le nombre de bougies sur la table ?",
            choices: [
                { label: "2", image: "assets/level2/q7-bougies-2.png" },
                { label: "1", image: "assets/level2/q7-bougies-1.png" },
                { label: "3", image: "assets/level2/q7-bougies-3.png" }
            ]
        },
        {
            text: "Quelle est la couleur de l'intérieur du seau ?",
            choices: [
                { label: "Cuivre", image: "assets/level2/q8-seau-cuivre.png" },
                { label: "Argenté", image: "assets/level2/q8-seau-argente.png" },
                { label: "Dorée", image: "assets/level2/q8-seau-doree.png" }
            ]
        },
        {
            text: "Couleur de l'intérieur de l'étagère sur la gauche ?",
            choices: [
                { label: "Rouge", image: "assets/level2/q9-etagere-rouge.png" },
                { label: "Jaune", image: "assets/level2/q9-etagere-jaune.png" },
                { label: "Orange", image: "assets/level2/q9-etagere-orange.png" }
            ]
        },
        {
            text: "Quel objet l'homme à droite du tableau tient-il dans sa main ?",
            choices: [
                { label: "Canne", image: "assets/level2/q10-main-canne.png" },
                { label: "Parapluie", image: "assets/level2/q10-main-parapluie.png" },
                { label: "Règle", image: "assets/level2/q10-main-regle.png" }
            ]
        }
    ]
};

// ============================================
// ÉTAT DU JEU
// ============================================
let currentLevel = null;
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
const totalQuestionsSpan = document.getElementById('total-questions');
const timerCountdown = document.getElementById('timer-countdown');
const userResult = document.getElementById('user-result');
const questionProgress = document.getElementById('question-progress');

// ============================================
// FONCTIONS DU JEU
// ============================================
function initGame() {
    // Rien à initialiser au démarrage, on attend le choix du niveau
}

function startGame(levelNumber) {
    // Sélectionner le niveau
    currentLevel = levelNumber === 1 ? LEVEL1 : LEVEL2;

    // Initialiser les images
    imgObservation.src = currentLevel.vraiTableau;
    imgOriginal.src = currentLevel.vraiTableau;

    // Mettre à jour le nombre total de questions
    if (totalQuestionsSpan) {
        totalQuestionsSpan.textContent = currentLevel.questions.length;
    }

    // Générer les dots de progression
    generateProgressDots();

    // Transition vers l'observation
    phaseWelcome.classList.add('fade-out');

    setTimeout(() => {
        phaseWelcome.classList.remove('active', 'fade-out');
        phaseObservation.classList.add('active');

        const timerBar = document.querySelector('.timer-bar');
        if (timerBar) {
            timerBar.style.animation = 'none';
            timerBar.offsetHeight;
            timerBar.style.animation = `timerShrink ${currentLevel.observationTime}s linear forwards`;
        }

        startObservationTimer();
    }, 600);
}

function generateProgressDots() {
    if (!questionProgress) return;

    questionProgress.innerHTML = '';
    for (let i = 0; i < currentLevel.questions.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'question-progress-dot';
        if (i === 0) dot.classList.add('active');
        questionProgress.appendChild(dot);
    }
}

function startObservationTimer() {
    let seconds = currentLevel.observationTime;
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
    const question = currentLevel.questions[currentQuestionIndex];
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
    const question = currentLevel.questions[currentQuestionIndex];
    const selectedImage = question.choices[choiceIndex].image;

    selectedLayers.push(selectedImage);
    currentQuestionIndex++;

    if (currentQuestionIndex < currentLevel.questions.length) {
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
    fondImg.src = currentLevel.fondPiece;
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
    currentLevel = null;

    phaseComparison.classList.remove('active');
    phaseWelcome.classList.add('active');
}

// ============================================
// DÉMARRAGE
// ============================================
document.addEventListener('DOMContentLoaded', initGame);
