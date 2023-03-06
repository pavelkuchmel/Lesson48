class Task1{
    constructor(brand, model, year, avgSpeed) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.avgSpeed = avgSpeed;
    }

    showCarInfo(){
        return "Brand: " + this.brand + " Model: " + this.model + " Year of manufactured: " + this.year + " AVG Speed: " + this.avgSpeed;
    }

    calcTimeCoverDistance(kilometers){
        if (kilometers / this.avgSpeed < 4) {
            return kilometers / this.avgSpeed;
        }
        else {
            return kilometers / this.avgSpeed + Math.floor((kilometers / this.avgSpeed) / 4);
        }
    }
}
class Task2{
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
}
class Task3{
    constructor(hours, minutes, seconds) {
        this.seconds = seconds + minutes * 60 + hours * 3600;
    }
    showTime(){
        let curr = this.seconds;
        if (curr >= 86400) console.log("days = " + Math.floor(curr / 86400) + " hours = " + Math.floor((curr % 86400) / 3600) + " minutes = " + Math.floor((curr % 3600) / 60) + " seconds = " + (curr % 60));
        else console.log("hours = " + Math.floor((curr % 86400) / 3600) + " minutes = " + Math.floor((curr % 3600) / 60) + " seconds = " + (curr % 60));
    }
    setSecond(seconds){
        this.seconds += seconds;
    }
    setMinutes(minutes){
        this.seconds += minutes * 60;
    }
    setHour(hours){
        this.seconds += hours * 3600;
    }
}
let task3 = new Task3(23, 59, 10);
task3.showTime();
task3.setSecond(51);
task3.showTime();
task3.setMinutes(12);
task3.showTime();
task3.setHour(10);
task3.showTime();
task3.setHour(15);
task3.showTime();
