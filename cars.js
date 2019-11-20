function motorsport(image,make,model,color,registrationNumber,price){
	this.image = image;
	this.make  = make;
	this.model = model;
	this.color = color;
	this.registrationNumber = registrationNumber;
	this.price = price; 
};

var img = document.createElement("img");
img.src = "images/1972 skyline GTR.jpg";
var src = document.getElementById("car1");
src.appendChild(img);

var motor1 =
			{
				make:"Nissan",
				model:"1972 Skyline 2000 GTR",
				color:"Silver",
				registrationNumber:"CA 1972",
				price:"R300 000,00",
			};

function race1(){
	alert("Make :" + motor1.make + "\nModel :" +motor1.model + "\nColor :" +motor1.color + "\nRegistration :" +motor1.registrationNumber + "\nPrice :" + motor1.price
		);
}
console.log (motor1)

var img = document.createElement("img");
img.src = "images/1989 skyline R32.jpg";
var src = document.getElementById("car2");
src.appendChild(img);

var motor2 =
			{
				make: "Nissan",
				model: "1989 Skyline GTR R32",
				color: "Carbon Black",
				registrationNumber: "CA 1989",
				price: "R250 000,00",
			};

function race2(){
	alert("Make :" +motor2.make + "\nModel :" +motor2.model + "\nColor :" +motor2.color + "\nRegistration :" +motor2.registrationNumber + "\nPrice :" + motor2.price
		);
}
console.log (motor2)

var img = document.createElement("img");
img.src = "images/1995 skyline R33.jpg";
var src = document.getElementById("car3");
src.appendChild(img);

var motor3 =
			{
				make: "Nissan",
				model: "1995 Skyline GTR R33",
				color: "Silver",
				registrationNumber: "CA 1995",
				price: "R350 000,00",
			};

function race3(){
	alert("Make :" + motor3.make + "\nModel :" +motor3.model + "\nColor :" +motor3.color + "\nRegistration :" +motor3.registrationNumber + "\nPrice :" +motor3.price
		);
}
console.log (motor3)

var img = document.createElement("img");
img.src = "images/1999 skyline R34.jpg";
var src = document.getElementById("car4");
src.appendChild(img);

var motor4 =
			{
				make: "Nissan",
				model: "1999 Skyline GTR R34",
				color: "Silver",
				registrationNumber: "CA 1999",
				price: "R450 000,00",
			};

function race4(){
	alert("Make :" + motor4.make + "\nModel :" +motor4.model + "\nColor :" +motor4.color + "\nRegistration :" +motor4.registrationNumber + "\nPrice :" + motor4.price
		);
}
console.log (motor4)

var img = document.createElement("img");
img.src = "images/2018 skyline R35.jpg";
var src = document.getElementById("car5");
src.appendChild(img);

var motor5 =
			{
				make: "Nissan",
				model: "2018 Skyline GTR R35",
				color: "Orange",
				registrationNumber: "CA 2018",
				price: "R1 000 000,00",
			};

function race5(){
	alert("Make :" + motor5.make + "\nModel :" +motor5.model + "\nColor :" +motor5.color + "\nRegistration :" +motor5.registrationNumber + "\nPrice :" + motor5.price
		);
}
console.log (motor5)