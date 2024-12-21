//1//
let user = {
    name: 'Masha',
    age: 21
};
//2//
let numbers = [1, 2, 3];
//3//
let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
//4//
let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
//5//
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
]
//6//
let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
//7//
let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 },
        ]
    }
};
console.log("Исходный объект user5:");
console.log(user5);
//8//
let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                math: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};
console.log("Исходный объект user6:");
console.log(user6);
//9//
let user7 = {
    name: 'masha',
    age: 10,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                math: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pagesNumber: 3 },
                        { title: "About CSS", pagesNumber: 5 },
                        { title: "About JavaScript", pagesNumber: 1 },
                    ]
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pagesNumber: 3 },
                        { title: "About CSS", pagesNumber: 5 },
                        { title: "About JavaScript", pagesNumber: 1 },
                    ]
                }
            },
        ]
    }
};
console.log("Исходный объект user7:");
console.log(user7);
let copy = user7.studies.exams[0].name="Artsiom";
console.log(copy);
//10//
let store = {
    state: {
        profilePages: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Victor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [],
    },
}
console.log("Исходный объект store:");
console.log(store);

//first//
let userCopy = { ...user };
let numbersCopy = [...numbers];
let user1Copy = { ...user1, location: { ...user1.location } };
let user2Copy = { ...user2, skills: [...user2.skills] };
let arrayCopy = array.map(item => ({ ...item }));
let user4Copy = { ...user4, studies: { ...user4.studies, exams: { ...user4.studies.exams } } };
let user5Copy = {...user5, studies: {...user5.studies, department: { ...user5.studies.department }, exams: user5.studies.exams.map(exam => ({ ...exam }))}};
console.log("После глубокого копирования user5:");
console.log(user5Copy);

let user6Copy = {...user6, studies: {...user6.studies, department: { ...user6.studies.department }, exams: user6.studies.exams.map(exam => ({ ...exam, professor: { ...exam.professor }}))}};
console.log("После глубокого копирования user6:");
console.log(user6Copy);

let user7Copy = {...user7, studies: {...user7.studies, department: { ...user7.studies.department }, exams: user7.studies.exams.map(exam => ({...exam, professor: {...exam.professor, articles: exam.professor.articles.map(article => ({ ...article }))}}))}};
console.log("После глубокого копирования user7:");
console.log(user7Copy);

let storeCopy = {...store, state: {...store.state, profilePages: {...store.state.profilePages, posts: store.state.profilePages.posts.map(post => ({ ...post }))}, dialogsPage: {...store.state.dialogsPage, dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })), messages: store.state.dialogsPage.messages.map(message => ({ ...message }))}, sidebar: [...store.state.sidebar]}};
console.log("После глубокого копирования store:");
console.log(storeCopy);
//second//
user5Copy.studies.department.group = 15;
console.log("После изменения группы в user5Copy:");
console.log(user5Copy);

user5Copy.studies.exams.find(exam => exam.programming).mark = 10;
console.log("После изменения оценки по программированию в user5Copy:");
console.log(user5Copy);
//third//
user6Copy.studies.exams[0].professor.name = 'Artsiom Aliakseevich';
console.log("После изменения имени профессора в user6Copy:");
console.log(user6Copy);
//fourth//
let petrProfessor = user7Copy.studies.exams.find(exam => exam.programming).professor;
let aboutCSSArticle = petrProfessor.articles.find(article => article.title === 'About CSS');
aboutCSSArticle.pagesNumber = 3;
console.log("После изменения количества страниц в статье 'About CSS' в user7Copy:");
console.log(user7Copy);
//fifth//
storeCopy.state.dialogsPage.messages.forEach(message => message.message = 'Hello');
console.log("После изменения всех сообщений в storeCopy:");
console.log(storeCopy);