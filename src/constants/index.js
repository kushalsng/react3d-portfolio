import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jft,
  quadb,
  threejs,
  howdy,
  cryptoanalysis,
  buyout
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'MERN Enthusiast',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Problem Solver',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Jellyfish Technologies',
    icon: jft,
    iconBg: '#000',
    date: 'May 2023 - Present',
    points: [
      "Worked on Konarkpro.com, a timetracking application, using technologies such as EJS view engine, React, Sails.js, Node.js, Electron.js, SCSS, and Docker.",
      "Improved website performance by reducing load time by 2000 ms through the migration of server-side EJS web pages to client-side React pages.",
      "Optimized desktop application build size, reducing it from 75mb to 60mb.",
      "Developed a reusable script for efficient organization of data stored in AWS S3 buckets, resulting in faster data retrieval.",
      "Handled all aspects of the project independently, including frontend, backend, and desktop application development.",
      "Contributed to other projects like Assessmart, an Online Coding Test Platform."
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Jellyfish Technologies',
    icon: jft,
    iconBg: '#000',
    date: 'November 2022 - April 2023',
    points: [
      'Contributed on a live project and worked on EJS view engine and sails.js',
      'Made small frontend and full stack projects to practice and learn thoroughly about fundamentals of web development',
      'Interacted with other peers and seniors who provided with resources to work on in real-world scenarios',
      'Learned basics of various different frameworks like NEST.js, NEXT.js, Sails.js.',
    ],
  },
  {
    title: 'Backend Web Developer Intern',
    company_name: 'QuadB Technologies',
    icon: quadb,
    iconBg: '#fff',
    date: 'June 2021 - October 2021',
    points: [
      'Worked on a live course selling e-commerce website with more than 5000 active users',
      'Created 100+ new rest APIs including analytical APIs and improved the response time of numerous existing slow APIs resulting in loading time reduction by 27%.',
      'Overall reduced the initial loading time of the website by 200ms',
      'Collaborated with frontend engineers and provided them with APIs and resolved any query or confusion with effective communication',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Howdy Chat App',
    description:
      'Web-based responsive social platform that allows users interact with each other, create groups to make a collective plans. Backed with seamless features like typing and emoji keyboard to improve the overall experience. One can reply to or send multiple type of messages like, text, audio, image or any other type',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'chakraui',
        color: 'pink-text-gradient',
      },
      {
        name: 'lottie',
        color: 'blue-text-gradient',
      },
    ],
    image: howdy,
    source_code_link: 'https://github.com/kushalsng/howdy',
  },
  {
    name: 'Crypto Analysis',
    description:
      'Web-based responsive cryptocurrency tracking website built using React. It allows users to view current prices and information about various cryptocurrencies. Also, users can authenticate using custom sign in or Google authentication, add coins to a watchlist, with all data being stored in a Firebase database.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'materialui',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: cryptoanalysis,
    source_code_link: 'https://github.com/kushalsng/crypto-analysis',
  },
  {
    name: 'Buy Out',
    description:
      "Built a secure ecommerce platform with login/logout functionality. Utilized bcrypt.js for password encryption and cookies for token management. Integrated messaging stored in the database for communication. Designed an intuitive UI with ReactJS's Material UI. Deployed on a reliable hosting platform for accessibility.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'materialui',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'blue-text-gradient',
      },
    ],
    image: buyout,
    source_code_link: 'https://github.com/kushalsng/eCommerceWebApp',
  },
];

export { services, technologies, experiences, testimonials, projects };
