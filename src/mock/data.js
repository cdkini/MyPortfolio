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
    img: 'okra.jpg',
    title: 'Okra',
    info: 'A toy scripting language written in Go.',
    info2:
      'Looking to better understand language interpretation/compilation, I decided to embark on the daunting journey of designing and implementing my own programming language from the ground up. Although the language is largely procedural, it includes features to facilitate object oriented programming.',
    url: 'https://repl.it/@ChetanKini/OkraPlayground',
    repo: 'https://github.com/cdkini/Okra', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'omni.png',
    title: 'Omni',
    info: 'A distributed version control system written in Java.',
    info2:
      "As someone that was a bit too reliant on memorizing Git workflows, I sought to better understand the software and its internals by recreating it.Including standard DVCS functionality such as committing, branching, merging, and rebasing, this project taught me Git's internal object model, as well as reinforce concepts such as serialization and hashing.",
    url: 'https://repl.it/@ChetanKini/OmniPlayground',
    repo: 'https://github.com/cdkini/Omni', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CareerBot',
    info: 'A Discord bot used to track job postings from Indeed.com.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'RCSnake',
    info: 'An implementation of the classic arcade game in Python and PyGame.',
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
