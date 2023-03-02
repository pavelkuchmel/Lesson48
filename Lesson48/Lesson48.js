/*class Apple {
    constructor(type, weight) {
        this.type = type;
        this.weight = weight;
    }
    print(){
        console.log("Type: " + this.type + " Weight: " + this.weight + "\n");
    }
}*/
/*
class wine {
    constructor(name, type, quantity) {
        this._name = name;
        this._type = type;
        this._quantity = quantity;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    toString(){
        return "Name: " + this.name + " Type: " + this.type + " Quantity: " + this.quantity;
    }

    countLiters(){
        return this.quantity * 0.7;
    }
}

let pinkWine = new wine();
pinkWine.name = "Pink paradise";
pinkWine.type = "Pink wine";
pinkWine.quantity = 19;

let arrayWines = [pinkWine, new wine("Sweet dream", "White wine", 92), new wine("Blood of dragon", "Red wine", 73)]

arrayWines.forEach(a => console.log(a.toString() + " Liters: " + a.countLiters()));*/
class Person{
    constructor(firstName, surName, secondName, bornDate) {
        this.firstName = firstName;
        this.surName = surName;
        this.secondName = secondName;
        this.bornDate = bornDate;
    }
    toString(){
        return "Name: " + this.firstName + " Surname: " + this.surName + " Secondname: " + this.secondName + " Born date: " + this.bornDate;
    }
    age(){
        const bornDate = new Date(this.bornDate);
        const currentDate = new Date();
        console.log("bornDate: " + bornDate);
        console.log("currentDate: " + currentDate);
        const deltaTime = currentDate - bornDate;
        return Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
    }
}
class Teacher extends Person{
    #subjects;

    constructor(firstName, surName, secondName, bornDate, subjects) {
        super(firstName, surName, secondName, bornDate);
        this._subjects = subjects.split(",");
    }


    get subjects() {
        return this._subjects;
    }

    getListSubjects(){
        let html = + '<ul>';
        for (let i = 0; i < this._subjects.length; i++){
            html += '<li>' + this._subjects[i] + '</li>';
        }
        html += '</ul>';
        return html;
    }
}

let person = new Person("Pavel", "Koutchmel", "Victor", "2/15/1993");
var teacher = new Teacher("Pavel", "Nikifirov", "Leonid", "5/12/1970", "Java, C++, C#, Arduino");
console.log(person.toString() + " Age: " + person.age());
console.log(teacher.toString() + " Age: " + teacher.age());

document.getElementById("h1").innerText = teacher.toString();
document.getElementById('ul').innerHTML = teacher.getListSubjects();
