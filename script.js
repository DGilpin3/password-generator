function gen() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=?';
  const len = document.getElementById('length').value || 10;
  let pw = '';

  for (let i = 0; i < len; i++) {
    pw += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById('pw').value = pw;
}

function copyPw() {
  const pwField = document.getElementById('pw');
  pwField.select();
  pwField.setSelectionRange(0, 99999); // mobile-friendly
  navigator.clipboard.writeText(pwField.value);
  alert('Password copied to clipboard!');
}
