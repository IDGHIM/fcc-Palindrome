const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(text) {
  const cleaned = text
    .toLowerCase()
    .normalize("NFD")                     // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, '')      // Supprime les diacritiques (accents, cédilles)
    .replace(/[^a-z0-9]/gi, '');          // Garde uniquement les lettres et chiffres
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Fonction pour gérer la validation du texte (clic du bouton ou appui sur Entrée)
function validatePalindrome() {
  const text = input.value.trim();

  // Vérifie si la chaîne contient au moins une lettre
  if (!/[a-zA-Z]/.test(text)) {
    alert('Veuillez entrer une chaîne contenant au moins une lettre.');
    return;
  }

  if (text === '') {
    alert('Please input a value');
    return;
  }

  if (isPalindrome(text)) {
    result.textContent = `"${text}" est un palindrome.`;
  } else {
    result.textContent = `"${text}" n'est pas un palindrome.`;
  }
}

// Événement de clic sur le bouton
button.addEventListener('click', validatePalindrome);

// Événement d'appui sur la touche Entrée
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    validatePalindrome();
  }
});
