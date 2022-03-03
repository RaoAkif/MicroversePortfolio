// import {
//   menuIconMobile, menuLinks, openMenu, closeMenu,
// } from './menu.js';

// Popup window functionality
// import { createModal, projects } from './popup.js';

// Start Popup window functionality ------------------------------------->
document.addEventListener("DOMContentLoaded", () => {
  createModal();

  const seeProject = document.querySelectorAll(".see-project");
  const modalWindow = document.querySelector("#modal-window");
  const mobileModal = document.querySelector("#mobile-modal");
  const mobileModalImage = document.querySelector("#mobile-modal-image");
  const mobileModalCloseIcon = document.querySelector(
    "#mobile-modal-close-icon"
  );
  const mobileModalTitle = document.querySelector("#mobile-modal-title");
  const mobileModalTags = document.querySelector("#mobile-modal-tags");
  const mobileModalDescription = document.querySelector(
    "#mobile-modal-description"
  );
  const mobileModalLinks = document.querySelector("#links-project");
  const mobileModalLiveLink = document.querySelector("#live-link");
  const mobileModalLinkSource = document.querySelector("#link-source");

  const closeModal = () => {
    modalWindow.classList.remove("active");
  };

  buttonProject.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "0") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      } else if (button.id === "1") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      } else if (button.id === "2") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      } else if (button.id === "3") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      }
    });
  });

  closeIcon.addEventListener("click", closeModal);
});
// Finish Popup window functionality ------------------------------------->

const projects = [
  {
    title: "Project 1",
    image:
      "https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: {
      tag1: "HTML",
      tag2: "CSS",
      tag3: "JS",
      tag4: "React",
      tag5: "Ruby",
    },
    linkLive: "#",
    linkSource: "#",
  },
  {
    title: "Project 2",
    image:
      "https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_2.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: {
      tag1: "HTML",
      tag2: "CSS",
      tag3: "JS",
      tag4: "React",
      tag5: "Ruby",
    },
    linkLive: "#",
    linkSource: "#",
  },
  {
    title: "Project 3",
    image:
      "https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_3.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: {
      tag1: "HTML",
      tag2: "CSS",
      tag3: "JS",
      tag4: "React",
      tag5: "Ruby",
    },
    linkLive: "#",
    linkSource: "#",
  },
  {
    title: "Project 4",
    image:
      "https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_4.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: {
      tag1: "HTML",
      tag2: "CSS",
      tag3: "JS",
      tag4: "React",
      tag5: "Ruby",
    },
    linkLive: "#",
    linkSource: "#",
  },
  {
    title: "Project 5",
    image:
      "https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_5.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: {
      tag1: "HTML",
      tag2: "CSS",
      tag3: "JS",
      tag4: "React",
      tag5: "Ruby",
    },
    linkLive: "#",
    linkSource: "#",
  },
  {
    title: "Project 6",
    image:
      "https://raw.githubusercontent.com/RaoAkif/Portfolio/Project_Modal/images/portfolio_modal/Portfolio_Projects%20-%20Mobile%20Modal_6.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: {
      tag1: "HTML",
      tag2: "CSS",
      tag3: "JS",
      tag4: "React",
      tag5: "Ruby",
    },
    linkLive: "#",
    linkSource: "#",
  },
];

const Portfolios = document.getElementById("portfolios");

projects.forEach((project, index) => {
  console.log(project.image);
  Portfolios.innerHTML += `
    <div class="portfolio">
        <img class="portfolio-image" src=${
          project.image
        } alt="portfolio_image_${index}" />
        <div class="portfolio-desc">
        <h2 class="project-title">${project.title}</h2>
        <ul class="tags">
        <li class="tag">${project.tags.tag1}</li>
        <li class="tag">${project.tags.tag2}</li>
        <li class="tag">${project.tags.tag3}</li>
        <li class="tag">${project.tags.tag4}</li>
        <li class="tag">${project.tags.tag5}</li>
        </ul>
        <button type="button" id="see-project-${
          index + 1
        }" class="primary-button button-states see-project">See Project</button>
        </div>
    </div>
    `;
});

function createModal() {
  startingPoint.insertAdjacentHTML(
    "afterend",
    `<div id="modal-window">
    <div id="modal">
    <img id="mobile-modal-image" src="./img.png" alt="">
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

seeProject.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button.id === "see-project${index+1}") {
      `<div id="modal-window">
    <div id="modal">
    <img id="mobile-modal-image" src="./img.png" alt="">
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
    }
  });
});
