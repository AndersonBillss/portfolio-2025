import { technologies } from "./technologies"

interface project {
    title: string,
    description: string,
    hostedLink?: string,
    demoLink?: string,
    githubLink: string,
    technologies: technologies[],
    img: null
}

export const projects: project[] = [
    {
        title: 'MiHealth project',
        description: 'I created this project early on in my Web Developement course to practice css.',
        hostedLink: 'https://andersonbillss.github.io/MiHealth/',
        githubLink: 'https://github.com/AndersonBillss/MiHealth',
        technologies: [
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'Tailwind Netflix project',
        description: 'I created this project using scss and tailwind css.',
        hostedLink: 'https://andersonbillss.github.io/tailwindProject/',
        githubLink: 'https://github.com/AndersonBillss/tailwindProject',
        technologies: [
            technologies.HTML,
            technologies.CSS,
            technologies.Tailwind
        ],
        img: null
    },
    {
        title: 'Golf Score App',
        description: 'This is a golf score app.  It pulls from an API using vanilla javaScript.',
        hostedLink: 'https://andersonbillss.github.io/Golf-Score-App/',
        githubLink: 'https://github.com/AndersonBillss/Golf-Score-App',
        technologies: [
            technologies.javaScript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'To Do List App',
        description: 'This robust to do list app was created using vanilla javaScript',
        hostedLink: 'https://andersonbillss.github.io/toDoListApp/',
        githubLink: 'https://github.com/AndersonBillss/toDoListApp',
        technologies: [
            technologies.javaScript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'React Game App',
        description: 'This is a react app with several games.  It displays my ability to code complex logic systems.',
        hostedLink: 'https://react-game-project-dxrwofvh4-anderson-bills-projects.vercel.app/',
        githubLink: 'https://github.com/AndersonBillss/react-game-project',
        technologies: [
            technologies.React,
            technologies.javaScript,
            technologies.HTML,
            technologies.CSS,
        ],
        img: null
    },
    {
        title: 'Registration App',
        description: 'This is a robust registration app built using react. It uses a postgresql database and incorperates proper security protocols. I worked on this project in a group.',
        hostedLink: 'https://capstone-co5w.onrender.com/',
        githubLink: 'https://github.com/Ash-mp3/capstone',
        technologies: [
            technologies.React,
            technologies.javaScript,
            technologies.HTML,
            technologies.CSS,
            technologies.Nodejs
        ],
        img: null
    },
]