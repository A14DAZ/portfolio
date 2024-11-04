import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Ahmed ALKHULAQI",
  initials: "SA",
  url: "https://sultanalasadi.vercel.app/",
  location: "Saudi Arabia - Riyadh",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  description:
    "Frontend Developer with a passion for creating seamless user experiences. I turn coffee into code and ideas into responsive web applications.",

  summary:
    "I am a dedicated and versatile professional with a background in both front end development and accounting. With a bachelor's degree from Istanbul Nisantasi University and hands-on experience at Blulogix and Hermes Triangle, I possess strong technical skills in web development (HTML, CSS, JavaScript, React.js) and comprehensive knowledge of accounting practices. My multilingual abilities and proficiency in project management, teamwork, and customer service enable me to adapt and excel in diverse environments. I am committed to continuous learning and contributing effectively to team success.",
  avatarUrl: "/ahmed.jpg",
  skills: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "Microsoft office",
    "Git",
    "GitHub",
    "Material UI",
    "JIRA",
    "Figma",
    "Responsive Design",
    "Agile Methodology",
  ],
  softSkills: [
    "Problem-solving",
    "Critical Thinking",
    "Time Management",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Creativity",
    "Fast Learner",
    "Self-Motivated",
    "Detail-Oriented",
    "Arabic",
    "English",
    "Turkish",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "azd1422ahmed@gmail.com",
    tel: "+966591456299",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/A14DAZ",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-alkhulaqi-9a1259253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdcoyGp6sQv6TUeZYB3DPiQ%3D%3D",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/+966591456299",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "azd1422ahmed@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BluLogix",
      href: "#",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Front-end Developer",
      logoUrl: "/blulogix-logo--small-2020.png",
      start: "Feb 2024",
      end: "Jun 2024",
      description:
        "Developed dynamic web applications and interfaces using React. Handled API integration for seamless data flow. Used Git for code management and JIRA for task management and time tracking.",
    },
    {
      company: "Hermes Triangle",
      href: "#",
      badges: [],
      location: "Riyadh, Saudi Arabia",
      title: "Accountant ",
      logoUrl: "/hermes.png",
      start: "2022",
      end: "2024",
      description:
        "Experienced in providing diverse accounting services, including the review and reconciliation of monthly and annual accounts. Skilled in preparing financial reports, ensuring compliance with accounting regulations, and using accounting software. Effective communicator, fostering departmental cohesion. Committed to delivering professional and accurate accounting services.",
    },
  ],
  education: [
    {
      school: "İstanbul Nisantasi University",
      href: "https://www.nisantasi.edu.tr/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/nisantasi.jpeg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "E-commerce-2024",
      href: "https://shopcoovibe.vercel.app/",
      dates: "2024",
      active: false,
      description:
        "A comprehensive e-commerce platform built with React.js, CSS Bootstrap, MUI, and various other libraries and tools. Implemented user authentication, routing, form management, API integration, and dynamic content.",
      technologies: [
        "React.js",
        "CSS Bootstrap",
        "MUI",
        "Auth Kit",
        "React Router",
        "React Hook Form",
        "Axios",
        "React Slick",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopcoovibe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shop.png",
      video: "",
    },
    {
      title: "fecund",
      href: "https://fecund-jap.com/",
      dates: "2024",
      active: false,
      description:
        "An e-commerce platform for selling phone accessories, built with HTML, CSS, JavaScript, Bootstrap, Swiper.js, and more. Features include API integration, and dynamic content.",

      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Swiper.js"],
      links: [
        {
          type: "Website",
          href: "https://fecund-jap.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fecund.png",
      video: "",
    },

    {
      title: "GPT-3 Landing Page",
      href: "https://gpt3-stm.netlify.app/",
      dates: " 2023",
      active: false,
      description:
        "Developed a landing page for an AI Customer Support Chatbot, utilizing the latest GPT models to automatically respond to customer support tickets. Built with React, Tailwind CSS, and JavaScript for a modern and responsive design.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://gpt3-stm.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chat.png",
      video: "",
    },
    {
      title: "Groco Store",
      href: "https://63c07647197af872b5d61273--charming-donut-3c499b.netlify.app/",
      dates: " 2023",
      active: false,
      description:
        "Developed a responsive e-commerce website for a grocery store, featuring product listings and a blog page. Built with HTML, CSS, Bootstrap, and Swiper.js to ensure a modern and user-friendly interface.",
      technologies: ["HTML", "CSS", "Bootstrap", "Swiper.js"],
      links: [
        {
          type: "Website",
          href: "https://63c07647197af872b5d61273--charming-donut-3c499b.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gori.png",
      video: "",
    },
    {
      title: "Ellaboutique",
      href: "#", //https://ellaboutiquetr.com
      dates: " 2024",
      active: false,
      description:
        "Developed a responsive e-commerce website for showcasing clothes, featuring product listings. Built with HTML, CSS, Bootstrap, and Swiper.js to ensure a modern and user-friendly interface.",
      technologies: ["HTML", "CSS", "Bootstrap", "Swiper.js"],
      links: [
        {
          type: "Website",
          href: "#", //https://ellaboutiquetr.com
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ela.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Game Development Camp",
      by: "BILIŞIM VADISI TEKNOPARK YÖNETICI A.Ş",
      credential: "33075465352099",
      dates: "September 30 /2022",
      location: "Istanbul, Turkey",
      description:
        "Joined a game development camp where we created a mobile app that uses augmented reality to deliver interactive bedtime stories.",

      image: "/bili.png",
      mlh: "",
      links: [],
    },
    {
      title: "Face Recognition",
      dates: "2022",
      location: "Istanbul, Turkey",
      description:
        "Developed a face recognition application that identifies faces from images using Python, OpenCV, TensorFlow, NumPy, and pandas for data analysis.",
      image: "/face.jpg",
      mlh: "",
      links: [],
    },
  ],
} as const;
