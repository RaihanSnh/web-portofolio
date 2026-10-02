export type Profile = {
  name: string
  role: string
  tagline: string
  photo: { src: string; width: number; height: number; alt: string }
}

export type Song = {
  id: number
  title: string
  artist: string
  src: string
  albumArt: string
  length?: string
  lyric?: string
}

export type Tool = { name: string; icon: string }

export type Project = {
  id: string
  folder: string
  name: string
  thumbnail: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
}

export type Social = {
  email?: string
  github?: string
  linkedin?: string
  instagram?: string
}

export type Experience = {
  id: string
  organization: string
  employment: string
  period: string
  location: string
  roles: string[]
  color: "yellow" | "pink" | "blue" | "green"
}

export const PROFILE: Profile = {
  name: "Raihan Satya Natha Hamzah",
  role: "Software Engineer",
  tagline: "Caffeine-fueled Coder",
  photo: {
    src: "/placeholder/me.jpeg",
    width: 420,
    height: 540,
    alt: "me",
  },
}

export const SONGS: Song[] = [
  {
    id: 2,
    title: "Want To Be Close",
    artist: "Azumi Takahashi.",
    src: "/music/Want%20To%20Be%20Close%20-Reload-.mp3",
    albumArt: "/albumcover/persona3.jpg",
    length: "2:14",
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: "infinys",
    organization: "PT Infinys System Indonesia",
    employment: "Internship",
    period: "2024",
    location: "On-site",
    roles: ["Software Developer · Research And Development Intern"],
    color: "green",
  },
  {
    id: "bara",
    organization: "BARA TEKNOVASI",
    employment: "Contract",
    period: "2024",
    location: "On-site",
    roles: ["Full-stack Developer"],
    color: "yellow",
  },
  {
    id: "freelance",
    organization: "Freelance",
    employment: "Freelance",
    period: "2025",
    location: "Remote",
    roles: ["Web Developer"],
    color: "pink",
  },
  {
    id: "bncc",
    organization: "Bina Nusantara Computer Club",
    employment: "Student Organization",
    period: "2025 — 2026",
    location: "Hybrid",
    roles: ["Research And Development Manager", "Backend TPM Mentor", "Research And Development"],
    color: "blue",
  },
]

export const TOOLS: Tool[] = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Github", icon: "/icons/github.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Odoo", icon: "/icons/odoo.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Golang", icon: "/icons/golang.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Vue", icon: "/icons/vue.svg" },
  { name: "Nuxt", icon: "/icons/nuxt.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
]

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    folder: "TypeScript",
    name: "ComicStore",
    thumbnail: "/project/comicstore.png",
    description: "Online store for an independent comic, offering both digital and physical editions. Customers can purchase PDF comics, with digital download links automatically sent via email after payment. Physical editions are shipped through an integrated delivery service, while the payment gateway enables instant checkout without manual verification.",
    tech: ["TypeScript"],
  },
  {
    id: "proj-2",
    folder: "TypeScript",
    name: "LnT BNCC Showcase Front-End",
    thumbnail: "/project/lnt-bncc-showcase.png",
    description: "BNCC LnT Showcase is a responsive project showcase platform built with React, TypeScript, and Tailwind CSS, designed for BNCC LnT students to showcase their final projects, share technical work, and connect with peers across regions.",
    tech: ["TypeScript"],
    repo: "https://github.com/RaihanSnh/bncc-lnt-showcase-fe",
  },
  {
    id: "proj-3",
    folder: "TypeScript",
    name: "Ringkasan Learn",
    thumbnail: "/project/ringkasan-learn.png",
    description: "An interactive learning website designed to help students understand Euclids Elements in a more engaging and visual way. Using JSXGraph, it combines clear explanations with interactive demonstrations, step-by-step geometric constructions, and visualizations, making complex mathematical concepts easier to follow and explore.",
    tech: ["TypeScript"],
  },
  {
    id: "proj-4",
    folder: "TypeScript",
    name: "PathSnap",
    thumbnail: "/project/pathsnap.png",
    description: "Pathsnap is an interactive travel platform that helps users discover hidden gems, explore local destinations, and create personalized travel routes. It combines destination guides, smart recommendations, and an interactive map to create a more engaging and personalized travel experience.",
    tech: ["TypeScript"],
    repo: "https://github.com/RaihanSnh/pathsnap",
  },
  {
    id: "proj-5",
    folder: "JavaScript",
    name: "Illuminar Website",
    thumbnail: "/project/illuminar.png",
    description: "An immersive promotional website for Illuminar Faire, a Live Action Role-Playing (LARP) event. It combines fantasy inspired visuals, interactive UI, responsive design, animation, and audio to bring the events world to life while showcasing its lore, activities, and upcoming events.",
    tech: ["JavaScript"],
    demo: "https://illuminar-website.vercel.app/",
  },
  {
    id: "proj-6",
    folder: "JavaScript",
    name: "Invisible Tic Tac Toe",
    thumbnail: "/project/invisible-tic-tac-toe.png",
    description: "Invisible Tic Tac Toe is an interactive web based game that puts a unique twist on the classic Tic Tac Toe experience. It features multiple difficulty modes, dynamic game states, and a minimal interface design.",
    tech: ["JavaScript"],
    repo: "https://github.com/RaihanSnh/invisible-tictactoe",
    demo: "https://raihansnh.github.io/Invisible-TicTacToe",
  },
  {
    id: "proj-7",
    folder: "JavaScript",
    name: "Kanban To-do",
    thumbnail: "/project/kanban-todo.png",
    description: "Kanban Todo App is a lightweight task management web application built with vanilla JavaScript. It provides an interactive Kanban board for organizing tasks across Todo, In Progress, and Done stages, with features for creating, editing, searching, and managing task deadlines.",
    tech: ["JavaScript"],
    repo: "https://github.com/RaihanSnh/kanban-todo-vanilla",
    demo: "https://raihansnh.github.io/kanban-todo-vanilla/",
  },
  {
    id: "proj-8",
    folder: "JavaScript",
    name: "AllRandom Picker",
    thumbnail: "/project/random-picker.png",
    description: "AllRandom is a web based randomization tool designed to simplify fair group assignments and random selections. It features group randomization, gender-balanced grouping, and randomizer with automatic removal, providing a simple and efficient interface for managing names and creating randomized results.",
    tech: ["JavaScript"],
    repo: "https://github.com/RaihanSnh/random-picker",
    demo: "https://raihansnh.github.io/random-picker/public/index.html",
  },
  {
    id: "proj-9",
    folder: "JavaScript",
    name: "Stock Opname Front-End",
    thumbnail: "/project/stock-opname.png",
    description: "A responsive inventory management interface built with React. It provides an intuitive dashboard for monitoring products, warehouse data, and stock levels, with features such as search, stock status tracking, and organized inventory views.",
    tech: ["JavaScript"],
    repo: "https://github.com/RaihanSnh/stock-opname-fe",
  },
  {
    id: "proj-10",
    folder:"PHP",
    name: "SisfoBekangAD",
    thumbnail: "/project/sisfobekangad.png",
    description: "SisfoBekangAD (Sistem Informasi Pembekalan Angkutan TNI AD) is a web based application designed to manage and streamline the logistics and supply chain operations of the Indonesian Army (TNI AD). It provides a centralized platform for tracking, managing, and optimizing the distribution of supplies, equipment, and resources within the military organization.",
    tech: ["PHP"],
  },
  {
    id: "proj-11",
    folder: "PHP",
    name: "Metria",
    thumbnail: "/project/metria.png",
    description: "Metria is a sustainable fashion social-commerce platform that combines e-commerce with creative self-expression. It features accurate size recommendations, outfit mix-and-match, and a digital wardrobe, while supporting local sellers through a fair order distribution system. Built with Laravel, Metria aims to make fashion shopping more personalized, sustainable, and community-driven.",
    tech: ["PHP"],
    repo: "https://github.com/RaihanSnh/metria",
  },
  {
    id: "proj-12",
    folder: "PHP",
    name: "Ujianify",
    thumbnail: "/project/ujianify.png",
    description: "An online exam platform designed to provide a secure and controlled testing environment for students. The system requires students to keep their camera on and remain in fullscreen mode throughout the exam, while also providing digital attendance through an online signature.",
    tech: ["PHP"],
    repo: "https://github.com/RaihanSnh/ujianify",
  },
  {
    id: "proj-13",
    folder: "PHP",
    name: "Stock Opname Back-End",
    thumbnail: "/project/stock-opname.png",
    description: "A Laravel based backend system for managing inventory and stock operations. It handles product data, warehouse management, stock availability, authentication, and business logic through a structured API, providing a reliable foundation for the inventory management platform.",
    tech: ["PHP"],
    repo: "https://github.com/RaihanSnh/stock-opname-be",
  },
  {
    id: "proj-14",
    folder: "Go",
    name: "LnT BNCC Showcase Back-End",
    thumbnail: "/project/lnt-bncc-showcase.png",
    description: "Go based REST API that powers the BNCC LnT Showcase platform, handling application logic, data management, routing, and database operations. It uses PostgreSQL with structured migrations and separates the system into handlers, routes, models, and utility layers for maintainability and scalability.",
    tech: ["Go"],
    repo: "https://github.com/RaihanSnh/bncc-lnt-showcase-be",
  },
]

export const SOCIALS: Social = {
  email: "natharaihans@gmail.com",
  github: "https://github.com/RaihanSnh",
  linkedin: "https://www.linkedin.com/in/raihansatyanathahamzah/",
  instagram: "https://instagram.com/raihansnh",
}
