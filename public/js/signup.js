const signupFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passwordConfirm = document.querySelector('#password-confirm').value.trim();
  if (password === passwordConfirm) {
    if (name && email) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  } else {
    alert("Passwords do not match, try again!")
  }
}
  
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);