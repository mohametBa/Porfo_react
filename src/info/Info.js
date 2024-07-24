import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import image from '../img/image.png'

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Mohamet",
    lastName: "BA",
    initials: "dev",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'nice to meet you'
        },
        {
            emoji: '🌎',
            text: 'based in Toulouse'
        },
        {
            emoji: "💼",
            text: "Concepteur développeur d'application"
        },
        {
            emoji: "📧",
            text: "mohametba31@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Je suis développeur d'applications web et mobiles. J'ai étudié à Paris à l'ISCOD, où j'ai obtenu le diplôme de Concepteur Développeur d'Applications. Je suis convaincu que ce métier est l'un des plus prometteurs pour l'avenir.",
    skills: {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    formation: [
        {
            date: "Depuis avril 2022",
            institution: "ISCOD Toulouse, France",
            description: "Conception - Développement d'application Web-Mobile - 2022/2024"
        },
        {
            date: "Depuis juin 2023",
            institution: "Coursera Toulouse",
            description: "Certification Spécialisation React Native Meta"
        },
        {
            date: "Depuis 2019",
            institution: "Université Toulouse III - Paul Sabatier Toulouse, France",
            description: "L3 Electronique, Energie électrique et Automatique / Ingénierie en soin de santé"
        },
        {
            date: "De 2016 à 2017",
            institution: "Université Toulouse III",
            description: "PACES (Première Année Commune aux Etudes de Santé)"
        }
    ],
    experience: [
        {
            date: "Depuis octobre 2023",
            company: "LID Technologie Toulouse, France",
            description: "Alternant développeur application Android"
        },
        {
            date: "D'octobre 2022 à septembre 2023",
            company: "LDHCLIC Paris",
            description: "Alternant développeur web"
        },
        {
            date: "Depuis décembre 2022",
            company: "LDHCLIC Paris",
            description: "Alternant"
        },
        {
            date: "Depuis septembre 2019",
            company: "ADECCO GROUPE FRANCE Toulouse, France",
            description: "Interimaire"
        },
        {
            date: "De 2017 à juin 2022",
            company: "Le Louchebem Toulouse, France",
            description: "Commis de cuisine"
        },
        {
            date: "De juillet 2020 à septembre 2020",
            company: "Mode and Co Toulouse, France",
            description: "Assistant maintenance informatique"
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://github.com/mohametBa",
            source: "https://github.com/mohametBa",
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://github.com/mohametBa",
            source: "https://github.com/mohametBa",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://github.com/mohametBa",
            source: "https://github.com/mohametBa",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://github.com/mohametBa",
            source: "https://github.com/mohametBa",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://github.com/mohametBa",
            source: "https://github.com/mohametBa",
            image: mock5
        },
        {
            title: "Project 6",
            live: "https://github.com/mohametBa",
            source: "https://github.com/mohametBa",
            image: image
        }
    ]
}
