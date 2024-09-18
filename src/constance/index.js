export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#Works",
  },
  {
    id: 4,
    name: "Contact",
    href: "#Contact",
  },
];

export const myProjects = [
  {
    title: "Image Recognition App",
    desc: "A web app that uses a postgres database and a react frontend and uses the clarify api to detect objects in images",
    subdesc:
      "Built in React.js, it uses the Clarifai API to detect faces in images. It also uses a PostgreSQL database to store user information and passwords and keep track of records.",
    href: "https://image-recognition-o57s.onrender.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/ai-logo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Postgres",
        path: "assets/postgresql-logo.png",
      },
      {
        id: 3,
        name: "Clarifai",
        path: "assets/clarifai-logo.png",
      },
    ],
  },
  {
    title: "Lettuce Watch",
    desc: "Software and Hardware solution for monitoring and controlling hydroponic systems.",
    subdesc:
      "A plant forecasting system for a hydroponic system. It keeps track of the sensor values and stores them in order to produce a forecast of growth days for the crop",
    href: "https://github.com/JjayFabor/LettuceRealTimeMonitoringSystem",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/lettuce-logo.png",
    logoStyle: {
      backgroundColor: "#2f7236",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python-logo.png",
      },
      {
        id: 2,
        name: "MySQL",
        path: "assets/mysql-logo.png",
      },
      {
        id: 3,
        name: "Jupyter",
        path: "/assets/Jupyter_Logo.png",
      },
    ],
  },
  {
    title: "Cat Pal",
    desc: "A simple cat web that uses robo hash and react js",
    subdesc:
      "Build in React.js it uses robo hash api to generate random cat images",
    href: "https://quouou.github.io/CatPal/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/pngtree-cat-head-logo-design-png-image_12290551-449883366.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Robohas",
        path: "assets/image_2024-09-18_025043374-removebg-preview.png",
      },
    ],
  },
  {
    title: "Foodies",
    desc: "A web dev app that users can share their favorite food recipes",
    subdesc: "Built on Next.Js 14 it uses Mysql to store recipes ",
    href: "https://github.com/Quouou/First-NextJS",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/food-logo.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next-js-logo.png",
      },
      {
        id: 2,
        name: "MySql",
        path: "assets/mysql-logo.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
