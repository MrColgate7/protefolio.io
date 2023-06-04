let lang = {
    'en': {
        'title': 'Welcome to my portfolio',
        'intro': 'I am a professional web developer with a passion for problem-solving.',
    },
    'fr': {
        'title': 'Bienvenue sur mon portfolio',
        'intro': 'Je suis un développeur web professionnel avec une passion pour la résolution de problèmes.',
    }
}

let currentLang = 'en';

document.getElementById('lang').addEventListener('click', function() {
    let elements = document.querySelectorAll('[id]');
    elements.forEach((element) => {
        element.textContent = lang[currentLang][element.id];
    });
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
});
