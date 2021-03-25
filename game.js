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
        this.ref.style.background = "red";
        this.move(1055, 55);
    }
    moveLeft(){
        this.move(this.x-5, this.y)
    };
}

//generatorul de obstacole
class ObstacleFactory {
    constructor() {
        this.obstacles = [];
    }

    createObstacle() {
        const obstacle = new Obstacle();
        obstacle.move(1060, Math.floor(Math.random() * 450));
        this.obstacles.push(obstacle);        
    }
    //making obstacles disappear outside the scene
    destroyObstacles() {
        this.obstacles = this.obstacles.filter((obstacle)=> {
            if (obstacle.x < -50) {
                obstacle.removeRef();//sterge obiectul JS
                return false;
            }

            return true;
        });
    }

    moveObstacles(){
            for(const obstacle of this.obstacles) {
            obstacle.moveLeft();
        }
    }   
    //removeRef distruge obiectul HTML. acesta se distruge inaintea oboectului JS
    removeRef() {
        this.ref.remove();
    }
}

///collision detection

function collisionDetection(player, obstacles) {
    for(const obstacle of obstacles) {
        
        if ((player.x >= (obstacle.x - obstacle.width)) &&
            ((player.x + player.width) >= obstacle.x) && 
            (player.y <= (obstacle.y + obstacle.height)) && 
            ((player.y + player.height) >= obstacle.y) )   
        return true;
    }

    return false;
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
//const obstacle = new Obstacle();
const obstacleFactory=new ObstacleFactory();



//-GAME LOOP----cream un loop pentru miscarea obstacolelor
let count = 0;

let gameLoop = setInterval(()=>{
    console.log(keyUpPress);

    if(keyUpPress)player.moveUp();
    if(keyDownPress)player.moveDown();
    if (count % 10 === 0)obstacleFactory.createObstacle();
    //moving the obstacles
//     obstacle.moveLeft();
// }, 250);//setInterval apeleaza functia la fiecare 250 milisec

obstacleFactory.moveObstacles();

if(collisionDetection (player, obstacleFactory.obstacles)) {
    clearInterval(gameLoop);
    alert("You have been hit");
    window.location = "/";
}

obstacleFactory.destroyObstacles();
count++;
}, 100);
