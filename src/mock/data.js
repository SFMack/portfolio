import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Christian Mack | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Christian Mack.',
  subtitle: `I'm a Full Stack Developer.`,
  cta: 'About / Resume',
};

// ABOUT DATA
export const aboutData = {
  img: 'Marin-county.jpg',
  paragraphOne: `I'm formely a Chef in San Francisco, avid gardener, and a Full Stack developer.`,
  paragraphTwo: `I specialize in code optimization and love helping people find solutions to problems. I code in Javascript and most experienced working with React, Node, MongoDB, and Express.`,
  paragraphThree: 'I was raised where I have been every since - the San Francisco Bay Area.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'marketingOgProject.png',
    title: 'Marketing OG Revamp',
    info: 'This project was great.',
    info2: 'And I mean really great.',
    url: 'https://www.marketingog.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chatProject.png',
    title: 'Realtime Chat Application',
    info: 'We bought them tickets we sell.',
    info2: 'Cool as the top of a mountain.',
    url: 'https://hopeful-mccarthy-478463.netlify.com/',
    repo: 'https://github.com/SFMack/MackChat', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'React Projects',
    info: 'This is the third project.',
    info2: 'This is the third project.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
