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
const fullName = document.getElementById('name');
const emailAddress = document.getElementById('email-address');
const message = document.getElementById('message');

let formData = {
  name: '',
  email: '',
  message: '',
};

if (window.localStorage.getItem('formDatakeys') !== null) {
  formData = JSON.parse(window.localStorage.getItem('formDatakeys'));
}

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
    small.textContent = '';
    formData.name = fullName.value;
    formData.email = email.value;
    formData.message = message.value;
    window.localStorage.setItem('formDatakeys', JSON.stringify(formData));
  } else {
    small.textContent = 'Please enter email address in small caps.';
    event.preventDefault();
  }
});

// fullName.value = formData.name;
// emailAddress.value = formData.email;
// message.value = formData.message;

// --------FORM VALIDATION---------- // END

//---------LOCAL STORAGE-----------// STAR

// ---------LOCAL STORAGE-----------// END
