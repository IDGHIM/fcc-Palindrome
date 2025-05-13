const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(text) {
  const cleaned = text
    .toLowerCase()
    .replace(/[^a-z0-9\u00C0-\u024F]/gi, ''); 

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
    result.textContent = `${text} is a palindrome.`;
  } else {
    result.textContent = `${text} is not a palindrome.`;
  }
});
