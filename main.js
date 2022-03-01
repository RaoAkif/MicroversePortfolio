const menuIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('#close-icon');
const navBarList = document.querySelectorAll('.navbar-list-mobile li');
const mobilePopupNav = document.querySelector('#mobile-popup');

menuIcon.addEventListener('click', () => {
    mobilePopupNav.classList.toggle('active');
});

navBarList.forEach((i) => {
    i.addEventListener('click', () => {
        mobilePopupNav.classList.remove('active')
    })
})

closeIcon.addEventListener("click", () => {
    mobilePopupNav.classList.toggle("active");
});
  