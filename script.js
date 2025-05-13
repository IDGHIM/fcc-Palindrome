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

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === '') {
    alert('Please input a value');
    return;
  }

  if (isPalindrome(text)) {
    result.textContent = `"${text}" est un palindrome.`;
  } else {
    result.textContent = `"${text}" n'est pas un palindrome.`;
  }
});
