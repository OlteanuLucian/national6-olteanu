console.log("I wanna play a game!")

class GameObject{ 
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        this.generateRef();
        //this.move(50, 225)
    }

    generateRef() {
        this.ref = document.createElement("div");
        this.ref.style.width = `${this.width}px`;
        this.ref.style.height = `${this.height}px`;
        this.ref.style.background = "red";
        this.ref.style.position = "absolute";
        this.ref.style.top = 0;
        this.ref.style.left = 0;

        document.getElementById("game-scene").appendChild(this.ref);
    }
    move(x, y){
        this.x = x;
        this.y = y;
        this.ref.style.transform =`translate(${this.x}px, ${this.y}px)`;//muta obiectul dupa aceste coord
    }
}

class Player  extends GameObject {
    constructor() {
        super();//cuvant cheie care apeleaza si constructorul clasei de baza GameObject pe langa constructorul clasei Player
        this.ref.style.background ="blue";
        this.move(50,225);
    }

    moveUp() {
        this.move(this.x, this.y-25);
    }
    moveDown() {
        this.move(this.x, this.y+25);
    }
}

class Obstacle extends GameObject{
    constructor() {
        super();//cuvant cheie care apeleaza si constructorul clasei de baza GameObject pe langa constructorul clasei Player
        this.ref.style.background ="red";
        this.move(1055, 55);
    }
    moveLeft(){
        this.move(this.x-5, this.y)
    };
}

//User  Input
let keyUpPress = false;
let keyDownPress = false;
document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowUp"){
        keyUpPress = true;
    }

    if(event.key ==="ArrowDown"){
        keyDownPress = true;
    }
});

document.addEventListener("keyup", (event) => {
    if(event.key === "ArrowUp"){
        keyUpPress = false;
    }

    if(event.key ==="ArrowDown"){
        keyDownPress = false;
    }
});


///--------------------



//instantiate Player, Obstacle
const player = new Player();
const obstacle = new Obstacle();

//cream un loop pentru miscarea obstacolelor
setInterval(()=>{
    console.log(keyUpPress);
    if(keyUpPress)player.moveUp();
    if(keyDownPress)player.moveDown();

    //moving the obstacles
    obstacle.moveLeft();
},250);
