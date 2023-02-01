import { School } from '../../../../../shared/models/School';

export const SchoolData: School[] = [
    {
        icon: 'assets/images/schools/uom.webp',
        title: 'University of Manchester',
        url: 'https://www.cs.manchester.ac.uk/',
        subtitle: 'MSc in Advanced Computer Science',
        flag: 'assets/images/flags/uk.svg',
        grade: 'Distinction',
        begin: 2017,
        end: 2018,
        items: [
            'Specialised in Software Engineering: programming, Agile and TDD, design patterns and components',
            'Elective courses in Data Engineering and IT Governance',
            'MSc dissertation project on building automated assessment tools for programming exercises',
        ],
    },
    {
        icon: 'assets/images/schools/unibz.webp',
        title: 'Free University of Bolzano',
        url: 'https://www.unibz.it/en/faculties/computer-science/',
        subtitle: 'BSc in Computer Science',
        flag: 'assets/images/flags/it.svg',
        grade: '106 / 110',
        begin: 2014,
        end: 2017,
        items: [
            'The only Italian university that offers a BSc in Computer Science taught in English',
            'Trilingual teaching ( ' +
                '<img src="assets/images/flags/uk.svg" alt="uk" width="25px"/> ' +
                '<img src="assets/images/flags/it.svg" alt="it" width="25px"/> ' +
                '<img src="assets/images/flags/de.svg" alt="de" width="25px"/> ) ' +
                'with an international curriculum',
            "Among the ten world's best small universities (Times Higher Education 2017)",
        ],
    },
    {
        icon: 'assets/images/schools/cofc.webp',
        title: 'College of Charleston',
        url: 'https://compsci.cofc.edu/',
        subtitle: 'Exchange Semester',
        flag: 'assets/images/flags/us.svg',
        grade: 'GPA 4.0',
        begin: 2015,
        end: 2016,
        items: [
            'Funded by the UniBZ "Erasmus+/Overseas" scholarship for international studies',
            'Main courses: Software Engineering, Networks, Statistical Methods, Discrete Maths and Calculus',
            'Principal Oboe of the College orchestra',
        ],
    },
    {
        icon: 'assets/images/schools/peri.webp',
        title: '"A. Peri" Music School',
        url: 'https://peri-merulo.it/',
        subtitle: 'Diploma in Oboe',
        flag: 'assets/images/flags/it.svg',
        grade: '',
        begin: 2003,
        end: 2015,
        items: [
            'Masterclass with Luca Vignali, oboist at Rome Opera House',
            'Several local events, with the school’s orchestra or chamber groups',
            'Performances in Rome, Milan and other cities as part of the System of Italian Youth Orchestras',
        ],
    },
];

export default SchoolData;
