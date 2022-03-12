// hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  hamburger.classList.remove('active');
}));

// Speaker profiles
const speakers = [
  {
    name: 'Profile 1',
    img: 'images/profile-1.png',
    degree: 'Computer Science degree in Oxford University',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Profile 2',
    img: 'images/profile-2.png',
    degree: 'Computer Science degree in Oxford University',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Profile 3',
    img: 'images/profile-3.png',
    degree: 'Self-Taught Software Engineer',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Profile 4',
    img: 'images/profile-4.png',
    degree: 'Computer Science degree in Oxford University',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Profile 5',
    img: 'images/profile-5.png',
    degree: 'Computer Science degree in Oxford University',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Profile 6',
    img: 'images/profile-6.png',
    degree: 'Computer Science degree in Oxford University',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Btn = document.getElementsByClassName('btn-mobile');
const Btn1 = document.getElementsByClassName('btn-mobile1');
const featuredSpeaker = document.querySelector('.featured-speaker');
const speakerSection = document.createElement('div');
speakerSection.classList.add('speakers-content');

function speakerSectionMobile(number) {
  featuredSpeaker.appendChild(speakerSection);
  speakerSection.innerHTML = `
                <div class="underline-content">
                <h3 class="f-speakers">Featured Speakers</h3>
                 <div class="line"></div>
                </div>
                <div class="speakers-content-mobile">
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                </div>
                <div class="btn-mobile">
                <p>See more</p>
                <a><i class="far fa-chevron-down"></i></a>
                </div>
                </div>
`;
}
speakerSectionMobile(0);

function speakerSectionMobileClick(number) {
  speakerSection.style.display = 'block';
  featuredSpeaker.appendChild(speakerSection);
  speakerSection.innerHTML = `
                <div class="underline-content">
                <h3>Featured Speakers</h3>
                <div class="line"></div>
                </div>
                <div class="speakers-content-mobile">
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p class="speakers-description">${speakers[number].description}</p>
                </div>
                </div>
                </div>
                <div class="btn-mobile btn-mobile1">
                <p>See Less</p>
                <a><i class="far fa-chevron-up"></i></a>
                </div>
                </div>
`;
}

Btn[0].addEventListener('click', () => {
  speakerSectionMobileClick(0);
  Btn1[0].addEventListener('click', () => {
    speakerSectionMobile(0);
  });
});

const speakerSectionDesktop = document.createElement('div');
speakerSectionDesktop.classList.add('speakers-content-global');

function speakerSectionGlobal(number) {
  featuredSpeaker.appendChild(speakerSectionDesktop);
  speakerSectionDesktop.innerHTML = `
                <div class="underline-content">
                <h3>Featured Speakers</h3>
                <div class="line"></div>
                </div>
                <div class="speakers-content-desktop">
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number += 1].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number].description}</p>
                </div>
                </div>
                </div>
                </div>
`;
}
speakerSectionGlobal(0);