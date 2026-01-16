// ============================================
// CONFIGURATION DES NIVEAUX
// ============================================

// LEVEL 1 - Tableau original (3 questions - Mode Essai)
const LEVEL1 = {
    name: "Mode Essai",
    title: "L'Enfant au toton",
    author: "Jean Siméon Chardin",
    observationTime: 10,
    fondPiece: "assets/sans-element.png",
    vraiTableau: "assets/tableau-final.jpg",
    questions: [
        {
            text: "La fille portait-elle un ruban ?",
            correctIndex: 0,
            choices: [
                { label: "Oui", image: "assets/fille-avec-ruban.png" },
                { label: "Non", image: "assets/fille-sans-ruban.png" }
            ]
        },
        {
            text: "Combien de tableaux y avait-il au mur ?",
            correctIndex: 1,
            choices: [
                { label: "Deux", image: "assets/version-2tableaux.png" },
                { label: "Trois", image: "assets/version-3tableaux.png" }
            ]
        },
        {
            text: "De quelle couleur était l'ours sur la caisse?",
            correctIndex: 1,
            choices: [
                { label: "Marron", image: "assets/ours-noir.png" },
                { label: "Blanc", image: "assets/ours-blanc.png" }
            ]
        }
    ]
};

// LEVEL 2 - Tableau Eugène Buland (12 questions)
const LEVEL2 = {
    name: "Tableau Buland",
    title: "Les héritiers",
    author: "Jean-Eugène Buland",
    observationTime: 15,
    fondPiece: "assets/level2/fond-vide.jpg",
    vraiTableau: "assets/level2/tableau-complet.jpg",
    questions: [
        {
            text: "Quelle était la couleur des rideaux ?",
            correctIndex: 0,
            choices: [
                { label: "Noir", image: "assets/level2/q1-rideaux-noir.png" },
                { label: "Blanc", image: "assets/level2/q1-rideaux-blanc.png" },
                { label: "Rouge", image: "assets/level2/q1-rideaux-rouge.png" }
            ]
        },
        {
            text: "De quelle couleur est le poster accroché sur le mur du fond ?",
            correctIndex: 0,
            choices: [
                { label: "Orange", image: "assets/level2/q2-poster-orange.png" },
                { label: "Jaune", image: "assets/level2/q2-poster-jaune.png" },
                { label: "Rouge", image: "assets/level2/q2-poster-rouge.png" }
            ]
        },
        {
            text: "Quel est le nombre de personnes dans la pièce ?",
            correctIndex: 0,
            choices: [
                { label: "5", image: "assets/level2/q3-personnes-5.png" },
                { label: "4", image: "assets/level2/q3-personnes-4.png" }
            ]
        },
        {
            text: "Combien de personnes vous regardent ?",
            correctIndex: 0,
            choices: [
                { label: "1", image: "assets/level2/q9-regard-1.png" },
                { label: "2", image: "assets/level2/q9-regard-2.png" },
                { label: "Aucun", image: "assets/level2/q9-regard-aucun.png" }
            ]
        },
        {
            text: "Combien de personnes possèdent un couvre-chef ?",
            correctIndex: 0,
            choices: [
                { label: "3", image: "assets/level2/q4-couvrechef-2.png" },
                { label: "2", image: "assets/level2/q4-couvrechef-1.png" },
                { label: "1", image: "assets/level2/q4-couvrechef-0.png" }
            ]
        },
        {
            text: "Quel élément retrouve-t-on sur le rebord de la fenêtre ?",
            correctIndex: 0,
            choices: [
                { label: "Une bouteille", image: "assets/level2/q5-fenetre-bouteille.png" },
                { label: "Une bougie", image: "assets/level2/q5-fenetre-bougie.png" },
                { label: "Un livre", image: "assets/level2/q5-fenetre-livre.png" }
            ]
        },
        {
            text: "Quel objet est présent sur le coin de la table ?",
            correctIndex: 0,
            choices: [
                { label: "Une boîte d'allumettes", image: "assets/level2/q6-table-allumettes.png" },
                { label: "Un pot d'encre", image: "assets/level2/q6-table-encre.png" },
                { label: "Aucun des deux", image: "assets/level2/q6-table-aucun.png" }
            ]
        },
        {
            text: "Quel est le nombre de bougies sur la table ?",
            correctIndex: 0,
            choices: [
                { label: "2", image: "assets/level2/q7-bougies-2.png" },
                { label: "1", image: "assets/level2/q7-bougies-1.png" },
                { label: "3", image: "assets/level2/q7-bougies-3.png" }
            ]
        },
        {
            text: "Combien de cadres y a-t-il au sol ?",
            correctIndex: 0,
            choices: [
                { label: "2", image: "assets/level2/q-miroirs-2.png" },
                { label: "1", image: "assets/level2/q-miroirs-1.png" },
                { label: "3", image: "assets/level2/q-miroirs-3.png" }
            ]
        },
        {
            text: "Quelle est la couleur de l'intérieur du seau ?",
            correctIndex: 0,
            choices: [
                { label: "Cuivre", image: "assets/level2/q8-seau-cuivre.png" },
                { label: "Argenté", image: "assets/level2/q8-seau-argente.png" },
                { label: "Dorée", image: "assets/level2/q8-seau-doree.png" }
            ]
        },
        {
            text: "Couleur de l'intérieur du coffre sur la gauche ?",
            correctIndex: 0,
            choices: [
                { label: "Rouge", image: "assets/level2/q9-etagere-rouge.png" },
                { label: "Jaune", image: "assets/level2/q9-etagere-jaune.png" },
                { label: "Orange", image: "assets/level2/q9-etagere-orange.png" }
            ]
        },
        {
            text: "Quel objet l'homme à droite du tableau tient-il dans sa main ?",
            correctIndex: 0,
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
let score = 0; // Nombre de bonnes réponses
let ws = null; // WebSocket connection

// ============================================
// ÉLÉMENTS DOM
// ============================================
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
const paintingTitle = document.getElementById('painting-title');
const paintingAuthor = document.getElementById('painting-author');

// ============================================
// FONCTIONS DU JEU
// ============================================
function initGame() {
    // Connexion WebSocket
    connectWS();

    // Réinitialiser l'état du jeu
    currentQuestionIndex = 0;
    selectedLayers = [];
    score = 0;

    // Récupérer le niveau depuis l'URL ou utiliser LEVEL1 par défaut
    const urlParams = new URLSearchParams(window.location.search);
    const levelNumber = parseInt(urlParams.get('level')) || 1;

    currentLevel = levelNumber === 2 ? LEVEL2 : LEVEL1;

    // Initialiser les images
    imgObservation.src = currentLevel.vraiTableau;
    imgOriginal.src = currentLevel.vraiTableau;

    // Mettre à jour les infos du tableau
    if (paintingTitle) paintingTitle.textContent = currentLevel.title;
    if (paintingAuthor) paintingAuthor.textContent = currentLevel.author;

    // Mettre à jour le nombre total de questions
    if (totalQuestionsSpan) {
        totalQuestionsSpan.textContent = currentLevel.questions.length;
    }

    // Générer les dots de progression
    generateProgressDots();

    // Démarrer le timer
    const timerBar = document.querySelector('.timer-bar');
    if (timerBar) {
        timerBar.style.animation = 'none';
        timerBar.offsetHeight;
        timerBar.style.animation = `timerShrink ${currentLevel.observationTime}s linear forwards`;
    }

    startObservationTimer();
}

function generateProgressDots() {
    if (!questionProgress) return;

    questionProgress.innerHTML = '';
    for (let i = 0; i < currentLevel.questions.length; i++) {
        // Ajouter le point
        const dot = document.createElement('div');
        dot.className = 'chain-dot';
        if (i === 0) dot.classList.add('active');
        questionProgress.appendChild(dot);

        // Ajouter le lien entre les points (sauf après le dernier)
        if (i < currentLevel.questions.length - 1) {
            const link = document.createElement('div');
            link.className = 'chain-link';
            questionProgress.appendChild(link);
        }
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

    // Envoyer les choix au téléphone via WebSocket
    if (ws && ws.readyState === WebSocket.OPEN) {
        const choiceLabels = question.choices.map(c => c.label);
        ws.send(JSON.stringify({
            type: 'QUESTION_START',
            questionIndex: currentQuestionIndex + 1,
            totalQuestions: currentLevel.questions.length,
            questionText: question.text,
            choices: choiceLabels
        }));
    }

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
    const dots = document.querySelectorAll('.chain-dot');
    const links = document.querySelectorAll('.chain-link');

    dots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index < currentQuestionIndex) {
            dot.classList.add('completed');
        } else if (index === currentQuestionIndex) {
            dot.classList.add('active');
        }
    });

    links.forEach((link, index) => {
        link.classList.remove('completed');
        if (index < currentQuestionIndex) {
            link.classList.add('completed');
        }
    });
}

function selectChoice(choiceIndex) {
    const question = currentLevel.questions[currentQuestionIndex];
    const selectedImage = question.choices[choiceIndex].image;

    // Vérifier si la réponse est correcte
    if (choiceIndex === question.correctIndex) {
        score++;
    }

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

    // Afficher le score en pourcentage
    const totalQuestions = currentLevel.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const scoreValueEl = document.getElementById('score-value');
    if (scoreValueEl) {
        scoreValueEl.textContent = percentage + '%';
    }

    // Notifier le téléphone que le jeu est terminé
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
            type: 'GAME_END',
            level: currentLevel === LEVEL1 ? 1 : 2,
            score: percentage
        }));
    }

    // Mettre à jour les boutons de fin
    updateEndGameButtons();
}

function updateEndGameButtons() {
    const actionsContainer = document.getElementById('end-game-actions');
    if (!actionsContainer) return;

    actionsContainer.innerHTML = '';

    // Bouton de replay
    const replayBtn = document.createElement('button');
    replayBtn.className = 'replay-btn';
    replayBtn.textContent = 'Rejouer le niveau';
    replayBtn.onclick = () => window.location.reload();
    actionsContainer.appendChild(replayBtn);

    // Si on est au niveau 1, ajouter le bouton pour passer au niveau 2
    if (currentLevel === LEVEL1) {
        const nextLevelBtn = document.createElement('button');
        nextLevelBtn.className = 'replay-btn next-level-btn';
        nextLevelBtn.textContent = 'Passer au niveau suivant';
        nextLevelBtn.style.background = '#693CFF';
        nextLevelBtn.style.color = '#fff';
        nextLevelBtn.style.boxShadow = '0 10px 30px rgba(105, 60, 255, 0.3)';
        nextLevelBtn.onclick = () => navigateTo('game.html?level=2');
        actionsContainer.appendChild(nextLevelBtn);
    }

    // Si on est au niveau 2, ajouter le bouton pour revenir à l'accueil
    if (currentLevel === LEVEL2) {
        const homeBtn = document.createElement('button');
        homeBtn.className = 'replay-btn home-btn';
        homeBtn.textContent = 'Retour à l\'accueil';
        homeBtn.style.background = 'transparent';
        homeBtn.style.border = '2px solid #693CFF';
        homeBtn.style.color = '#693CFF';
        homeBtn.style.boxShadow = 'none';
        homeBtn.onclick = () => navigateTo('index.html');
        actionsContainer.appendChild(homeBtn);
    }
}

function restartGame() {
    // Retourner à la page d'accueil avec transition
    navigateTo('index.html');
}

// ============================================
// WEBSOCKET
// ============================================
function connectWS() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = protocol + '//' + window.location.host;

    console.log('Connexion WS vers:', wsUrl);
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('Connecté au serveur WS');
    };

    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);

            // Navigation depuis le téléphone
            if (data.type === 'NEXT_PAGE' && data.target) {
                console.log('Navigation vers:', data.target);
                navigateTo(data.target);
                return;
            }

            // Réponse du téléphone
            if (data.type === 'ANSWER' && phaseConstruction.classList.contains('active')) {
                console.log('Réponse reçue du téléphone:', data.value);
                const currentQ = currentLevel.questions[currentQuestionIndex];
                if (currentQ && data.value < currentQ.choices.length) {
                    selectChoice(data.value);
                }
            }
        } catch (e) {
            console.error('Erreur message WS:', e);
        }
    };

    ws.onclose = () => {
        console.log('WS déconnecté, tentative de reconnexion...');
        setTimeout(connectWS, 3000);
    };
}

// ============================================
// DÉMARRAGE
// ============================================
document.addEventListener('DOMContentLoaded', initGame);
