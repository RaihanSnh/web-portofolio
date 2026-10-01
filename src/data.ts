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
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Github", icon: "/icons/github.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "Odoo", icon: "/icons/odoo.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "TanStack Query", icon: "/icons/react-query.svg" },
  { name: "Golang", icon: "/icons/golang.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Vue", icon: "/icons/vue.svg" },
  { name: "Nuxt", icon: "/icons/nuxt.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MongoDB", icon: "/icons/mongo.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
]

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    folder: "JavaScript",
    name: "Random Picker",
    thumbnail: "/img/proj1.svg",
    description: "Random Picker web app. Built with native JavaScript and Tailwind CSS. Add multiple names, shuffle, and pick winners with a playful animation.",
    tech: ["JavaScript", "Tailwind"],
    repo: "https://github.com/RaihanSnh/random-picker",
    demo: "https://raihansnh.github.io/random-picker/",
  },
  {
    id: "proj-2",
    folder: "TypeScript",
    name: "ToDo-List",
    thumbnail: "/img/proj2.svg",
    description: "Task manager with categories and filters. Clean TypeScript structure with components and state management.",
    tech: ["TypeScript", "Tailwind"],
    repo: "https://github.com/RaihanSnh/ToDo-List",
  },
  {
    id: "proj-3",
    folder: "JavaScript",
    name: "Invisible TicTacToe",
    thumbnail: "/img/proj3.svg",
    description: "A twist on TicTacToe, the board fades as you play. Fun logic and DOM updates with classic JS.",
    tech: ["JavaScript"],
    repo: "https://github.com/RaihanSnh/Invisible-TicTacToe",
    demo: "https://raihansnh.github.io/Invisible-TicTacToe/",
  },
  {
    id: "proj-4",
    folder: "PHP",
    name: "ujianify",
    thumbnail: "/img/proj4.svg",
    description: "Simple exam/quiz functionality. Server-side rendering and basic CRUD powered by PHP.",
    tech: ["PHP"],
    repo: "https://github.com/RaihanSnh/ujianify",
  },
]

export const SOCIALS: Social = {
  email: "natharaihans@gmail.com",
  github: "https://github.com/RaihanSnh",
  linkedin: "https://www.linkedin.com/in/raihansatyanathahamzah/",
  instagram: "https://instagram.com/raihansnh",
}
