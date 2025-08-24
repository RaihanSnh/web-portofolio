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

export type Tool = { name: string; icon: string; since?: string }

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
    id: 1,
    title: "Song Title",
    artist: "Artist Name",
    src: "/audio/song1.mp3",
    albumArt: "/img/album1.svg",
    length: "3:45",
    lyric: "you're hidin in the background but you want to be found",
  },
]

export const TOOLS: Tool[] = [
  { name: "React", icon: "/icons/react.svg", since: "2019" },
  { name: "Next.js", icon: "/icons/nextjs.svg", since: "2020" },
  { name: "TypeScript", icon: "/icons/typescript.svg", since: "2020" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", since: "2020" },
  { name: "Docker", icon: "/icons/docker.svg", since: "2021" },
  { name: "Git", icon: "/icons/git.svg", since: "2018" },
  { name: "Vite", icon: "/icons/vite.svg", since: "2021" },
  { name: "Node.js", icon: "/icons/node.svg", since: "2019" },
  { name: "Express", icon: "/icons/express.svg", since: "2019" },
  { name: "Redux", icon: "/icons/redux.svg", since: "2020" },
  { name: "Zustand", icon: "/icons/zustand.svg", since: "2022" },
  { name: "TanStack Query", icon: "/icons/react-query.svg", since: "2022" },
  { name: "Jest", icon: "/icons/jest.svg", since: "2020" },
  { name: "Cypress", icon: "/icons/cypress.svg", since: "2021" },
  { name: "Playwright", icon: "/icons/playwright.svg", since: "2023" },
  { name: "Vitest", icon: "/icons/vitest.svg", since: "2022" },
  { name: "Prisma", icon: "/icons/prisma.svg", since: "2022" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg", since: "2020" },
  { name: "MongoDB", icon: "/icons/mongo.svg", since: "2020" },
  { name: "AWS", icon: "/icons/aws.svg", since: "2022" },
  { name: "Figma", icon: "/icons/figma.svg", since: "2019" },
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
  email: "hello@example.com",
  github: "https://github.com/abc",
  linkedin: "https://www.linkedin.com/in/abc",
  instagram: "https://instagram.com/abc",
}


