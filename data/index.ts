export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Food Tracking App Using AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "EasyScraper - Google Search Scraper",
    des: "Developed a Python-based tool using Selenium capable of scraping thousands of Google search results daily, automating data collection and reporting processes efficiently.",
    img: "/web_crawler.avif",
    iconLists: ["/selenium.png", "/python.png"],
    link: "https://github.com/IskanderRomdhane/EasyScraper",
  },
  {
    id: 2,
    title: "Leave Management System",
    des: "Built a comprehensive leave and user management platform with React and Spring Boot, incorporating Keycloak for secure authentication and PostgreSQL for data handling.",
    img: "/hrleavemanager.png",
    iconLists: ["/React.png", "/tail.svg", "/Keycloak.png", "/spring.png", "/docker.webp"],
    link: "https://employees-management-ua84.vercel.app/",
  },
  {
    id: 3,
    title: "MediAI - Medical Diagnostic System",
    des: "Implemented an AI-powered medical diagnostic system utilizing machine learning models for accurate disease prediction, leveraging Scikit-learn and data visualization libraries.",
    img: "/MediAi.webp",
    iconLists: ["/pandas.svg", "/python.png", "/scikit.png", "/seaborn.svg"],
    link: "https://github.com/IskanderRomdhane/ML-Medical-Diagnosis",
  },
  {
    id: 4,
    title: "Foody - Food Management Application",
    des: "Developed an interactive food management app integrating food APIs for nutritional insights and AI-powered food recognition to enhance meal tracking experiences.",
    img: "/foody.webp",
    iconLists: ["/React.png", "/spring.png", "/docker.webp", "/tail.svg"],
    link: "https://foody-mx61.vercel.app/",
  }
  
  
];


export const workExperience = [
  {
    id: 1,
    title: "FullStack Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js,Spring Boot and Keycloack.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on Web.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/IskanderRomdhane"
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/iskander-romdhane/"
  },
];
