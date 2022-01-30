import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    years: new Date().getFullYear() - 2020,
    initial: 'PT-BR',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('EN').create({
            menuProjects: "Projects",
            workPersonal:"Personal Project",
            workProfessional: "Professional Project",
            menuTec: "Technologies",
            menuAbout: "About",
            menuContact: "Contact",
            moreBtn: "Click to more details",
            emailSuccessText:"Sent with success",
            emailFailText:"There was an error, please try again",
            sendBtn:"Send",
            accessBtn: "Access",
            closeBtn: "Close",
            technologiesDescriptionTitle: "Technologies<br>and<br>Experiences",
            technologiesDescriptionStart: "S",
            technologiesDescription: 'ince the beginning as a web developer, approximately {years} years ago, where since then I have improved my skills with JavaScript/Vue.js and PHP/Laravel. I developed for companies like Unimed and Gespag using Vue.js and Vuetify, acquiring knowledge of the entire ecosystem of the framework such as VueRouter and Vuex.',
            aboutDescriptionTitle: "About Me",
            aboutDescriptionStart: "H",
            aboutDescription: "ey everyone,I'm Arthur Ayres, Web developer. I have always loved computing, games and programming and I decided to turn that love into my best skills. Currently studying Systems Analysis and Development at Faculdade Centro Universitário Mario Pontes Jucá - UMJ. My first development internship was at Hospital Unimed Maceió for 4 months where I developed skills with Vue.js and Laravel. My second internship at Agill Products and Services for 8 months where I worked with Vue.js, Laravel, mysql, AdminLTE 2 (template). I'm currently working at Gespag as a front-end developer using Vue.js and Vuetify.",
            contactDescriptionTitle: "Contact me",
            contactText: "Contact me through social networks, or if you prefer send a message through the form below",
            descriptionTitle: "Description",
            technologiesTitle: "Technologies used",
            social_network: {
                summary: `Social network layout based on Facebook`,
                description: `Project developed for study and self improvement based on Facebook layout.`,
                technologiesUsed: "I used the Vue.js Framework along with the Vuetify css library set.",
                technologies: "VUE, VUETIFY",
            },
            portalContribuinte: {
                summary: `Website for some northeastern city halls`,
                description: `Site developed to meet demands, such as "iptu", requirements, issuance of certificates, among others from city halls in the northeast of Brazil.`,
                technologiesUsed: "I worked as FullStack developing the front-end screens using AdminLTE 2 as the project base and Vue.js, HTML, CSS, JS and jquery, also developing the back-end with the creation of APIs using Laravel, PHP and Mysql for the database.",
                technologies: "Based on AdminLTE 2 | HTML, CSS, JS, VUE, LARAVEL",
            },
            gespag: {
                summary: `Developing new front-end layout`,
                description: `Sales management system with dobby rental.`,
                technologiesUsed: "Acting as Front-end, I used Vue.js and Vuetify to remodel the original layout and develop new features.",
                technologies: "VUE, VUETIFY",
            },
            emediar: {
                summary: `Developing Full system`,
                description: `Developing Full system`,
                technologiesUsed: "",
                technologies: "PHP, CodeIgniter",
            },
        }),

        new MLanguage('PT-BR').create({
            menuProjects: "Projetos",
            workPersonal:"Projeto Pessoal",
            workProfessional: "Projeto Profissional",
            menuTec: "Tecnologias",
            menuAbout: "Sobre",
            menuContact: "Contato",
            moreBtn: "Clique para mais detalhes",
            emailSuccessText:"Enviado com sucesso",
            emailFailText:"Ocorreu um erro, tente novamente",
            sendBtn:"Enviar",
            accessBtn: "Acessar",
            closeBtn: "Fechar",
            technologiesDescriptionTitle: "Tecnologias e<br> Experiências",
            technologiesDescriptionStart: "D",
            technologiesDescription: 'esde o inicio como desenvolvedor web, a aproximadamente {years} anos, onde desde então aprimorei minhas habilidades com JavaScript/Vue.js e PHP/Laravel. Desenvolvi Para empresas como Unimed e Gespag utilizando Vue.js e Vuetify adquirindo conhecimento de todo o ecosistema do framework como o VueRouter e Vuex.',
            aboutDescriptionTitle: "Sobre Min",
            aboutDescriptionStart: "O",
            aboutDescription: "lá a todos, sou Arthur Ayres, desenvolvedor Web. Sempre amei computação, jogos e programação e decidi transformar esse amor em minhas melhores habilidades. Atualmente cursando Análise e Desenvolvimento de Sistemas na Faculdade Centro Universitário Mario Pontes Jucá - UMJ. Meu primeiro estágio de desenvolvimento foi no Hospital Unimed Maceió por 4 meses onde desenvolvi habilidades com Vue.js e Laravel. Meu segundo estágio na Agill Products and Services por 8 meses onde trabalhei com Vue.js, Laravel, mysql, AdminLTE 2 (template). Atualmente trabalho na Gespag como desenvolvedor front-end usando Vue.js e Vuetify.",
            contactDescriptionTitle: "Contate-me",
            contactText: "Entre em contato comigo pelas redes sociais, ou se preferir envie uma mensagem através do formulário abaixo.",
            descriptionTitle: "Descrição",
            technologiesTitle: "Tecnologias usadas",
            social_network: {
                summary: `Layout de rede social basado no Facebook`,
                description: `Projeto desenvolvido para estudo e aprimoramento proprio baseado no layout do Facebook.`,
                technologiesUsed: "Utilizei o Framework Vue.js junto com o conjunto de biblotecas css Vuetify.",
                technologies: "VUE, Vuetify",
            },
            portalContribuinte: {
                summary: `Website para algumas prefeituras do nordeste`,
                description: `Website desenvolvido para atender demandas, como "iptu", requerimentos, emissão de certidões, entre outros de prefeituras do nordeste Brasileiro.`,
                technologiesUsed: "Atuei como FullStack desenvolvendo as telas do front-end utilizando AdminLTE 2 como base do projeto e Vue.js, HTML, CSS, JS e jquery, tambem desenvolvendo o back-end com a criação de APIs utilizando Laravel, PHP e Mysql para o banco de dados.",
                technologies: "Baseado no AdminLTE 2 | HTML, CSS, JS, VUE, LARAVEL",
            },
            gespag: {
                summary: `Desenvolver um novo layout front-end`,
                description: `Sistema de gerenciamento de vendas com aluguel de maquinetas.`,
                technologiesUsed: "Atuando como Front-end, utilizei Vue.js e Vuetify para remodelar o layout original e desenvolver novas features.",
                technologies: "VUE, VUETIFY",
            },
            emediar: {
                summary: `Desenvolvimento de um sistema completo`,
                description: `Developing Full system`,
                technologiesUsed: "",
                technologies: "PHP, CodeIgniter",
            },
        })
    ]
})