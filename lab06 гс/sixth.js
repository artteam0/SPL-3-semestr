//task1//
const num = [1, 2, 3];
const [a] = num;
console.log(a);
//task2//
const user = { name: 'Artsiom', age: 18, university: 'BSTU' };
const admin = { group: 8, ...user };
console.log(admin);
//task3//
let store = {
    state: {
        profilePage: {
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
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [],
    },
};

const {
    state: {
        profilePage: { posts },
        dialogsPage: { dialogs, messages },
    },
} = store;

posts.forEach((post) => console.log(post.likesCount));

const Id = dialogs.filter((dialog) => dialog.id % 2 === 0);
console.log(Id);

const Messages = messages.map((msg) => ({ ...msg, message: 'HelloUser' }));
console.log(Messages);
//task4//
let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "REACTJS", isDone: false },
    { id: 4, title: "REST API", isDone: false },
    { id: 5, title: "GRAPHQL", isDone: false },
];

let task6 = { id: 6, title: "RUBY", isDone: true };

const task = [...tasks, task6];

console.log(task);
//task5//
function sumValues(x, y, z) {
    return x + y + z;
}
const Num = [1, 2, 3];
const res = sumValues(...Num);

console.log(res);