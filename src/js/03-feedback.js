const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

let savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  savedFormData = JSON.parse(savedFormData);
}

const initialUserData = {
  email: '',
  message: '',
};

let userData = savedFormData || initialUserData;

if (userData.email) {
  emailInput.value = userData.email;
}

if (userData.message) {
  messageInput.value = userData.message;
}

const handleFormInput = throttle(event => {
  userData = {
    ...userData,
    [event.target.name]: event.target.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}, 500);

const handleSubmit = e => {
  e.preventDefault();
  console.log(userData);
  localStorage.removeItem('feedback-form-state');
  userData = initialUserData;
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleSubmit);
