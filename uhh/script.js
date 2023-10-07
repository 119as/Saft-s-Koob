const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const emailInput = document.getElementById('email-input');
const emailInputLabel = document.querySelector('label[for="email-input"]');

registerLink.addEventListener('click', () =>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () =>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

emailInput.addEventListener('focus', () => {
    emailInputLabel.style.top = '-5px'; // Move the label up when focused
});

emailInput.addEventListener('blur', () => {
    // Check if the email input is empty, if so, move the label back down
    if (emailInput.value === '') {
        emailInputLabel.style.top = '50%';
    }
});
