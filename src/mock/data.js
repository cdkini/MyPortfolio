import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chetan Kini | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
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
    "Hey there! My name is Chetan Kini and for the past 2 years, I've been building open source software and collaborating with others to work towards a more equitable, knowledgable developer community.",
  paragraphTwo:
    'Although my formal education is in accounting, I caught the coding bug early in my career and have gradually pivoted towards software engineering. While my primary interests lie in backend development, I have experience with the entire stack, working in Python, Go, Java, JavaScript/TypeScript and frameworks such as ReactJS and Flask.',
  paragraphThree:
    "I'm driven by solving complex, technical problems and am always seeking new challenges to help me hone my craft. If you'd like to learn more about my background, please see my resume and projects below.",
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
      'Looking to better understand language interpretation/compilation, I decided to try my hand at designing and implementing my own programming language from the ground up. Although the language is largely procedural, it includes features to facilitate object oriented programming.',
    url: 'https://repl.it/@ChetanKini/OkraPlayground',
    repo: 'https://github.com/cdkini/Okra', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'omni.png',
    title: 'Omni',
    info: 'A CLI version control system written in Java.',
    info2:
      "As someone that was a bit too reliant on memorizing Git workflows, I sought to better understand the software and its internals by recreating it. Including standard DVCS functionality such as committing, branching, merging, and rebasing, this project taught me Git's internal object model while reinforcing concepts such as serialization and hashing.",
    url: 'https://repl.it/@ChetanKini/OmniPlayground',
    repo: 'https://github.com/cdkini/Omni', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'audiotherapy',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'career_bot.png',
    title: 'CareerBot',
    info: 'A Discord bot used to track job postings from Indeed.com. Written in Python.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cdkini.png',
    title: 'and more!',
    info: 'Check out my GitHub for further information!',
    info2:
      "Whether it be building dev tools, writing APIs, or contributing to open-source, I'm always looking to use my skills to tackle varied technical projects!",
    url: 'https://github.com/cdkini',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working together?',
  btn: "Let's talk!",
  email: 'chetan.d.kini@gmail.com',
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
