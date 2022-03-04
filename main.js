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

// ----------------- Popup window functionality ----------------------- START//

const projects = [
  {
    title: 'Project 1: Keeping track of hundreds of components',
    image:
      'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
      tag4: 'React',
      tag5: 'Ruby',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 2: Keeping track of hundreds of components',
    image:
      'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_2.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
      tag4: 'React',
      tag5: 'Ruby',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 3: Keeping track of hundreds of components',
    image:
      'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
      tag4: 'React',
      tag5: 'Ruby',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 4: Keeping track of hundreds of components',
    image:
      'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_4.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
      tag4: 'React',
      tag5: 'Ruby',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 5: Keeping track of hundreds of components',
    image:
      'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_5.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
      tag4: 'React',
      tag5: 'Ruby',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 6: Keeping track of hundreds of components',
    image:
      'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_6.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
      tag4: 'React',
      tag5: 'Ruby',
    },
    linkLive: '#',
    linkSource: '#',
  },
];

const Portfolios = document.querySelector('#portfolios');

projects.forEach((project, index) => {
  Portfolios.innerHTML += `
    <div class='portfolio'>
      <img class='portfolio-image' src=${
        project.image
      } alt='portfolio_image_${index}' />
      <div class='portfolio-desc'>
      <h2 class='project-title'>${project.title}</h2>
      <ul class='tags'>
      <li class='tag'>${project.tags.tag1}</li>
      <li class='tag'>${project.tags.tag2}</li>
      <li class='tag'>${project.tags.tag3}</li>
      <li class='tag'>${project.tags.tag4}</li>
      <li class='tag'>${project.tags.tag5}</li>
      </ul>
      <button type='button' id='see-project-${
        index + 1
      }' class='primary-button button-states see-project'>See Project</button>
    </div>
</div>
`;
});

const seeProject = document.querySelectorAll('.see-project');
const modalWindow = document.querySelector('#modal-window');
function closeModal() {
  modalWindow.removeChild(document.getElementById('modal'));
  modalWindow.classList.toggle('active');
}

for (let i = 0; i < projects.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    const MobileModal = `
      <div id='modal'>
        <img id='mobile-modal-image' src=${projects[i].image} alt=''>
        <img id='mobile-modal-close-icon' src='./images/icons/mobile-modal-close.svg' alt='close icon' ${closeModal} onclick='closeModal()' >
        <h2 id='mobile-modal-title'>${projects[i].title}</h2>
        <ul id='mobile-modal-tags'>
        <li class='tag'>${projects[i].tags.tag1}</li>
        <li class='tag'>${projects[i].tags.tag2}</li>
        <li class='tag'>${projects[i].tags.tag3}</li>
        <li class='tag'>${projects[i].tags.tag4}</li>
        <li class='tag'>${projects[i].tags.tag5}</li>
        </ul>
        <p id='mobile-modal-description'>${projects[i].description}</p>
        <ul id='links-project'>
        <li class='links' id='live-link'><a href=${projects[i].linkLive}>See Live<img class='link-icons' src='./images/icons/see-live.svg' alt=''></a></li>
        <li class='links' id='source-link'><a href=${projects[i].linkSource}>See Source<img class='link-icons' src='./images/icons/see-source.svg' alt=''></a></li>
        </ul>
        </div>`;
    modalWindow.innerHTML = MobileModal;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    modalWindow.classList.toggle('active');
  });
}

// ----------------- Popup window functionality ----------------------- END//

// --------FORM VALIDATION----------

const form = document.getElementById('form');
const small = document.getElementsByTagName('small')[0];
const emailAddress = document.getElementById('email-address');

function validateEmail(input) {
  const address = input.toString();
  let isLower = false;

  if (address === address.toLowerCase()) {
    isLower = true;
  }

  return isLower;
}

form.addEventListener('submit', (event) => {
  if (validateEmail(emailAddress.value)) {
    small.textContent = '';
  } else {
    small.textContent = 'Please enter email address in small caps.';
    event.preventDefault();
  }
});
