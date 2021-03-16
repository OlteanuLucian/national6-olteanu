console.log("Car generator");
document.getElementById("generate-car").addEventListener("click", () => {
      console.log("generate car");
	const newCar = new Car();
});

class CarAuto {
	constructor() {
		this.runningEngine = false;
		this.position = 0;
		this.generateHtmlRef();
		this.setStartEngine();
		this.setMoveCar();
	}
	generateHtmlRef() {
        this.ref = document.createElement("img");
		this.ref.src = "car.svg";
		this.ref.classList.add("car");
		document.body.appendChild(this.ref);
	}

	setStartEngine(){
		this.ref.addEventListener("click", ()=>{
			this.startEngine();
		});
	}

	startEngine(){
		if(!this.runningEngine){
			this.runningEngine = true;
			console.log("Engine started");
			this.ref.classList.add("car--started");
		}
	}
	setMoveCar(){
		document.addEventListener("keydown", (event) => {
			console.log(event);//keyboard event
			if(this.runningEngine){
				this.moveCar(event.key);
			}
		});
	}

	moveCar(direction) {
		if(direction==="ArrowRight"){
			//this.position = this.position +5;
			this.position += 5;
			this.ref.style.marginLeft = `${this.position}px`;
		}else if(direction === "ArrowLeft"){
			this.position -= 5;
			this.ref.style.marginLeft = `${this.position}px`
		}
	}
}
