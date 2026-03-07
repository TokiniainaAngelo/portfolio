import { Lang, Translations } from '../models/portfolio.model';

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Angelo',
      title: 'I build systems that scale.',
      subtitle:
        'Fullstack JavaScript Engineer & Technical Lead crafting robust web & mobile applications with Angular, NestJS, and event-driven architectures.',
      cta: 'View my work',
      contact: 'Get in touch',
      scrollDown: 'Scroll down',
    },
    about: {
      title: 'About me',
      paragraphs: [
        "I'm a Fullstack JavaScript Engineer based in Antananarivo, Madagascar, with over 4 years of experience building complex web and mobile applications for enterprise clients.",
        "I've grown from developer to Technical Lead — combining hands-on architecture design with team mentorship and strategic decision-making. My expertise spans the full JavaScript ecosystem, from pixel-perfect Angular frontends to event-driven NestJS backends built with DDD, CQRS, and Event Sourcing.",
        'I believe great software starts with clean architecture, strong collaboration, and relentless attention to quality.',
      ],
      statsYears: '4+',
      statsYearsLabel: 'Years of Experience',
      statsProjects: '10+',
      statsProjectsLabel: 'Projects Delivered',
      statsClients: '3+',
      statsClientsLabel: 'Enterprise Clients',
    },
    projects: {
      title: 'Selected Projects',
      subtitle:
        'A curated selection of projects showcasing my expertise in building scalable, production-grade applications.',
      problemLabel: 'Challenge',
      solutionLabel: 'Solution',
      impactLabel: 'Impact',
      items: [
        {
          title: 'FleetSync',
          subtitle: 'Logistics & Transport Platform — Air France',
          description:
            'Enterprise logistics management system handling complex operational workflows and high-volume data for Air France transport operations.',
          problem:
            'Air France needed a comprehensive system to manage logistics operations with real-time tracking and processing of millions of records.',
          solution:
            'Built a full-stack application with NestJS microservices, advanced MongoDB aggregation pipelines, and AWS integration for document management.',
          impact:
            'Streamlined logistics operations across multiple sites, enabling real-time tracking and efficient high-volume data processing.',
          tech: ['Angular', 'NestJS', 'MongoDB', 'AWS S3/SES', 'Microservices', 'Jest'],
          featured: true,
        },
        {
          title: 'FieldPulse',
          subtitle: 'Enterprise Mobile Platform',
          description:
            'Cross-platform mobile solution with offline-first capabilities for enterprise field operations and team coordination.',
          problem:
            'Enterprise client required a robust mobile solution allowing field teams to work offline with seamless data synchronization.',
          solution:
            'Led the mobile team in building a hybrid app with Angular, Ionic, Capacitor, and IndexedDB for offline persistence with background sync.',
          impact:
            'Delivered production-ready mobile platform, established code review processes, and grew a team of developers.',
          tech: ['Angular', 'Ionic', 'Capacitor', 'IndexedDB', 'NestJS', 'MongoDB'],
          featured: true,
        },
        {
          title: 'EventFlow',
          subtitle: 'Event-Driven Architecture',
          description:
            'Scalable event-driven microservices system built with DDD, CQRS, and Event Sourcing for complex enterprise domains.',
          problem:
            'Growing enterprise application with complex domain logic needed a scalable, maintainable backend architecture.',
          solution:
            'Designed and implemented event-driven microservices using EventStoreDB, RabbitMQ, and Kafka with clear domain boundaries.',
          impact:
            'Improved system scalability, enabled independent service deployment, and established clear domain-driven boundaries.',
          tech: ['NestJS', 'EventStoreDB', 'RabbitMQ', 'Kafka', 'MongoDB', 'Docker'],
          featured: true,
        },
        {
          title: 'Gateway Hub',
          subtitle: 'API Management Platform',
          description:
            'Centralized API gateway integrating authentication, rate limiting, and service orchestration for microservices.',
          problem:
            'Multiple microservices needed unified API management, authentication, and rate limiting across services.',
          solution:
            'Integrated Kong API Gateway with custom configurations, AWS SNS for async notifications, and Clerk for auth management.',
          impact:
            'Centralized API management, improved security posture, and streamlined inter-service communication.',
          tech: ['Kong', 'AWS SNS', 'Clerk', 'NestJS', 'Docker', 'CI/CD'],
          featured: false,
        },
      ],
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Technologies and methodologies I work with daily to deliver high-quality solutions.',
      categories: [
        {
          name: 'Frontend & Mobile',
          icon: 'layout',
          items: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SCSS', 'Ionic', 'Capacitor', 'React', 'IndexedDB'],
        },
        {
          name: 'Backend & APIs',
          icon: 'server',
          items: ['Node.js', 'NestJS', 'Express.js', 'MongoDB', 'REST API', 'WebSocket', 'Jest'],
        },
        {
          name: 'Architecture & Patterns',
          icon: 'blocks',
          items: ['DDD', 'CQRS', 'Event Sourcing', 'Microservices', 'Microfrontend'],
        },
        {
          name: 'Event-Driven & Messaging',
          icon: 'zap',
          items: ['RabbitMQ', 'Kafka', 'WarpStream', 'EventStoreDB'],
        },
        {
          name: 'DevOps & Cloud',
          icon: 'cloud',
          items: ['Docker', 'AWS (S3, SES, SNS)', 'Kong API Gateway', 'CI/CD', 'Git'],
        },
        {
          name: 'Methods & Leadership',
          icon: 'users',
          items: ['Agile / Scrum', 'Code Review', 'Technical Leadership', 'Team Mentoring', 'Storybook'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey building and leading development teams.',
      present: 'Present',
      items: [
        {
          role: 'Lead Developer Mobile / Fullstack JS',
          company: 'ORCHIS MG',
          period: 'Oct 2024 — Present',
          location: 'Antananarivo, Madagascar',
          achievements: [
            'Led mobile development team for an enterprise client application using Angular, Ionic, and Capacitor',
            'Mentored developers through code reviews, PR management, and structured task planning',
            'Contributed to backend architecture decisions — DDD, CQRS, Event Sourcing implementation',
            'Integrated Kong API Gateway, AWS SNS, Microfrontend architecture, and Storybook',
            'Drove quality processes within a cross-functional Agile team',
          ],
          stack: ['Angular', 'Ionic', 'Capacitor', 'NestJS', 'MongoDB', 'AWS', 'Docker'],
        },
        {
          role: 'Fullstack JavaScript Developer',
          company: 'Dreamslab / ITRAS Group',
          period: 'Jul 2023 — Oct 2024',
          location: 'Antananarivo, Madagascar',
          achievements: [
            'Built complex logistics & transport application for Air France operations',
            'Implemented Angular frontend with advanced patterns and NestJS microservices backend',
            'Designed MongoDB aggregation pipelines for high-volume data processing',
            'Integrated AWS services (S3, SES) for document management and notifications',
            'Delivered features within Agile sprints with rigorous validation processes',
          ],
          stack: ['Angular', 'NestJS', 'MongoDB', 'AWS', 'Jest', 'Microservices'],
        },
        {
          role: 'Web JavaScript Developer',
          company: 'Dreamslab / ITRAS Group',
          period: 'Apr 2022 — Jul 2023',
          location: 'Antananarivo, Madagascar',
          achievements: [
            'Developed frontend and backend of professional responsive web applications',
            'Participated in full software lifecycle — design, development, integration, and maintenance',
            'Grew expertise in modern JavaScript ecosystem and best practices',
            'Collaborated effectively within development teams using Git and Agile methodologies',
          ],
          stack: ['JavaScript', 'Angular', 'Node.js', 'Express', 'MongoDB', 'React'],
        },
      ],
    },
    contact: {
      title: "Let's work together",
      subtitle:
        "Have a project in mind, looking for a Technical Lead, or want to discuss a freelance opportunity? I'd love to hear from you.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send message',
      sending: 'Sending...',
      sent: 'Message sent!',
      or: 'or reach out directly',
      emailMe: 'Email me',
    },
    footer: {
      built: 'Designed & built by Angelo Ramananjoelina',
      rights: 'All rights reserved.',
    },
  },

  fr: {
    nav: {
      about: 'A propos',
      projects: 'Projets',
      skills: 'Competences',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Angelo',
      title: 'Je concois des systemes qui scalent.',
      subtitle:
        'Ingenieur Fullstack JavaScript & Lead Technique — je cree des applications web & mobile robustes avec Angular, NestJS et des architectures evenementielles.',
      cta: 'Voir mes projets',
      contact: 'Me contacter',
      scrollDown: 'Defiler',
    },
    about: {
      title: 'A propos',
      paragraphs: [
        "Je suis Ingenieur Fullstack JavaScript base a Antananarivo, Madagascar, avec plus de 4 ans d'experience dans le developpement d'applications web et mobile complexes pour des clients enterprise.",
        "J'ai evolue de developpeur a Lead Technique — combinant conception d'architecture, developpement hands-on et accompagnement d'equipe. Mon expertise couvre tout l'ecosysteme JavaScript, du frontend Angular au backend NestJS evenementiel avec DDD, CQRS et Event Sourcing.",
        "Je suis convaincu qu'un excellent logiciel repose sur une architecture propre, une collaboration forte et une attention constante a la qualite.",
      ],
      statsYears: '4+',
      statsYearsLabel: "Annees d'experience",
      statsProjects: '10+',
      statsProjectsLabel: 'Projets livres',
      statsClients: '3+',
      statsClientsLabel: 'Clients enterprise',
    },
    projects: {
      title: 'Projets selectionnes',
      subtitle:
        "Une selection de projets illustrant mon expertise dans la creation d'applications scalables et production-ready.",
      problemLabel: 'Defi',
      solutionLabel: 'Solution',
      impactLabel: 'Impact',
      items: [
        {
          title: 'FleetSync',
          subtitle: 'Plateforme Logistique & Transport — Air France',
          description:
            "Systeme de gestion logistique enterprise gerant des flux operationnels complexes et des donnees volumineuses pour les operations de transport d'Air France.",
          problem:
            "Air France avait besoin d'un systeme complet pour gerer ses operations logistiques avec suivi en temps reel et traitement de millions d'enregistrements.",
          solution:
            "Developpement d'une application full-stack avec microservices NestJS, pipelines d'aggregation MongoDB avances et integration AWS pour la gestion documentaire.",
          impact:
            'Optimisation des operations logistiques sur plusieurs sites, suivi en temps reel et traitement efficace de donnees volumineuses.',
          tech: ['Angular', 'NestJS', 'MongoDB', 'AWS S3/SES', 'Microservices', 'Jest'],
          featured: true,
        },
        {
          title: 'FieldPulse',
          subtitle: 'Plateforme Mobile Enterprise',
          description:
            "Solution mobile cross-platform avec capacites offline-first pour les operations terrain et la coordination d'equipe enterprise.",
          problem:
            'Le client enterprise necessitait une solution mobile robuste permettant aux equipes terrain de travailler hors ligne avec synchronisation transparente.',
          solution:
            "Direction de l'equipe mobile pour creer une app hybride avec Angular, Ionic, Capacitor et IndexedDB pour la persistance offline.",
          impact:
            "Livraison d'une plateforme mobile production-ready, mise en place de processus de revue de code et accompagnement d'une equipe de developpeurs.",
          tech: ['Angular', 'Ionic', 'Capacitor', 'IndexedDB', 'NestJS', 'MongoDB'],
          featured: true,
        },
        {
          title: 'EventFlow',
          subtitle: 'Architecture Evenementielle',
          description:
            'Systeme de microservices evenementiels scalable construit avec DDD, CQRS et Event Sourcing pour des domaines enterprise complexes.',
          problem:
            'Application enterprise croissante avec une logique metier complexe necessitant une architecture backend scalable et maintenable.',
          solution:
            'Conception et implementation de microservices evenementiels utilisant EventStoreDB, RabbitMQ et Kafka avec des frontieres de domaine claires.',
          impact:
            'Amelioration de la scalabilite, deploiement independant des services et etablissement de frontieres de domaine claires.',
          tech: ['NestJS', 'EventStoreDB', 'RabbitMQ', 'Kafka', 'MongoDB', 'Docker'],
          featured: true,
        },
        {
          title: 'Gateway Hub',
          subtitle: 'Plateforme de Gestion API',
          description:
            "Passerelle API centralisee integrant authentification, rate limiting et orchestration de services pour les microservices.",
          problem:
            'Plusieurs microservices necessitaient une gestion API unifiee, authentification et limitation de debit.',
          solution:
            "Integration de Kong API Gateway avec configurations personnalisees, AWS SNS pour les notifications et Clerk pour l'authentification.",
          impact:
            'Centralisation de la gestion API, amelioration de la securite et rationalisation de la communication inter-services.',
          tech: ['Kong', 'AWS SNS', 'Clerk', 'NestJS', 'Docker', 'CI/CD'],
          featured: false,
        },
      ],
    },
    skills: {
      title: 'Competences & Expertise',
      subtitle:
        "Technologies et methodologies que j'utilise au quotidien pour livrer des solutions de qualite.",
      categories: [
        {
          name: 'Frontend & Mobile',
          icon: 'layout',
          items: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SCSS', 'Ionic', 'Capacitor', 'React', 'IndexedDB'],
        },
        {
          name: 'Backend & APIs',
          icon: 'server',
          items: ['Node.js', 'NestJS', 'Express.js', 'MongoDB', 'REST API', 'WebSocket', 'Jest'],
        },
        {
          name: 'Architecture & Patterns',
          icon: 'blocks',
          items: ['DDD', 'CQRS', 'Event Sourcing', 'Microservices', 'Microfrontend'],
        },
        {
          name: 'Evenementiel & Messaging',
          icon: 'zap',
          items: ['RabbitMQ', 'Kafka', 'WarpStream', 'EventStoreDB'],
        },
        {
          name: 'DevOps & Cloud',
          icon: 'cloud',
          items: ['Docker', 'AWS (S3, SES, SNS)', 'Kong API Gateway', 'CI/CD', 'Git'],
        },
        {
          name: 'Methodes & Leadership',
          icon: 'users',
          items: ['Agile / Scrum', 'Revue de code', 'Leadership technique', 'Mentorat', 'Storybook'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'Mon parcours professionnel de developpement et de leadership technique.',
      present: "Aujourd'hui",
      items: [
        {
          role: 'Lead Developer Mobile / Fullstack JS',
          company: 'ORCHIS MG',
          period: "Oct 2024 — Aujourd'hui",
          location: 'Antananarivo, Madagascar',
          achievements: [
            "Direction de l'equipe mobile pour une application client enterprise (Angular, Ionic, Capacitor)",
            'Accompagnement des developpeurs via revues de code, gestion des PR et planification structuree',
            "Contribution aux decisions d'architecture backend — implementation DDD, CQRS, Event Sourcing",
            'Integration de Kong API Gateway, AWS SNS, architecture Microfrontend et Storybook',
            "Animation des processus qualite au sein d'une equipe Agile pluridisciplinaire",
          ],
          stack: ['Angular', 'Ionic', 'Capacitor', 'NestJS', 'MongoDB', 'AWS', 'Docker'],
        },
        {
          role: 'Developpeur Fullstack JavaScript',
          company: 'Dreamslab / ITRAS Group',
          period: 'Juil 2023 — Oct 2024',
          location: 'Antananarivo, Madagascar',
          achievements: [
            "Developpement d'une application complexe de logistique & transport pour les operations Air France",
            'Implementation frontend Angular avance et backend NestJS oriente microservices',
            "Conception de pipelines d'aggregation MongoDB pour le traitement de donnees volumineuses",
            'Integration de services AWS (S3, SES) pour la gestion documentaire et les notifications',
            'Livraison de fonctionnalites en sprints Agile avec validation rigoureuse',
          ],
          stack: ['Angular', 'NestJS', 'MongoDB', 'AWS', 'Jest', 'Microservices'],
        },
        {
          role: 'Developpeur Web JavaScript',
          company: 'Dreamslab / ITRAS Group',
          period: 'Avr 2022 — Juil 2023',
          location: 'Antananarivo, Madagascar',
          achievements: [
            "Developpement frontend et backend d'applications web professionnelles responsives",
            'Participation au cycle complet — conception, developpement, integration et maintenance',
            "Montee en competences sur l'ecosysteme JavaScript moderne et les bonnes pratiques",
            'Collaboration efficace en equipe avec Git et methodologies Agile',
          ],
          stack: ['JavaScript', 'Angular', 'Node.js', 'Express', 'MongoDB', 'React'],
        },
      ],
    },
    contact: {
      title: 'Travaillons ensemble',
      subtitle:
        "Un projet en tete, a la recherche d'un Lead Technique, ou envie de discuter d'une opportunite freelance ? N'hesitez pas a me contacter.",
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      send: 'Envoyer',
      sending: 'Envoi...',
      sent: 'Message envoye !',
      or: 'ou contactez-moi directement',
      emailMe: "M'ecrire",
    },
    footer: {
      built: 'Concu & developpe par Angelo Ramananjoelina',
      rights: 'Tous droits reserves.',
    },
  },
};
