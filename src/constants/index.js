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
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  portfolio,
  youtube,
  swiggy,
  tcs,
  java,
  resumebuild,
  netflixgpt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Web3 Development",
    icon: mobile,
  },
  {
    title: "Open Source Contribution",
    icon: creator,
  },
  {
    title: "Automation",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date:"February 2023 - Present",
    points: [
      "Implemented various RESTful APIs in NestJS to facilitate efficient communication with a MongoDB database.",
      "Developed and implemented JavaScript and jQuery functions for frontend interactions, including AJAX calls to fetch API results and populate table views. Ensured seamless user experience through error handling, form validation, and resolution of multiple bugs, enhancing overall application stability and usability.",
      "Optimized frontend rendering by implementing lazy loading of table data using AJAX pagination, reducing initial page load times by 40% and improving overall application performance and responsiveness.",
      "Javascript,Nest.js,Jquery,MongoDB,Azure kubernetes,Jira,Gitlab"
    ],
  },
  {
    title: "Power Bi Developer / Data Analyst",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "March 2021 - February 2023",
    points: [
      "Doing assessment of the various metrics in power bi report before publishing it in premium capacity.",
      "Maintaining Power Bi workspaces using Capacity Metrics App.",
      "Communicating with clients to solve there various issues related to Power Bi like refresh not working,many to many relation in report and many other tasks.",
      "Automated the task of monitoring new created report in workspace and sending mail to respective workspace owner using Microsoft Power Automate.",
      "PowerBi,Azure,Power Automate."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description: "Created a 3D Website using Three Js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJs Fiber",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/SAHIL250499/SAHIL250499.github.io",
    live_code_link: "https://sahil250499.github.io/",
  },
  {
    name: "Netflix GPT",
    description:
      "Web application that gets Movie data from TMDB API and also integrated GPT Api so user can search for the movie by prompt and get the movies from TMDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux ToolKit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "GPT API",
        color: "blue-text-gradient",
      },
    ],
    image: netflixgpt,
    source_code_link: "https://github.com/SAHIL250499/netflix-gpt",
    live_code_link: "https://netflix-gpt-react.netlify.app/",
  },
  {
    name: "Resume Builder",
    description:
      "I have used vanilla Javascript, Content Editable to make user edit content and also used Tailwind CSS.Also, to generate PDF from javascript I have used html2pdf",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
    ],
    image: resumebuild,
    source_code_link:
      "https://github.com/SAHIL250499/ResumeGenerator-Vanilla-Javascript-Without-Login-",
    live_code_link: "https://resume-builder-javascript.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
