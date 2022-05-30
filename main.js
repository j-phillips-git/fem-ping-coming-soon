const emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailErr = document.getElementById('emailErr');
const emptyEmail = document.getElementById('emptyEmail');

form.addEventListener('submit', (e) => {
  if(emailInput.value.match(emailMatch)) {
    emailErr.style.display = 'none';
    emptyEmail.style.display = 'none';

  } else if (emailInput.value === '') {
    emptyEmail.style.display = 'block';
    emailErr.style.display = 'none';
    emailInput.style.border = '1px solid #FF5466';
    e.preventDefault();

  } else {
    emailErr.style.display = 'block';
    emptyEmail.style.display = 'none';
    emailInput.placeholder = 'example@email.com';
    emailInput.style.border = '1px solid #FF5466';
    e.preventDefault();
  }
});


