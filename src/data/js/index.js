import heroimage from '../../assets/img/hero-image.png';
import portfolio1 from '../../assets/img/portfolios/prototype-planet-burger.png';
import portfolio2 from '../../assets/img/portfolios/ui-planet-burger.png';
import portfolio3 from '../../assets/img/portfolios/coursely-e-course.png';
import portfolio4 from '../../assets/img/portfolios/personal-portfolio.png';

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "about",
    text: "About",
  },
  {
    id: 3,
    path: "exp",
    text: "Experiences",
  },
  {
    id: 4,
    path: "portfolio",
    text: "Portfolios",
  },
  {
    id: 5,
    path: "contact",
    text: "Contact",
  },
];

export const socialIcon = [
  {
    id: 1,
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/sal_seinki/",
  },
  {
    id: 2,
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/seinkiannalesmana/",
  },
  {
    id: 3,
    icon: "fa-brands fa-github",
    link: "https://github.com/Seinki",
  },
]

export const heroImg = [
  {
    id: 1,
    image: heroimage,
  },
];

export const cards = [
  {
    id: 1,
    title: "IT Support",
    icon: "fa-solid fa-computer",
    desc: "To provides technical support and solutions to information technology-related problems to end users globally. Includes customer service, hardware and software troubleshooting, installation, network configuration, and system maintenance.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: "fa-solid fa-code",
    desc: "To design, develop and maintain websites. Involves programming, responsive user interface, and handling site functions, with a focus on understanding user needs, security, and optimal performance that follows industry standards and the latest trends.",
  },
  {
    id: 3,
    title: "Cyber Security",
    icon: "fa-solid fa-shield-halved",
    desc: "To identify and evaluate potential security gaps in computer systems and networks to prevent cyber-attacks. Particularly on penetration testing, attack simulation, risk analysis to identify potential vulnerabilities that can be exploited by attackers.",
  },
];

export const exp = [
  {
    id: 1,
    defaultActiveKey: 0,
    eventKey: 0,
    title: "Ninja Xpress",
    jobDesc: "Warehouse Staff",
    time: "December 2021 - Present",
    desc: [
      {
        id: 1,
        description:
          "Assist in lifting goods (packages) in sacks or not into the warehouse.",
      },
      {
        id: 2,
        description:
          "Assist with the initial scanning of packages using a specialized receipt barcode scanning tool to sort and select by package destination (city/province).",
      },
      {
        id: 3,
        description:
          "Scanning using DWS (Dimension, Weight, and Scanning) machine to get good and correct accuracy of package data based on dimensions, weight and photos of the package.",
      },
      {
        id: 4,
        description:
          "Scan the package and put it into a sack labeled with a special receipt barcode based on the package's destination (city).",
      },
    ],
  },
  {
    id: 2,
    defaultActiveKey: "",
    eventKey: 1,
    title: "Baraka Solution",
    jobDesc: "Junior Web Programmer & IT Support",
    time: "November 2022 - December 2022 (Internship)",
    desc: [
      {
        id: 1,
        description:
          "Assist in creating and developing web applications required by the Company.",
      },
      {
        id: 2,
        description:
          "Create Prototype website design submissions / web forms by conducting research and analyzing user needs and collecting feedback from users, as well as applying HTML, CSS, and JavaScript skills to create prototype website design submissions.",
      },
      {
        id: 3,
        description:
          "Manage source code using GIT & GitHub tools in order to collaborate between teams and manage repositories properly.",
      },
      {
        id: 4,
        description:
          "Conduct tests to ensure the website display is functioning properly.",
      },
      {
        id: 5,
        description:
          "Registering the website to the hosting service and restoring the website data if a problem occurs.",
      },
    ],
  },
  {
    id: 3,
    defaultActiveKey: "",
    eventKey: 2,
    title: "Jati Kopi",
    jobDesc: "Server/Waiter",
    time: "Maret 2020 - November 2021",
    desc: [
      {
        id: 1,
        description:
          "Ensure customers receive friendly and professional service during their visit at the restaurant.",
      },
      {
        id: 2,
        description:
          "Responsible for accurately recording customer orders and communicating them to the kitchen or bar according to procedures.",
      },
      {
        id: 3,
        description:
          "This involves tasks such as cleaning tables, providing clean tableware, and keeping the work area clean to create a clean and comfortable environment.",
      },
      {
        id: 4,
        description:
          "Manage payment transactions accurately, provide bills to customers, and give change in a timely manner.",
      },
    ],
  },
];

export const portfolio = [
  {
    id: 1,
    img: portfolio1,
    title: "UI/UX Planet Burger",
    desc: "Implementation of the project task of creating a planet burger website UI during an internship at Baraka Solution",
    link: "https://www.figma.com/proto/YvxnkuoZ278fq4YZXrPMCv/Tugas-Project-UI-(RubicWeb---Seinki)?node-id=1-2&scaling=scale-down",
  },
  {
    id: 2,
    img: portfolio2,
    title: "Frontend Planet Burger",
    desc: "Implementation of the project task of creating a Frontend UI for planet burger during an internship at Baraka Solution",
    link: "https://github.com/Seinki/Project-Implementasi-Skill-Web-PlanetBurger-",
  },
  {
    id: 3,
    img: portfolio3,
    title: "CourseLy - E-Course",
    desc: "An e-learning website project called CourseLy to practice using the React Vite framework.",
    link: "https://github.com/Seinki/coursely-web-course",
  },
  {
    id: 4,
    img: portfolio4,
    title: "Personal Portfolios",
    desc: "This personal web portfolio will continue to be developed for the better in the future. Thank you for visiting :)",
    link: "",
  },
];
