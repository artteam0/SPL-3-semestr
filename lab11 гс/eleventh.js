//1//
class Task {
    constructor(ID_1, Name_1, Compl = false) {
        this.ID_1 = ID_1;
        this.Name_1 = Name_1;
        this.Compl = Compl;
    }

    changeName(newName_1) {
        this.Name_1 = newName_1;
    }

    changeStatus(status) {
        this.Compl = status;
    }

    ToString() {
        let status;
        if (this.Compl) {
            status = "Выполнено";
        } else {
            status = "Не выполнено";
        }        

        return `[ID: ${this.ID_1}, Name: ${this.Name_1}, Status: ${status}]`;
    }
}
//2//
class Todolist {
    constructor(ID_2, Name_2, Method, name) {
        this.name = name;
        this.ID_2 = ID_2;
        this.Name_2 = Name_2;
        this.Method = Method;
        this.Task = [];
    }
    Name(newName) {
        this.Name_2 = newName;
    }

    add(task) {
        this.Task.push(task);
    }

    filt(Compl) {
        return this.Task.filter(task => task.Compl == Compl);
    }

    print() {
        this.Task.forEach(task => console.log(task.ToString()));
    }
}
const todo1 = new Todolist(1, "Работа");
const todo2 = new Todolist(2, "Дом");

const task1 = new Task(1, "Отчёт по охране труда");
const task2 = new Task(2, "Отчёт по экологии");
const task3 = new Task(3, "Отчет по энергоснабжению");
const task4 = new Task(4, "Сделать уборку");
const task5 = new Task(5, "Приготовить ужин");
const task6 = new Task(6, "Погулять с собакой");

todo1.add(task1);
todo1.add(task2);
todo1.add(task3);
todo2.add(task4);
todo2.add(task5);
todo2.add(task6);

task5.changeName("Приготовить обед");
todo1.Name("Work");
console.log(todo1.Name_2);

task1.changeStatus(true);
task2.changeStatus(true);
task4.changeStatus(true);

todo1.print();
todo2.print();

todo1.filt(true).forEach(task => console.log(task.ToString()));
todo2.filt(true).forEach(task => console.log(task.ToString()));