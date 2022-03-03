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

// --------FORM VALIDATION----------

const form = document.getElementById('form');
const small = document.getElementsByTagName('small')[0];
const name = document.getElementById('name');
const email = document.getElementById('email-address');
const description = document.getElementById('description');

function validateEmail(input) {
  const address = input.toString();
  let isLower = false;

  if (address === address.toLowerCase()) {
    isLower = true;
  }

  return isLower;
}

// ---------LOCAL STORAGE-----------// START

const formData = {
  name: form.elements.name.value,
  email: form.elements.name.value,
  description: form.elements.name.value,
};

form.addEventListener('submit', (event) => {
  if (validateEmail(email.value)) {
    small.textContent = '';
  } else {
    small.textContent = 'Please enter email address in small caps.';
    event.preventDefault();
  }
  localStorage.setItem('formData', JSON.stringify(formData));
});

const displayData = () => {
  const { name, email, description } = JSON.parse(localStorage.getItem('formData'));
  // form.elements.name.value = name;
  // form.elements.email.value = email;
  // form.elements.description.value = description;
};

displayData();

// ---------LOCAL STORAGE-----------// END
