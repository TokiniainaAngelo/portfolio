import { Lang, Translations } from "../models/portfolio.model";

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Angelo",
      title: "I build web and mobile applications that solve real business problems.",
      subtitle:
        "Full Stack Developer with 4+ years of experience, working across frontend, backend, APIs, and databases, with a strong focus on building reliable, maintainable, and scalable solutions.",
      cta: "View my projects",
      contact: "Get in touch",
      scrollDown: "Scroll down",
    },
    about: {
      title: "About",
      paragraphs: [
        "Full Stack Developer based in Antananarivo, Madagascar, with 4+ years of experience designing and building web and mobile applications across a variety of technical and business environments.",
        "My experience covers the full development lifecycle, from designing responsive web and mobile interfaces to building REST APIs, integrating databases, and deploying backend services. I have worked with Angular, React, Ionic, Node.js, NestJS, Java Spring Boot, MongoDB, and PostgreSQL across public-facing, business, and enterprise applications.",
        "Throughout my career, I have also taken on technical responsibilities including architecture design, code reviews, documentation, mentoring, and team support. I focus on building maintainable software and turning complex business requirements into reliable, practical, and scalable solutions.",
      ],
      statsYears: "4+",
      statsYearsLabel: "Years of experience",
      statsProjects: "10+",
      statsProjectsLabel: "Projects delivered",
      statsClients: "3+",
      statsClientsLabel: "Professional clients",
      techIntro: "Here are a few technologies I've worked with recently",
    },
    projects: {
      title: "Selected Projects",
      subtitle: "A selection of projects showcasing my experience in Full Stack development, business applications and system architecture.",

      problemLabel: "Challenge",
      solutionLabel: "Solution",
      impactLabel: "Impact",

      items: [
        {
          title: "TMS Platform",
          subtitle: "Transport management and execution system",
          description:
            "A transport management platform covering the entire operational lifecycle, from request management and planning to field execution. The system combines a web application for management and planning with a mobile application dedicated to execution and real-time data reporting.",

          problem:
            "Managing transport operations requires coordinating multiple stages and stakeholders, from receiving requests to field execution. The platform needed to ensure reliable information flow between management and operational teams, including in environments with limited connectivity.",

          solution:
            "Full Stack development of the web platform using Angular and NestJS, along with contributions to the application's architecture. As the Tech Lead for the mobile application, I designed and led the technical implementation of an Ionic and Capacitor application based on an offline-first approach using IndexedDB and data synchronization. The architecture relies on DDD, CQRS, Clean Architecture, Onion Architecture and a microservices approach, with asynchronous and real-time communication through RabbitMQ, Kafka and WebSocket.",

          impact:
            "Implementation of a platform covering the main stages of the transport process, with a clear separation between management tools and field operations. The architecture addresses scalability, asynchronous processing, real-time communication and operational continuity on mobile devices.",

          tech: [
            "Angular",
            "NestJS",
            "MongoDB",
            "Ionic",
            "Capacitor",
            "IndexedDB",
            "RabbitMQ",
            "Kafka",
            "EventStoreDB",
            "WebSocket",
            "Kong API Gateway",
            "Clerk",
            "AWS S3",
            "AWS SES",
            "AWS SNS",
            "Jest",
            "Playwright",
            "Storybook",
            "DDD",
            "CQRS",
            "Clean Architecture",
            "Onion Architecture",
            "Microservices",
          ],

          featured: false,
        },

        {
          title: "Agi'Log Portal",
          link: "https://portail.agilog.net",
          subtitle: "Internal logistics platform — Air France",
          description:
            "A business platform designed to manage internal transportation and logistics operations involving aeronautical equipment and components. The system centralizes and processes data from multiple APIs and internal tools within a complex business environment.",

          problem:
            "Logistics operations relied on data coming from multiple internal systems. The platform needed to retrieve, transform and leverage this data while handling complex business rules and significant data volumes.",

          solution:
            "Full Stack development of Angular and NestJS features, including complex business interfaces, integration with internal APIs and tools, and data retrieval and transformation mechanisms. MongoDB is used to centralize and process data through an approach inspired by ELT workflows. Complete documentation of data integration and transformation mechanisms was produced in Confluence.",

          impact:
            "Improved centralization and use of data from multiple internal systems, providing tools adapted to logistics processes and the complexity of the aeronautical domain. The documentation of data flows also supports the understanding and maintenance of integration mechanisms.",

          tech: ["Angular", "NestJS", "MongoDB", "PrimeNG", "PrimeFlex", "AWS S3", "AWS SES", "Jest", "Git", "Bitbucket", "Jira", "Confluence"],

          featured: true,
        },

        {
          title: "Innovation Campus",
          link: "https://ic.mg/",
          subtitle: "University website and administration platform",
          description: "A digital platform combining a responsive public-facing website with an administration area designed to manage key academic activities.",

          problem:
            "The institution needed a modern web presence to showcase its activities while also requiring a centralized tool to manage registrations, schedules, teachers and students.",

          solution:
            "Full Stack development using Next.js for the web interfaces and NestJS for backend services. An administration platform was implemented to manage registrations, schedules, teachers and students. MongoDB is used for data management, while Docker is used to containerize the application.",

          impact:
            "Centralization of key administrative operations within a single platform while providing a modern and responsive public interface adapted to presenting the institution.",

          tech: ["Next.js", "NestJS", "MongoDB", "Docker", "Responsive Design", "Administration System"],

          featured: true,
        },

        {
          title: "Planeo",
          link: "https://planeo.mg/",
          subtitle: "Multi-tenant appointment booking platform",
          description:
            "A web-based appointment booking platform designed for the public and service providers. It includes a responsive Front Office for users and a Back Office allowing administrators to manage their services and data through a multi-tenant approach.",

          problem:
            "The platform needed to allow users to easily search for services and book appointments while providing each service provider with a dedicated administration space to independently manage their own data and activities.",

          solution:
            "Full Stack development using Angular for both the Front Office and Back Office interfaces, and Express for backend services. A multi-tenant model was implemented to isolate data and features between service providers. MongoDB is used for data management and Docker for application containerization and deployment.",

          impact:
            "Delivery of a public platform combining a responsive appointment booking experience with an administration tool that enables multiple service providers to independently manage their activities.",

          tech: ["Angular", "Express", "MongoDB", "Docker", "Responsive Design", "Multi-tenant Architecture"],

          featured: true,
        },
      ],
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies, tools, and practices I use to design and scale reliable, maintainable systems.",
      categories: [
        {
          name: "Frontend & Mobile",
          icon: "layout",
          items: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "SCSS", "Ionic", "Capacitor", "React", "IndexedDB"],
        },
        {
          name: "Backend & APIs",
          icon: "server",
          items: ["Node.js", "NestJS", "Express.js", "MongoDB", "REST APIs", "WebSockets", "Jest"],
        },
        {
          name: "Architecture & Patterns",
          icon: "blocks",
          items: ["DDD", "CQRS", "Event Sourcing", "Microservices", "Microfrontends", "Clean Architecture"],
        },
        {
          name: "Event-driven & Messaging",
          icon: "zap",
          items: ["RabbitMQ", "Kafka", "WarpStream", "EventStoreDB"],
        },
        {
          name: "DevOps & Cloud",
          icon: "cloud",
          items: ["Docker", "AWS (S3, SES, SNS)", "Kong API Gateway", "CI/CD", "Git"],
        },
        {
          name: "Tools & Productivity",
          icon: "tool",
          items: ["Nx", "Storybook", "Clerk", "Claude / Claude Code"],
        },
        {
          name: "Methods & Leadership",
          icon: "users",
          items: ["Agile / Scrum", "Code reviews", "Technical leadership", "Mentoring", "Architecture decisions"],
        },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "Career focused on building complex systems and technical leadership in enterprise environments.",
      present: "Today",
      items: [
        {
          role: "Lead Mobile / Fullstack JavaScript Developer",
          company: "ORCHIS MG",
          period: "Oct 2024 — Present",
          location: "Antananarivo, Madagascar",
          achievements: [
            "Technical leadership of the mobile team for a high-criticality enterprise application (Angular, Ionic, Capacitor)",
            "Definition and structuring of development workflows: code reviews, PR management, task breakdown and prioritization",
            "Direct contribution to backend architecture using advanced patterns (DDD, CQRS, Event Sourcing)",
            "Integration of core infrastructure components: Kong API Gateway, AWS SNS, microfrontends, Storybook",
            "Improvement of engineering quality and delivery practices within a cross-functional Agile team",
          ],
          stack: ["Angular", "Ionic", "Capacitor", "NestJS", "MongoDB", "AWS", "Docker"],
        },
        {
          role: "Fullstack JavaScript Developer",
          company: "Dreamslab / ITRAS Group",
          period: "Jul 2023 — Oct 2024",
          location: "Antananarivo, Madagascar",
          achievements: [
            "Development of a complex logistics and transportation platform for enterprise-scale operations (Air France)",
            "Design and implementation of a fullstack Angular / NestJS microservices architecture",
            "Optimization of large-scale data processing using advanced MongoDB aggregation pipelines",
            "Integration of AWS services (S3, SES) for document management and notifications",
            "Incremental feature delivery in Agile environment with strong quality constraints",
          ],
          stack: ["Angular", "NestJS", "MongoDB", "AWS", "Jest", "Microservices"],
        },
        {
          role: "JavaScript Web Developer",
          company: "Dreamslab / ITRAS Group",
          period: "Apr 2022 — Jul 2023",
          location: "Antananarivo, Madagascar",
          achievements: [
            "Development of responsive fullstack web applications in a professional environment",
            "Participation in full development lifecycle: design, implementation, integration, maintenance",
            "Progressive skill development in modern JavaScript practices and architectures",
            "Team collaboration using Git and Agile methodologies",
          ],
          stack: ["JavaScript", "Angular", "Node.js", "Express", "MongoDB", "React"],
        },
      ],
    },
    contact: {
      title: "Let’s work together",
      subtitle: "Looking for a Technical Lead, Fullstack Developer, or someone who can design reliable and complex systems? I’m open to opportunities and collaborations.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or your needs...",
      send: "Send",
      sending: "Sending...",
      sent: "Message sent!",
      or: "or contact me directly",
      emailMe: "Email me",
    },
    footer: {
      built: "by Angelo Ramananjoelina",
      rights: "All rights reserved.",
    },
  },

  fr: {
    nav: {
      about: "A propos",
      projects: "Projets",
      skills: "Competences",
      experience: "Experience",
      contact: "Contact",
      resume: "CV",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Angelo",
      title: "Je conçois des applications web et mobiles qui répondent à des besoins métier concrets.",
      subtitle:
        "Développeur Full Stack avec 4+ ans d'expérience, je travaille du frontend au backend, de l'interface utilisateur aux API et aux bases de données, avec une attention particulière portée à la qualité, la fiabilité et l'évolutivité des solutions.",
      cta: "Voir mes projets",
      contact: "Me contacter",
      scrollDown: "Défiler",
    },
    about: {
      title: "À propos",
      paragraphs: [
        "Développeur Full Stack basé à Antananarivo, Madagascar, avec plus de 4 ans d'expérience dans la conception et le développement d'applications web et mobiles, dans des environnements techniques et métiers variés.",
        "Mon parcours couvre l'ensemble du cycle de développement, de la conception d'interfaces web et mobiles responsives au développement d'API REST, à l'intégration de bases de données et au déploiement de services backend. J'ai travaillé avec Angular, React, Ionic, Node.js, NestJS, Java Spring Boot, MongoDB et PostgreSQL sur des applications publiques, métier et enterprise.",
        "Au fil de mes expériences, j'ai également pris des responsabilités techniques à travers la conception d'architectures, les revues de code, la documentation, le mentoring et l'accompagnement d'équipes. Je m'attache à produire des logiciels maintenables et à transformer des besoins métier complexes en solutions fiables, pragmatiques et évolutives.",
      ],
      statsYears: "4+",
      statsYearsLabel: "Années d'expérience",
      statsProjects: "10+",
      statsProjectsLabel: "Projets réalisés",
      statsClients: "3+",
      statsClientsLabel: "Clients professionnels",
      techIntro: "Voici quelques technologies avec lesquelles j'ai travaillé récemment",
    },
    projects: {
      title: "Projets sélectionnés",
      subtitle: "Une sélection de projets illustrant mon expérience en développement Full Stack, conception d'applications métier et architecture de systèmes.",

      problemLabel: "Défi",
      solutionLabel: "Solution",
      impactLabel: "Impact",

      items: [
        {
          title: "Plateforme TMS",
          subtitle: "Système de gestion et d'exécution des opérations de transport",
          description:
            "Plateforme de gestion du transport couvrant l'ensemble du cycle opérationnel, depuis la gestion des demandes et la planification jusqu'à l'exécution des opérations sur le terrain. Le système repose sur une application web destinée à la gestion et à la planification, ainsi qu'une application mobile dédiée à l'exécution et aux remontées d'informations en temps réel.",

          problem:
            "La gestion des opérations de transport nécessite de coordonner plusieurs étapes et acteurs, depuis la réception des demandes jusqu'à leur exécution sur le terrain. La plateforme devait assurer une circulation fiable des informations entre les équipes de gestion et les équipes opérationnelles, y compris dans des contextes de connectivité limitée.",

          solution:
            "Développement Full Stack de la plateforme web avec Angular et NestJS, ainsi que participation à la conception de son architecture applicative. En tant que Tech Lead sur la partie mobile, conception et pilotage technique d'une application Ionic et Capacitor reposant sur une approche offline-first avec IndexedDB et synchronisation des données. L'architecture s'appuie sur DDD, CQRS, Clean Architecture, Onion Architecture et une approche microservices, avec des mécanismes de communication asynchrone et temps réel utilisant RabbitMQ, Kafka et WebSocket.",

          impact:
            "Mise en place d'une plateforme couvrant les principales étapes du processus de transport, avec une séparation claire entre les outils de gestion et les opérations terrain. L'architecture prend en compte les besoins d'évolutivité, de traitement asynchrone, de communication en temps réel et de continuité des opérations sur mobile.",

          tech: [
            "Angular",
            "NestJS",
            "MongoDB",
            "Ionic",
            "Capacitor",
            "IndexedDB",
            "RabbitMQ",
            "Kafka",
            "EventStoreDB",
            "WebSocket",
            "Kong API Gateway",
            "Clerk",
            "AWS S3",
            "AWS SES",
            "AWS SNS",
            "Jest",
            "Playwright",
            "Storybook",
            "DDD",
            "CQRS",
            "Clean Architecture",
            "Onion Architecture",
            "Microservices",
          ],

          featured: false,
        },

        {
          title: "Portail Agi'Log",
          link: "https://portail.agilog.net",
          subtitle: "Plateforme logistique interne — Air France",
          description:
            "Plateforme métier destinée à la gestion des transports internes et des opérations logistiques liées aux matériels et composants aéronautiques. Le système centralise et traite des données provenant de différentes API et outils internes dans un contexte métier complexe.",

          problem:
            "Les opérations logistiques reposaient sur des données issues de plusieurs systèmes internes. La plateforme devait assurer leur récupération, leur transformation et leur exploitation tout en gérant une forte complexité métier et des volumes de données importants.",

          solution:
            "Développement Full Stack de fonctionnalités Angular et NestJS, incluant des interfaces métier complexes, l'intégration avec des API et outils internes, ainsi que des mécanismes de récupération et de transformation des données. MongoDB est utilisé pour centraliser et exploiter les données selon une approche inspirée des processus ELT. Documentation complète des mécanismes d'intégration et de transformation des données dans Confluence.",

          impact:
            "Centralisation et meilleure exploitation des données issues de différents systèmes internes, avec des outils adaptés aux processus logistiques et à la complexité métier du domaine aéronautique. La documentation des flux de données facilite également la compréhension et la maintenance des mécanismes d'intégration.",

          tech: ["Angular", "NestJS", "MongoDB", "PrimeNG", "PrimeFlex", "AWS S3", "AWS SES", "Jest", "Git", "Bitbucket", "Jira", "Confluence"],

          featured: true,
        },

        {
          title: "Innovation Campus",
          link: "https://ic.mg/",
          subtitle: "Plateforme web et système d'administration universitaire",
          description:
            "Plateforme numérique comprenant un site vitrine public responsive ainsi qu'un espace d'administration destiné à la gestion des principales activités académiques.",

          problem:
            "L'établissement avait besoin d'une présence web moderne pour présenter ses activités, tout en disposant d'un outil centralisé permettant de gérer les inscriptions, les emplois du temps, les enseignants et les étudiants.",

          solution:
            "Développement d'une plateforme Full Stack avec Next.js pour les interfaces web et NestJS pour les services backend. Mise en place d'un Back Office permettant l'administration des inscriptions, des emplois du temps, des enseignants et des étudiants. MongoDB est utilisé pour la gestion des données et Docker pour la conteneurisation de l'application.",

          impact:
            "Centralisation des principales opérations administratives au sein d'un outil unique, tout en offrant une interface publique moderne, responsive et adaptée à la présentation de l'établissement.",

          tech: ["Next.js", "NestJS", "MongoDB", "Docker", "Responsive Design", "Administration System"],

          featured: true,
        },

        {
          title: "Planeo",
          link: "https://planeo.mg/",
          subtitle: "Plateforme multi-tenant de prise de rendez-vous",
          description:
            "Plateforme web de prise de rendez-vous destinée au public et aux prestataires de services. Elle comprend un espace Front Office responsive pour les utilisateurs ainsi qu'un Back Office permettant aux administrateurs de gérer leurs services et leurs données selon une logique multi-tenant.",

          problem:
            "La plateforme devait permettre aux utilisateurs de rechercher des services et de prendre des rendez-vous simplement, tout en donnant à chaque prestataire un espace d'administration dédié pour gérer ses propres données et activités de manière indépendante.",

          solution:
            "Développement d'une application Full Stack avec Angular pour les interfaces Front Office et Back Office, et Express pour les services backend. Mise en place d'une gestion multi-tenant permettant d'isoler les données et fonctionnalités selon les prestataires. MongoDB est utilisé pour la gestion des données et Docker pour la conteneurisation et le déploiement de l'application.",

          impact:
            "Mise à disposition d'une plateforme publique combinant une expérience utilisateur responsive pour la prise de rendez-vous et un outil d'administration permettant à différents prestataires de gérer leurs activités de manière autonome.",

          tech: ["Angular", "Express", "MongoDB", "Docker", "Responsive Design", "Multi-tenant Architecture"],

          featured: true,
        },
      ],
    },
    skills: {
      title: "Compétences & Expertise",
      subtitle: "Technologies, outils et pratiques que j’utilise pour concevoir et faire évoluer des systèmes fiables et maintenables.",
      categories: [
        {
          name: "Frontend & Mobile",
          icon: "layout",
          items: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "SCSS", "Ionic", "Capacitor", "React", "IndexedDB"],
        },
        {
          name: "Backend & APIs",
          icon: "server",
          items: ["Node.js", "NestJS", "Express.js", "MongoDB", "REST API", "WebSockets", "Jest"],
        },
        {
          name: "Architecture & Patterns",
          icon: "blocks",
          items: ["DDD", "CQRS", "Event Sourcing", "Microservices", "Microfrontends", "Clean Architecture"],
        },
        {
          name: "Événementiel & Messaging",
          icon: "zap",
          items: ["RabbitMQ", "Kafka", "WarpStream", "EventStoreDB"],
        },
        {
          name: "DevOps & Cloud",
          icon: "cloud",
          items: ["Docker", "AWS (S3, SES, SNS)", "Kong API Gateway", "CI/CD", "Git"],
        },
        {
          name: "Outils & Productivité",
          icon: "tool",
          items: ["Nx", "Storybook", "Clerk", "Claude / Claude Code"],
        },
        {
          name: "Méthodes & Leadership",
          icon: "users",
          items: ["Agile / Scrum", "Revue de code", "Leadership technique", "Mentorat", "Décisions d’architecture"],
        },
      ],
    },
    experience: {
      title: "Expérience",
      subtitle: "Parcours orienté développement de systèmes complexes et leadership technique en environnement enterprise.",
      present: "Aujourd'hui",
      items: [
        {
          role: "Lead Developer Mobile / Fullstack JavaScript",
          company: "ORCHIS MG",
          period: "Oct 2024 — Aujourd'hui",
          location: "Antananarivo, Madagascar",
          achievements: [
            "Pilotage technique de l’équipe mobile sur une application enterprise (Angular, Ionic, Capacitor) à forte criticité métier",
            "Mise en place et structuration des workflows de développement : code review, PR, découpage et priorisation des tâches",
            "Contribution directe à l’architecture backend avec mise en œuvre de patterns avancés (DDD, CQRS, Event Sourcing)",
            "Intégration et utilisation d’outils et services critiques : Kong API Gateway, AWS SNS, microfrontends, Storybook",
            "Amélioration des pratiques de qualité et de delivery au sein d’une équipe Agile pluridisciplinaire",
          ],
          stack: ["Angular", "Ionic", "Capacitor", "NestJS", "MongoDB", "AWS", "Docker"],
        },
        {
          role: "Développeur Fullstack JavaScript",
          company: "Dreamslab / ITRAS Group",
          period: "Juil 2023 — Oct 2024",
          location: "Antananarivo, Madagascar",
          achievements: [
            "Développement d’une plateforme complexe de logistique et transport pour des opérations de type enterprise (Air France)",
            "Conception et implémentation d’une architecture fullstack Angular / NestJS basée sur des microservices",
            "Optimisation du traitement de données via des pipelines d’agrégation MongoDB sur volumes importants",
            "Intégration de services AWS (S3, SES) pour la gestion documentaire et les notifications",
            "Livraison incrémentale de fonctionnalités en environnement Agile avec forte exigence qualité",
          ],
          stack: ["Angular", "NestJS", "MongoDB", "AWS", "Jest", "Microservices"],
        },
        {
          role: "Développeur Web JavaScript",
          company: "Dreamslab / ITRAS Group",
          period: "Avr 2022 — Juil 2023",
          location: "Antananarivo, Madagascar",
          achievements: [
            "Développement d’applications web fullstack responsives en environnement professionnel",
            "Participation au cycle complet de développement : conception, implémentation, intégration et maintenance",
            "Montée en compétences sur les bonnes pratiques JavaScript et les architectures modernes",
            "Collaboration en équipe via Git et méthodologies Agile",
          ],
          stack: ["JavaScript", "Angular", "Node.js", "Express", "MongoDB", "React"],
        },
      ],
    },
    contact: {
      title: "Discutons de votre projet",
      subtitle:
        "Vous cherchez un Lead Technique, un développeur Fullstack ou un profil capable de concevoir des systèmes complexes et fiables ? Je suis ouvert aux opportunités et collaborations.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre projet ou votre besoin...",
      send: "Envoyer",
      sending: "Envoi...",
      sent: "Message envoyé !",
      or: "ou me contacter directement",
      emailMe: "M'écrire",
    },
    footer: {
      built: "par Angelo Ramananjoelina",
      rights: "Tous droits reserves.",
    },
  },
};
