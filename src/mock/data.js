import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chetan Kini | SWE', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Chetan Kini',
  subtitle: 'Fullstack Developer | OSS Contributor',
  cta: 'Explore',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey there! I appreciate you swinging by to take a look at my portfolio! My name is Chetan Kini and for around the past 2 years, I've been building and collaborating on software for and with the open source community",
  paragraphTwo: 'While my strengths lie in backend development',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Okra',
    info: 'An extensible toy scripting language',
    info2: '',
    url: '',
    repo: 'https://github.com/cdkini/Okra', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Omni',
    info: 'A distributed version control system',
    info2: '',
    url: '',
    repo: 'https://github.com/cdkini/Omni', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
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
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ckini123',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chetankini1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cdkini/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
