import { Project } from '../../../shared/models/Project';

export const ProjectData: Project[] = [
    {
        title: 'Team toolbar plugin',
        id: 'bitbar',
        year: 2020,
        photo: 'assets/images/projects/xbar.webp',
        repo: 'https://github.com/martapanc/BitBar-distrib',
        tags: ['python', 'work'],
        text:
            'Many teams have a considerable number of processes and metrics to monitor and links to web resources, which ' +
            'often end up all over the place in the browser. To gather all of those I created a plugin for ' +
            '<a href="https://getbitbar.com/" target="_blank">BitBar</a>, a useful app that lets you put the output ' +
            "from any script in the MacOS toolbar. Connecting to the company's servers, the toolbar shows Bamboo build " +
            'and deployment processes, pull requests, release statuses and such. Now my team uses the toolbar on a daily ' +
            "basis and I'm currently working on extending its functionality, e.g. to allow other teams to easily add their " +
            'own configuration.',
    },
    {
        title: "Werner's Restaurant",
        id: 'werners',
        year: 2017,
        photo: 'assets/images/projects/werners.webp',
        repo: 'https://github.com/martapanc/restaurantManager',
        site: 'https://werners-restaurant.herokuapp.com/',
        tags: ['java', 'js', 'db', 'web', 'uni'],
        text:
            'A full <strong>Restaurant Manager webapp</strong> in <strong>Java</strong> is the final project my team ' +
            'developed for the Internet & Mobile Services course: it allows customers to reserve a table or to book a ' +
            'takeaway order, and the restaurant managers to verify the status of the reservations and orders, ' +
            "add and remove takeaway meals and check other employees' accounts, mostly in the form of CRUD " +
            "tables. <br/>I've recently made a v2 in Spring and deployed it on Heroku - " +
            '<a href="https://werners-restaurant.herokuapp.com/" target="_blank">check it out</a>!',
    },
    {
        title: 'Cloud computing and GDPR',
        id: 'gdpr',
        year: 2018,
        photo: 'assets/images/projects/gdpr.webp',
        article: 'https://www.computer.org/csdl/magazine/cd/2018/06/mcd2018060058/17D45XwUAKp',
        tags: ['cloud', 'security', 'public', 'uni'],
        text:
            'Disclosing personal data for a purpose not known by data subjects is a practice that the 2018 EU ' +
            '<strong>General Data Protection Regulation</strong> (GDPR) is supposed to prevent. This article gives ' +
            'an overview of the major aspects of GDPR related to provision, use, and maintenance of ' +
            '<strong>cloud services and technologies</strong>. <br/>The article was written in collaboration between ' +
            'professors and associates of the faculties of Law and Computer Science of the Free University of Bolzano, ' +
            'and was accepted by IEEE for publication.',
    },
    {
        title: 'Holiday request manager',
        id: 'timesheet',
        year: 2016,
        photo: 'assets/images/projects/ict.webp',
        report: 'assets/images/projects/Internship_Final_Report.pdf',
        tags: ['js', 'web', 'work'],
        text:
            'I interned for three months at the <a href="https://www.ict-group.it/en/" target="_blank">ICT-Group</a> ' +
            'as a web developer, and my task was to build an additional feature to the company’s ' +
            '<strong>HR management software</strong>: a portal for the request and approval of the employee vacations, ' +
            'work permits, transfers and bank hours. The UI I developed consists of customisable calendars ' +
            'and timesheets, which offer different views according to the role of the logged user (employee or manager), ' +
            'and was built using <strong>AngularJS</strong> with the <strong>Boostrap CSS</strong> framework.',
    },
    {
        title: 'Food Saver (GESS 2017)',
        id: 'gess',
        year: 2018,
        photo: 'assets/images/projects/gess.webp',
        site: 'https://globalsummerschool.org/shanghai/',
        tags: ['hack'],
        text:
            'I was selected (among 1200+ applications) to attend the <b>Global Entrepreneurship ' +
            "Summer School</b> (GESS) 2017 in Shanghai. This year's topic was &quot;Food&quot;, and our goal " +
            'was to find solutions to related problems — such as food waste, obesity, hidden ' +
            'hunger and food safety. My team designed a <b>mobile app</b> that connects users to ' +
            'supermarkets and local food suppliers: most food markets have an &quot;expiring soon&quot; ' +
            'section with aliments that cannot be displayed as too close to their expiration date. ' +
            'This app would be a database listing such products, so that customers can save money and help ' +
            '<b>reduce food waste</b>.',
    },
    {
        title: 'wc clone (Unix)',
        id: 'wc',
        year: 2017,
        photo: 'assets/images/projects/wc.webp',
        repo: 'https://github.com/martapanc/comp61511',
        tags: ['python', 'uni'],
        text:
            'First complex project in <strong>Python</strong> - creating a clone of the ' +
            "<strong>Unix' word count</strong> tool, wc, based on re-engineering techniques and black-box testing and " +
            'using only the Python Standard Library for the main functionality. The result is a program that produces ' +
            'the same output as the original wc for all known input sequences and file formats, including binary files.',
    },
    {
        title: 'MSc Dissertation - Auto-grading',
        id: 'msc',
        year: 2018,
        photo: 'assets/images/projects/mscBook.webp',
        report: 'assets/images/projects/comp61511_dissertation.pdf',
        tags: ['python', 'uni', 'public'],
        text:
            'I really liked building a wc clone as part of the Software Engineering course of my MSc - less that it took ' +
            'months to receive a grade for it. However, it gave me the prompt for the project of my dissertation project: ' +
            "designing a tool to <strong>automatically run tests</strong> for students' coding exercises, in order to ease the instructor's " +
            'job when evaluating and grading them',
    },
    {
        title: 'BSc Dissertation - Technical Debt',
        id: 'bsc',
        year: 2017,
        photo: 'assets/images/projects/satd.webp',
        repo: 'https://github.com/martapanc/SATD-replication-package',
        report: 'assets/images/projects/SATD_Thesis.pdf',
        tags: ['java', 'uni', 'public'],
        text:
            'My BSc graduation project: I developed an heuristic algorithm that parses the so-called "SATD methods", ' +
            'that is Java methods that are affected by "Self-Admitted Technical Debt", instances of ' +
            '<strong>Technical Debt</strong> that the developers self-documented in the form of comments. The research ' +
            'then analysed how such methods evolve from the moment the comment was introduced through Version Control ' +
            "and, based on the bugs reported in the code's issue tracker, how the presence of technical debt affects" +
            'the amount of bugs on average.',
    },
    {
        title: 'Library Manager',
        id: 'library',
        year: 2015,
        photo: 'assets/images/projects/library.webp',
        repo: 'https://github.com/martapanc/LibraryManagementApp',
        tags: ['java', 'uni', 'db'],
        text:
            'I developed a Library Management app as final project for the Database Systems course of my BSc. Written ' +
            'in Java and with a <strong>PostgresSQL database</strong>, it offers most functions a Library software is expected to have ' +
            '- book search by author, title and other data, user account to check borrowed books and deadlines to return them, ' +
            'and librarian account used to insert new titles into the database and to register book loans and returns.',
    },
    {
        title: 'Fiscal Code Calculator (Desktop app)',
        id: 'fiscalcode',
        year: 2015,
        photo: 'assets/images/projects/fiscalcode.webp',
        repo: 'https://github.com/martapanc/ItalianFiscalCodeCalculator',
        tags: ['java', 'uni'],
        text:
            'Another <strong>Java</strong> app developed for my uni programming course. It allows the user to calculate their Italian tax code ' +
            '(<a href="https://en.wikipedia.org/wiki/Italian_fiscal_code" target="_blank">Codice Fiscale</a>) by ' +
            'entering their personal data.<br/>The app was designed to exploit various advanced features of the Java language, ' +
            'such Exception handling, Multithreading, Generics, Reflection, RegEx and Streams. Also, ' +
            'I recently reused the code and built an Android app.',
    },
    {
        title: 'Fiscal Code (Android)',
        id: 'fiscalcode_app',
        year: 2020,
        photo: 'assets/images/projects/fc_app.webp',
        link: 'https://play.google.com/store/apps/details?id=com.pancaldim.fiscalcode_app',
        repo: 'https://github.com/martapanc/ItalianFiscalCodeCalculatorApp',
        tags: ['java', 'kotlin', 'uni', 'android', 'self'],
        text:
            'I started learning Android development recently and, in order to focus on the features of the mobile world, ' +
            "as well as on practising with Kotlin, I've been reusing the Java backend of the Fiscal Code calculator " +
            'I built in university. The app has currently been downloaded 50000+ times and has a rating of ~4.1. ' +
            '<br/>Check out the result on the ' +
            '<a href="https://play.google.com/store/apps/details?id=com.pancaldim.fiscalcode_app">Play Store</a>!',
    },
    {
        title: 'Hack-my-town',
        id: 'glurns',
        year: 2014,
        photo: 'assets/images/projects/glurns.webp',
        site: 'http://hackmytown.unibz.it/',
        tags: ['hack', 'uni'],
        text:
            'A day of December 2014, four UniBZ computer science and design students were sent to the smallest town in South Tyrol, ' +
            '<strong>Glorenza-Glurns</strong>, with a challenge from their professors: find innovative ideas to ' +
            '<strong>improve the life of a mountain village</strong>, often isolated and closed in its daily life, ' +
            'which would offer history and attractions but fails to entice tourists to stay. Our solution, winner of ' +
            'the contest between UniBZ and other Italian universities, was to create a brand for Glorenza and a ' +
            'consortium for the towns in the area - a brand to promote the history, the beauty of the landscapes and ' +
            'the tastiness of the food and that tourists get to know and trust.',
    },
    {
        title: 'Project "EMMA"',
        id: 'emma',
        year: 2014,
        photo: 'assets/images/projects/emma.webp',
        video: 'https://www.youtube.com/watch?v=5dLfFvGAIjQ',
        tags: ['raspi', 'hack', 'uni'],
        text:
            '"Inventing by recycling" was the theme of the final project of my Management Engineering course at ' +
            'University of Bolzano: starting from the collection of old everyday objects, my team used a lamp container, ' +
            'a LED matrix and a <strong>Raspberry Pi</strong> to build a wall panel that displays scrolling messages and pictures. ' +
            'The software was a simple bash script that converted images and text into a suitable format and displayed ' +
            'it on the matrix.',
    },
    {
        title: 'mpancaldi.web.app',
        id: 'site',
        year: 2020,
        photo: 'assets/images/projects/website.webp',
        repo: 'https://github.com/martapanc/react-gh-pages',
        tags: ['web', 'self'],
        text:
            "This very website :) <br/> Built with ReactJS and later migrated to Typescript, it's also a chance to " +
            'play around with my web development skills and experiment with front-end technologies.',
    },
    {
        title: 'Rentalcars.com Premium',
        id: 'premium',
        year: 2019,
        photo: 'assets/images/projects/noodle.webp',
        pics: 'assets/images/projects/noodle-pics.pdf',
        tags: ['web', 'work'],
        text:
            'As a part of the Graduate Scheme at Booking.com, I joined the team that develops the <strong>"Premium" insurance product</strong>, ' +
            'which offers exclusive benefits to the customer such as skipping the line at the car pickup counter, low deposit ' +
            'and a dedicated helpline to deal with claims. We built the UI in <strong>React</strong>, developing various components (a comparison ' +
            'of the available insurance options for the car details page, a few upsell banners and information sections) that we then ' +
            'integrated in the main webapp.',
    },
    {
        title: 'Web Scraper',
        id: 'scraper',
        year: 2019,
        photo: 'assets/images/projects/zebra.webp',
        repo: 'https://github.com/martapanc/Zebra-Scraper',
        tags: ['python', 'self'],
        text:
            'What to do when your energy supplier offers a live balance of the energy usage in your account and you wish to monitor it ' +
            "to know how much you're spending, but at the same time you don't want to login every few hours? For me it was the perfect " +
            "chance to learn <strong>web scraping</strong> with Python. The result is a script that logs in to my account, calls the supplier's API " +
            'at the desired time intervals and saves the results. A simple task, but a meaningful achievement and a fun way to apply coding ' +
            'skills to a real-life problem.',
    },
    {
        title: 'Daily Programming',
        id: 'daily',
        year: 2019,
        photo: 'assets/images/projects/programming.webp',
        repo: 'https://github.com/martapanc/dailyProgramming',
        tags: ['java', 'self'],
        text:
            'They say "Practice makes perfect", and that\'s why a good programmer should write code every day. <br/>The way I like to practise, when I don\'t ' +
            'have more complex projects to work on, is to pick a coding challenge (e.g. from ' +
            '<a href="https://www.reddit.com/r/dailyprogrammer/" target="_blank">r/dailyProgrammer</a>, ' +
            '<a href="https://www.codewars.com/dashboard/" target="_blank">CodeWars</a>, ' +
            '<a href="https://projecteuler.net/" target="_blank">Project Euler</a>, ' +
            '<a href="https://adventofcode.com/" target="_blank">Advent of Code</a>, ' +
            '...), or simply to think of a problem I want to tackle, and write my solution for it. This repository is a collection of all such challenges.',
    },
    {
        title: 'Twitch-to-Slack notifier',
        id: 'twitch',
        year: 2020,
        photo: 'assets/images/projects/twitch.webp',
        repo: 'https://github.com/martapanc/Twitch-notifier',
        tags: ['python', 'self'],
        text:
            "I never want to miss a live show from my favourite Twitch streamers, and I'm used to grouping notifications " +
            'on Slack channels as a way to organise them. After testing services like Zapier and IFTTT and getting quite dissatisfied ' +
            'with the licence limitations or the lack of customisation, I decided to write my own <strong>cron job in Python</strong>: it ' +
            'queries the <strong>Twitch API</strong> to find which of the streamers I follow goes live and then connects to a ' +
            '<strong>Slack webhook</strong>, displaying a nice-looking message. <br/>Never gonna miss a show again!',
    },
    {
        title: 'All-Star Advent of Code',
        id: 'aoc',
        year: 2021,
        photo: 'assets/images/projects/aoc.webp',
        repo: 'https://github.com/martapanc/Advent-Of-Code',
        tags: ['java', 'kotlin', 'self'],
        text:
            'After participating in the Advent of Code 2020 challenges, I decided to go back and solve all puzzles from the ' +
            "past years. I succeeded in a few weeks, and now I'm quite proud of my shiny 350 stars ⭐&nbsp; — not to " +
            "mention the huge progress I've made with Kotlin and complex algorithms.",
    },
    {
        title: 'Pigeon family cam',
        id: 'pigeons',
        year: 2021,
        photo: 'assets/images/projects/pigeons.webp',
        repo: 'https://github.com/martapanc/pigeon-family-cam',
        tags: ['web', 'self'],
        text:
            'When a couple of pigeons nests on your balcony, what could be better than installing a ' +
            '<strong>RasPi</strong> webcam and broadcasting their lives on the internet?',
    },
];
