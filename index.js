console.log("Javascript OOP Game")

//recap:

//object literal
//this comes from Object class
const obj = {};
const a = new Object();
console.log(a);

//this comes from Array CLass
const b =[];

class Car{
    constructor(color){
        this.color=color;    
    }
    startCar(){
        console.log("Start Car");
    }
}
//extends ia tot ce are clasa Car si adauga la CarWithElectricWindows 
class CarWithElectricWindows  extends Car{
    openElectricWindows(windowNr) {
        console.log("Opening window ", windowNr);
    }
}

const car1 = new Car("white");
console.log(car1);
const car2 = new CarWithElectricWindows("black");
console.log(car2);
car2.startCar();
car2.openElectricWindows(3);