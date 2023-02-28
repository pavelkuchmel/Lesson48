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
    constructor(firstName, lastName, secondName, bornDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.secondName = secondName;
        this.bornDate = bornDate;
    }
    toString(){
        return "Name: " + this.firstName + " " + this.lastName + " " + this.secondName + " Born date: " + this.bornDate;
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

    constructor(firstName, lastName, secondName, bornDate, subjects) {
        super(firstName, lastName, secondName, bornDate);
        this._subjects = subjects;
    }


    get subjects() {
        return this._subjects;
    }
}

let person = new Person("Pavel", "Koutchmel", "Victor", "2/15/1993");
let teacher = new Teacher("Pavel", "Nikifirov", "Secondname", "5/12/1970", "Java, C++, C#, Arduino");
console.log(person.toString() + " Age: " + person.age());
console.log(teacher.toString() + " Age: " + teacher.age() + " Subjects: " + teacher.subjects);

document.getElementById("h1").innerText = teacher.toString();

/*01
$(document).ready(function(){
02
var link_massiv = {"fl_FIO_soc_google": "websearch_queries1",
03
                   "fl_FIO_google": "websearch_queries2",
04
                   "fl_IF_soc_google": "websearch_queries3",
05
                   "fl_IF_google": "websearch_queries4",
06
                   "fl_FIO_soc_ya": "websearch_queries5",
07
                   "fl_FIO_ya": "websearch_queries6",
08
                   "fl_IF_soc_ya": "websearch_queries7",
09
                   "fl_IF_ya": "websearch_queries8",
10
                   "email1": "websearch_queries9",
11
                   "email2": "websearch_queries10",
12
                   "tl": "websearch_queries11",
13
                   "tl_soc": "websearch_queries12",
14
                   "tl_ya": "websearch_queries13",
15
                   "tl_ya_soc": "websearch_queries14"};
16

17
var ul = document.createElement('ul');
18
    for (elem in link_massiv){
19
        var li = document.createElement('li');
20
        var a = document.createElement('a');
21
        $(a).appendTo(li);
22
        $(a).attr('href',link_massiv[elem]);
23
        $(a).text(elem);
24
        $(li).appendTo(ul);
25
    }
26
$(ul).appendTo('body');
27
});
*/