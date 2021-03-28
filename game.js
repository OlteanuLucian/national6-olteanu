class Spaceship {
    constructor() {
        this.xPosition = 0;
        this.yPosition = 0;
        this.generateHtmlRef();
        this.setMoveSpaceship()
    }
    generateHtmlRef() {
        const spaceship = ['blue_spaceship.png','red_spaceship.png','green_spaceship.png']  
        this.ref = document.createElement("img");
        this.ref.src = spaceship[Math.floor(Math.random() * spaceship.length)];
        this.ref.classList.add("starship");
        document.body.appendChild(this.ref);
    }
    setMoveSpaceship() {
        document.addEventListener("keydown", (event) => {
            newSpaceship.moveSpaceship(event.key)
        });
    }
    moveSpaceship(direction) {
        if (direction === "ArrowRight") {
            this.xPosition += 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        } else if (direction === "ArrowLeft") {
            this.xPosition -= 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        } else if (direction === "ArrowUp") {
            this.yPosition -= 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        } else if (direction === "ArrowDown") {
            this.yPosition += 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        }
    }    
};

let newSpaceship;
document.getElementById('generate-starship').addEventListener('click', function() {
    newSpaceship = new Spaceship();
});