import { ProgrammingLanguage } from '../../../../../shared/models/ProgrammingLanguage';

export const LanguageData: ProgrammingLanguage[] = [
    {
        title: 'Java',
        icons: [
            { url: 'assets/images/languages/java.svg', title: 'Java' },
            {
                url: 'assets/images/languages/hibernate.svg',
                title: 'Hibernate',
            },
            { url: 'assets/images/languages/spring.svg', title: 'Spring' },
            {
                url: 'assets/images/languages/thymeleaf.webp',
                title: 'Thymeleaf',
            },
            { url: 'assets/images/languages/jsp.webp', title: 'JSP' },
        ],
        text:
            "I've worked with Java for 7+ years and I developed various projects for university and personal development, " +
            'including a Library Management software and a Restaurant reservations and takeaway webapp in JSP.' +
            '\nCheck out my projects <a href="/projects">here</a>.',
    },
    {
        title: 'Python',
        icons: [
            { url: 'assets/images/languages/python.svg', title: 'Python' },
            { url: 'assets/images/languages/django.webp', title: 'Django' },
            { url: 'assets/images/languages/flask.webp', title: 'Flask' },
        ],
        text:
            'I taught myself Python and it quickly became one of my favourite languages. <br>I mainly used it to develop an ' +
            'automated assessment tool for CompSci programming assignments, which was the focus of my MSc Dissertation.',
    },
    {
        title: 'JS, Angular, React',
        icons: [
            { url: 'assets/images/languages/js.svg', title: 'JavaScript' },
            { url: 'assets/images/languages/ts.webp', title: 'TypeScript' },
            { url: 'assets/images/languages/node.webp', title: 'Node' },
            { url: 'assets/images/languages/jquery.svg', title: 'JQuery' },
            { url: 'assets/images/languages/react.svg', title: 'React' },
            { url: 'assets/images/languages/angular.svg', title: 'Angular' },
            { url: 'assets/images/languages/vue.svg', title: 'Vue' },
        ],
        text:
            "I delved into JavaScript during my work placements. In particular, I've learnt React in my past job, developing UI " +
            "components for the Rentalcars website, and the latest Angular with TypeScript to build my employer's new tools.",
    },
    {
        title: 'Web development',
        icons: [
            { url: 'assets/images/languages/html.svg', title: 'HTML' },
            { url: 'assets/images/languages/css.svg', title: 'CSS' },
            { url: 'assets/images/languages/sass.svg', title: 'Sass' },
            {
                url: 'assets/images/languages/bootstrap.svg',
                title: 'Bootstrap',
            },
        ],
        text:
            'Working on the front-end is always good fun and gives me the chance to explore frameworks like Bootstrap and design ' +
            'techniques. I\'ve built web apps for various uni and personal projects - <a href="/projects">check them out</a>.',
    },
    {
        title: 'Mobile development',
        icons: [
            { url: 'assets/images/languages/android.webp', title: 'Android' },
            { url: 'assets/images/languages/kotlin.webp', title: 'Kotlin' },
        ],
        text:
            "I've started learning Kotlin two years ago, as I'm intrigued by its features and possibilities for mobile development. " +
            "For now I've created a few simple apps, and I'm looking to learn frameworks like Flutter and React Native.",
    },
    {
        title: 'C#',
        icons: [
            { url: 'assets/images/languages/cs.svg', title: 'C#' },
            { url: 'assets/images/languages/asp-net.webp', title: 'C#' },
        ],
        text:
            '<i>Medicus</i>, a medical products online store, was a group project I worked on for the Information Security ' +
            'course of my BSc. It used ASP.NET and focused on security and privacy for customers.',
    },
    {
        title: 'Databases',
        icons: [
            { url: 'assets/images/languages/mysql.svg', title: 'MySQL' },
            {
                url: 'assets/images/languages/postgres.svg',
                title: 'PostgreSQL',
            },
            { url: 'assets/images/languages/mongo.svg', title: 'MongoDB' },
            {
                url: 'assets/images/languages/firebase.svg',
                title: 'Firestore',
            },
        ],
        text:
            'A Library Manager was the project that introduced me to complex relational DB architectures. ' +
            'Since then I designed several systems for personal and work projects, mostly with Postgres and MySQL, ' +
            'as well as MongoDB and Firestore in the NoSQL world.',
    },
    {
        title: 'PHP',
        icons: [
            { url: 'assets/images/languages/php.webp', title: 'PHP' },
            { url: 'assets/images/languages/drupal.webp', title: 'Drupal' },
        ],
        text:
            'The booking management service of my previous company was written in PHP - kind of a shock therapy experience, ' +
            "still an excellent chance to learn about this language. I'm currently working with Drupal and I still " +
            'have a lot to explore - but I like challenges.',
    },
    {
        title: 'OSs',
        icons: [
            { url: 'assets/images/languages/win8.svg', title: 'Windows' },
            { url: 'assets/images/languages/macos.svg', title: 'Mac' },
            { url: 'assets/images/languages/ubuntu.svg', title: 'Ubuntu' },
            { url: 'assets/images/languages/debian.svg', title: 'Debian' },
            { url: 'assets/images/languages/redhat.svg', title: 'RedHat' },
        ],
        text:
            "I'm confident working with all the common operating systems, MacOS and Windows in particular. Linux " +
            'distributions I have experience with are Ubuntu, Raspbian/Debian and RedHat.',
    },
    {
        title: 'Cloud platforms',
        icons: [
            {
                url: 'assets/images/languages/aws.svg',
                title: 'Amazon Web Services',
            },
            {
                url: 'assets/images/languages/gcp.webp',
                title: 'Google Cloud Platform',
            },
            { url: 'assets/images/languages/azure.svg', title: 'Azure' },
            { url: 'assets/images/languages/jenkins.svg', title: 'Jenkins' },
            {
                url: 'assets/images/languages/gtm.svg',
                title: 'Google Tag Manager',
            },
            { url: 'assets/images/languages/heroku.webp', title: 'Heroku' },
            { url: 'assets/images/languages/docker.svg', title: 'Docker' },
        ],
        text:
            'After spending the first years in uni relying on my <i>localhost</i>, I made an effort to ' +
            'learn how to deploy servers on the cloud. I still have <i>loads</i> to learn, especially about the huge ' +
            'worlds of AWS and GCP, but for now, Heroku is a favourite for its simplicity (and the free tier).',
    },
    {
        title: 'IDEs',
        icons: [
            {
                url: 'assets/images/languages/intellij.webp',
                title: 'IntelliJ',
            },
            {
                url: 'assets/images/languages/netbeans.webp',
                title: 'NetBeans',
            },
            {
                url: 'assets/images/languages/vsc.svg',
                title: 'Visual Studio',
            },
            { url: 'assets/images/languages/eclipse.webp', title: 'Eclipse' },
            { url: 'assets/images/languages/atom.webp', title: 'Atom' },
        ],
        text:
            'IntelliJ and the Jetbrains suite are a favourite, but I have experience with NetBeans, Visual Studio ' +
            'and Eclipse, as well as Atom for quick coding.',
    },
];

export default LanguageData;
