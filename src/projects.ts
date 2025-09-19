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
        description: 'I created this project early on in my Mountainland Technical College Web Developement course to practice css.',
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
        description: 'I created this project early on in my Mountainland Technical College Web Developement using scss and tailwind css. Demonstrates an ability to use CSS and CSS libraries',
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
        title: 'To Do List App',
        description: 'This to do list was created using vanilla Javascript',
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
        title: 'Golf Score App',
        description: 'This golf score app is written with vanilla Javascript. It pulls golf course data from an API.',
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
        title: 'React Game App',
        description: 'This React app contains several playable games. It displays my ability to code complex logic systems and demonstrates my mastery of all basic React hooks.',
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
        description: 'This is a registration app I built with a team. Allows users to create an account, build a schedule, and allows admins to edit student data. Demonstrates ability for me to collaborate with others',
        hostedLink: 'https://capstone-co5w.onrender.com/',
        githubLink: 'https://github.com/Ash-mp3/capstone',
        technologies: [
            technologies.React,
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS,
            technologies.Nodejs,
            technologies.SQL
        ],
        img: null
    },
    {
        title: 'Angular Movie API',
        description: 'I built this website with a small team. Allows users to rate and comment on their favorite movies. Demonstrates ability to work on a team.',
        githubLink: 'https://github.com/Ash-mp3/angular-movie-api',
        technologies: [
            technologies.React,
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS,
            technologies.Nodejs,
            technologies.Firebase
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
        title: 'Angular Wiki',
        description: 'Full stack wiki application. Allows for page creation with internal links, sanitizes page page contents to ensure security, allows for file uploads to display images. Demonstrates a mastery of Node.js and Angular.',
        githubLink: 'https://github.com/AndersonBillss/Angular-wiki',
        technologies: [
            technologies.Angular,
            technologies.TypeScript,
            technologies.HTML,
            technologies.CSS,
            technologies.Nodejs,
            technologies.Mongodb
        ],
        img: null
    },
    {
        title: 'Trivia Website',
        description: 'Trivia website for a ward game night. Pulls from an API for most questions but supports custom questions as well. Ensures no repeat custom questions are asked.',
        githubLink: 'https://github.com/AndersonBillss/trivia-website',
        hostedLink: 'https://wardtrivia.netlify.app/',
        technologies: [
            technologies.Angular,
            technologies.TypeScript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'Angular NASA Website',
        description: "I use NASA's API to display the NASA image of the day for any date.",
        githubLink: 'https://github.com/AndersonBillss/angular-nasa-api',
        hostedLink: 'https://nasa-image-site.netlify.app/',
        technologies: [
            technologies.Angular,
            technologies.TypeScript,
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
            technologies.TypeScript,
            technologies.HTML,
            technologies.CSS
        ],
        img: null
    },
    {
        title: 'BYU Web Programming Startup',
        description: 'This is a full stack application that allows you to play several games with friends. Demonstrates my ability to effectively build a full-stack application using React and Node.js.',
        githubLink: 'https://github.com/AndersonBillss/startup',
        hostedLink: 'https://startup.webprogramming260startup.click',
        technologies: [
            technologies.React,
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS,
            technologies.Nodejs,
            technologies.Mongodb
        ],
        img: null
    },
]