console.log("JavaScript-OOP")

const car1 = {
      nrOfWheels:4,
      color: "red",
      engine: "diesel",
      runningEngine: false,
      turn: function(direction){
            if(this.runningEngine){
      
            console.log("The car is turning", direction);
      }else{
            console.log("The car is not running, turn the engine on");
      
      }
},
      startEngine: function(){
            console.log(this);//este context sensitive; returneaza o lista de referinte a obiectului car
            console.log("The engine runs");
            this.runningEngine = true;
      },
};
//car.startEngine();


//const func = car.startEngine;
//func();//returneaza un Window, nivel global

//---this---, in contextul unei metode reprezonta obiectul curent


const car2 = {
      nrOfWheels:4,
      color: "blue",
      engine: "electric",
      runningEngine: false,
      turn: function(direction){
            if(this.runningEngine){
      
            console.log("The car is turning", direction);
      }else{
            console.log("The car is not running, turn the engine on");
      
      }
},
      startEngine: function(){
            console.log(this);//este context sensitive; returneaza o lista de referinte a obiectului car
            console.log("The engine runs smoothly");
            this.runningEngine = true;
      },
};
car1.turn("left");
car1.startEngine();
car1.turn("left");

//Classes

class Car{
      constructor(color, engine){
            this.noOfWheels = 4;
            this.color = color;
            this.engine = engine;
            this.runningEngine = false; 
      }
      turn(direction){
            if(this.runningEngine){
            
                  console.log("The car is turning", direction);
            }else{
                  console.log("The car is not running, turn the engine on");
            }
      }
            startEngine(){
                  console.log(this);//este context sensitive; returneaza o lista de referinte a obiectului car
                  console.log("The engine runs smoothly");
                  this.runningEngine = true;
      }
}
    

const car3 = new Car("yellow", "hybrid");//creata din clasa Car
const car4 = new Car ("black", "petrol");
console.log(car3);
console.log(car3.color);
car3.startEngine();
console.log(car3);
car3.color="green";
console.log(car3);

console.log(car4);
car4.nrOfDoors = 2;//adaugare atribut 
console.log(car4);
console.log(car3);
console.log(Car.color);//undefined deoarece clasele nu au atribute in mod direct

///varianta let
let vehicle; 
const typeOfVehicle = "car";
      if (typeOfVehicle === "car"){
            vehicle = new Car();
      }else{
            vehicle = new Bike();
      }

class Bike{};  


// document.getElementById("generate-car").addEventListener("click", () => {
//       console.log("generate car");
// 	const newCar = new Car();//instantiation newCar este o instanta a clasei Car
// });