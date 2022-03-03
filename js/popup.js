export const projects = [
  {
    title: 'Project 1',
    image: 'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 2',
    image: 'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 3',
    image: 'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 4',
    image: 'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 5',
    image: 'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_5.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
    },
    linkLive: '#',
    linkSource: '#',
  },
  {
    title: 'Project 6',
    image: 'https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_6.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: {
      tag1: 'HTML',
      tag2: 'CSS',
      tag3: 'JS',
    },
    linkLive: '#',
    linkSource: '#',
  },
];


export function createModal() {
  startingPoint.insertAdjacentHTML(
    "afterend",
    `<div id="modal-window">
    <div id="mobile-modal">
    <div>
    <img id="mobile-modal-image" src="./images/portfolio_modal/Portfolio_Projects - Mobile Modal_1" alt="">
    <img id="mobile-modal-close-icon" src="./images/icons/mobile-modal-close.svg" alt="close icon">
    </div>
    <h2 id="mobile-modal-title"></h2>
    <ul id="mobile-modal-tags">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>Ruby</li>
    <li>React</li>
    </ul>
    <p id="mobile-modal-description"></p>
    <ul id="links-project">
    <li class="links" id="live-link">See Live<img class="link-icons" src="./see-live.svg" alt=""></li>
    <li class="links" id="link-source">See Source<img class="link-icons" src="./see-source.svg" alt=""></li></ul>
    </div>
    </div>`
  );
}



