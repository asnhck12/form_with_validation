// document.addEventListener("DOMContentLoaded", function() {
function validateEmail() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
      email.setCustomValidity('Invalid email address');
      emailError.textContent = 'Invalid email address';
    } else {
      email.setCustomValidity('');
      emailError.textContent = '';
    }
  }

  function validateCountry() {
    const country = document.getElementById('country');
    const countryError = document.getElementById('countryError');

    if (country.value.trim() === '') {
      country.setCustomValidity('Country is required');
      countryError.textContent = 'Country is required';
    } else {
      country.setCustomValidity('');
      countryError.textContent = '';
    }
  }

  function validatePostCode() {
    const postCode = document.getElementById('postCode');
    const postCodeError = document.getElementById('postCodeError');

    if (!postCode.validity.valid) {
      postCodeError.textContent = 'Invalid Post Code';
    } else {
      postCodeError.textContent = '';
    }
  }

  function validatePassword() {
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    if (password.value.length < 8) {
      password.setCustomValidity('Password must be at least 8 characters long');
      passwordError.textContent = 'Password must be at least 8 characters long';
    } else {
      password.setCustomValidity('');
      passwordError.textContent = '';
    }
  }

  function validatePasswordConfirmation() {
    const password = document.getElementById('password');
    const passwordConfirmation = document.getElementById('passwordConfirmation');
    const passwordConfirmationError = document.getElementById('passwordConfirmationError');

    if (passwordConfirmation.value !== password.value) {
      passwordConfirmation.setCustomValidity('Passwords do not match');
      passwordConfirmationError.textContent = 'Passwords do not match';
    } else {
      passwordConfirmation.setCustomValidity('');
      passwordConfirmationError.textContent = '';
    }
  }

  function submitForm() {
    validateEmail();
    validateCountry();
    validatePostCode();
    validatePassword();
    validatePasswordConfirmation();

    const form = document.getElementById('registrationForm');
    if (form.checkValidity()) {
      alert('High five! Form submitted successfully.');
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  }

  document.getElementById('email').addEventListener('input', validateEmail);
  document.getElementById('country').addEventListener('input', validateCountry);
  document.getElementById('postCode').addEventListener('input', validatePostCode);
  document.getElementById('password').addEventListener('input', validatePassword);
  document.getElementById('passwordConfirmation').addEventListener('input', validatePasswordConfirmation);
// });