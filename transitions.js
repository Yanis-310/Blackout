// ============================================
// TRANSITIONS DE PAGE SMOOTH
// ============================================

// Fonction pour naviguer avec transition
function navigateTo(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 400);
}

// Ajouter la classe fade-in au chargement
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});
