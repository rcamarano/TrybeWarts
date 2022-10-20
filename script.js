const btnHeder = document.querySelector('#btn-header');

function alerta() {
  const email = document.querySelector('#email');
  const emailValue = email.value;

  const senha = document.querySelector('#password');
  const senhaValue = senha.value;

  if (emailValue === 'tryber@teste.com' && senhaValue === '123456') {
    window.alert('Olá, Tryber!');
  } else { window.alert('Email ou senha inválidos.'); }
}
btnHeder.addEventListener('click', alerta);

const getChecked = document.querySelector('#agreement');
const getSubmitBtn = document.getElementById('submit-btn');
getSubmitBtn.disabled = true;
getSubmitBtn.style.opacity = '50%';

function verifyAgreement() {
  getChecked.addEventListener('click', () => {
    if (getChecked.checked) {
      getSubmitBtn.removeAttribute('disabled');
      getSubmitBtn.style.opacity = '100%';
    } else {
      getSubmitBtn.setAttribute('disabled', true);
      getSubmitBtn.style.opacity = '50%';
    }
  });
}
verifyAgreement();

const countadorCaractere = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

function counter() {
  textarea.addEventListener('input', () => {
    const caracteres = 500 - textarea.value.length;
    countadorCaractere.innerHTML = caracteres;
  });
}
counter();
