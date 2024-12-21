//1//
let square = {
    shape: "Square",
    color: "Yellow",
    width: 10,
    height: 10
};

let littleSquare = {
    __proto__: square,
    width: 2,
    height: 2
}
console.log(littleSquare.color);
console.log(littleSquare.shape);
console.log(littleSquare.width);
console.log(littleSquare.height);

let circle = {
    shape: "Circle",
    color: "White",
    radius: 5
};

let greenCircle = {
    __proto__: circle,
    color: "Green",
};
console.log(greenCircle.shape);
console.log(greenCircle.color);
console.log(greenCircle.radius);

let triangle = {
    shape: "Triangle",
    color: "White",
    numOfLines: 1
};

let threeLinesTriangle = {
    __proto__: triangle,
    numOfLines: 3
};

console.log(threeLinesTriangle.shape);
console.log(threeLinesTriangle.color);
console.log(threeLinesTriangle.numOfLines);
//2//
class Human {
    constructor(firstName, lastName, birthYear, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.address = address;
    }

    get age() {
        const currYear = new Date().getFullYear();
        return currYear - this.birthYear;
    }

    set age(Age) {
        const currYear = new Date().getFullYear();
        this.birthYear = currYear - Age;
    }

    updateAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(firstName, lastName, birthYear, address, faculty, course, group, recordBook) {
        super(firstName, lastName, birthYear, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBook = recordBook;
    }

    Course(newCourse) {
        this.course = newCourse;
    }

    Group(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFacultyCode() {
        return this.recordBook.toString().charAt(0);
    }
}

class Faculty {
    constructor(name, groupCount, studentsCount) {
        this.name = name;
        this.groupCount = groupCount;
        this.studentsCount = studentsCount;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        this.studentsCount++;
    }

    updateGroupCount(newGroupCount) {
        this.groupCount = newGroupCount;
    }

    updateStudentCount(newStudentCount) {
        this.studentsCount = newStudentCount;
    }

    getDev() {
        return this.students.filter(student => {
            const specCode = student.recordBook.toString().charAt(1);
            return specCode === '3';
        }).length;
    }

    getGroupe(groupName) {
        return this.students.filter(student => student.group === groupName);
    }
}

let student1 = new Student("Артём",   "Кулешов",     2005, "П.Панченко 74-44",     "ФИТ",  2,  "8",  711232806);
let student2 = new Student("Арсений", "Рауба",       2006, "пр.Машерова 35-79",    "ФИТ",  2,  "7",  711234501);
let student3 = new Student("Кирилл",  "Дмитроченко", 2006, "Ангарская 8-4",        "ФИТ",  2,  "8",  731132902);
let student4 = new Student("Илья",    "Старовойтов", 2005, "пр.Держинского 48-35", "ФИТ",  2,  "7",  731232802);
let student5 = new Student("Антон",   "Луцкий",      2005, "Свердлова 13а-324",    "ФИТ",  2,  "8",  711232803);

let FIT = new Faculty("Факультет информационных технологий", 10);

FIT.addStudent(student1);

FIT.addStudent(student2);
FIT.addStudent(student3);
FIT.addStudent(student4);
FIT.addStudent(student5);
console.log("Возраст: ", student1.age=25);

console.log("Имя и Фамилия студента:", student1.getFullName());
console.log("Факультет:", student1.faculty);
console.log("Курс студента:", student1.course);
console.log("Шифр факультета из номера зачетки:", student1.getFacultyCode());

student1.Course(1);
student1.Group(9);
console.log("Новый курс студента:", student1.course);
console.log("Новая группа студента:", student1.group);

console.log("Количество студентов ДЭВИ на факультете:", FIT.getDev());
console.log("Студенты специальности ДЭВИ:");
FIT.students.filter(student => student.recordBook.toString().charAt(1) === '3').forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты специальности ПОИТ:");
FIT.students.filter(student => student.recordBook.toString().charAt(1) === '1').forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты группы 7:");
FIT.getGroupe("7").forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты группы 8:");
FIT.getGroupe("8").forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});

console.log("Студенты группы 9:");
FIT.getGroupe("9").forEach(student => {
    console.log(`${student.getFullName()}, Курс: ${student.course}, Группа: ${student.group}`);
});