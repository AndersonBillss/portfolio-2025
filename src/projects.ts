import { technologies } from "./technologies"

export interface project {
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
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'To Do List App',
        description: 'This robust to do list app was created using vanilla javaScript.',
        hostedLink: 'https://andersonbillss.github.io/toDoListApp/',
        githubLink: 'https://github.com/AndersonBillss/toDoListApp',
        technologies: [
            technologies.JavaScript,
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
            technologies.JavaScript,
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
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS,
            technologies.Nodejs
        ],
        img: null
    },
    {
        title: 'Godot Planets',
        description: 'This application will allow you to edit and share planets you build.',
        githubLink: 'https://github.com/AndersonBillss/godot_planets',
        technologies: [
            technologies.Godot,
            technologies.CS
        ],
        img: null
    },
    {
        title: 'Godot 2D Platformer',
        description: 'This is an ongoing passion project to create my own 2D game.',
        githubLink: 'https://github.com/AndersonBillss/godot_seeds_of_will',
        technologies: [
            technologies.Godot,
            technologies.CS
        ],
        img: null
    },
    {
        title: 'C++ Game Engine',
        description: 'I used OpenGL and C++ to create a code-based game engine.',
        githubLink: 'https://github.com/AndersonBillss/cpp-engine-practice',
        technologies: [
            technologies.CPP,
        ],
        img: null
    },
    {
        title: 'Trivia Website',
        description: 'I created a trivia website for a ward game night.',
        githubLink: 'https://github.com/AndersonBillss/trivia-website',
        hostedLink: 'https://wardtrivia.netlify.app/',
        technologies: [
            technologies.Angular,
            technologies.Typescript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'Angular NASA Website',
        description: "I use NASA's API to display the NASA image of the day for your birthdate.",
        githubLink: 'https://github.com/AndersonBillss/angular-nasa-api',
        hostedLink: 'https://nasa-image-site.netlify.app/',
        technologies: [
            technologies.Angular,
            technologies.Typescript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'BYU Web Programming Startup',
        description: 'This is a full stack application that allows you to play games with friends.',
        githubLink: 'https://github.com/AndersonBillss/startup',
        hostedLink: 'https://startup.webprogramming260startup.click',
        technologies: [
            technologies.React,
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'BYU Book of Mormon Class Final Project',
        description: 'This website shows a simulation of the pride cycle.',
        githubLink: 'https://github.com/AndersonBillss/REL_A_275_pride_cycle_website',
        hostedLink: 'https://pridecycle.netlify.app',
        technologies: [
            technologies.Angular,
            technologies.Typescript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
]