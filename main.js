const menuIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('#close-icon');
const navBarList = document.querySelectorAll('.navbar-list-mobile li');
const mobilePopupNav = document.querySelector('#mobile-popup');

menuIcon.addEventListener('click', () => {
  mobilePopupNav.classList.toggle('active');
});

navBarList.forEach((i) => {
  i.addEventListener('click', () => {
    mobilePopupNav.classList.toggle('active');
  });
});

closeIcon.addEventListener('click', () => {
  mobilePopupNav.classList.toggle('active');
});

// --------FORM VALIDATION---------- // START

const form = document.getElementById('form');
const small = document.getElementsByTagName('small')[0];
const emailAddress = document.getElementById('email-address');

function validateEmail(input) {
  const emailaddress = input.toString();
  let isLower = false;

  if (emailaddress === emailaddress.toLowerCase() && emailaddress !== '') {
    isLower = true;
  }
  return isLower;
}

form.addEventListener('submit', (event) => {
  if (validateEmail(emailAddress.value)) {
    event.preventDefault();
    small.textContent = '';
  } else {
    small.textContent = 'Please enter email address in small caps.';
    event.preventDefault();
  }
});

// --------FORM VALIDATION---------- // END

// --------LOCAL STORAGE---------- // START

const userData = {};
function saveData(userData) {
  const fullName = document.getElementById('name').value;
  const emailAddress = document.getElementById('email-address').value;
  const message = document.getElementById('message').value;
  userData = {
    fullName,
    email,
    message,
  };
  localStorage.setItem('user', JSON.stringify(userData));
  let dataRecord = [];
  dataRecord = JSON.parse(localStorage.getItem('dataUser'));
  dataRecord.push({
    fullName,
    email,
    message,
  });
  localStorage.setItem('dataUser', JSON.stringify(dataRecord));
}

form.addEventListener('change', () => {
  saveData(userData);
});

window.addEventListener('load', () => {
  JSON.parse(localStorage.user);
});

// --------LOCAL STORAGE---------- // END