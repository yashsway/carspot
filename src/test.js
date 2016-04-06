var active1 = false;
var carOrigins = [["Honda Civic", "Japanese"],["Honda Accord", "Japanese"],["Honda CR-V","Japanese"],["Volkswagon Tiguan","German"],["Volkswagon Jetta","German"],["Volkswagon Eos","German"],["Ford Focus","American"],["Ford Escape","American"],["Ford Mustang","American"],["Ford Explorer","American"],["Chevrolet Cruze","American"],["Chevrolet Silverado","American"],["Chevrolet Traverse","American"],["Toyota Corolla","Japanese"],["Toyota Tundra","Japanese"],["Toyota Sequoia","Japanese"],["Dodge Charger","American"],["Dodge Journey","American"],["Dodge Grand Caravan","American"],["Mercedez Benz CLS","German"],["Mercedez Benz CLA","German"],["Mercedez Benz GLA","German"],["Hyundai Sonata","Korean"],["Hyundai Tucson","Korean"],["Hyundai Veloster","Korean"]];
function setActive1() {
	active1 = true;
}
function setInactive1() {
	active1 = false;
}
function isActive1() {
	return active1;
}
function carResults1 (att){
	var arr = [];
	for(i = 0; i < carOrigins.length; i++){
		if (att == carOrigins[i][1]){
			arr.push(carOrigins[i][0]);
		}
	}
	return arr;
}

var active2 = false;
var carTypes = [["Honda Civic", "Sedan"],["Honda Accord", "Coupe"],["Honda CR-V","SUV"],["Volkswagon Tiguan","SUV"],["Volkswagon Jetta","Sedan"],["Volkswagon Eos","Coupe"],["Ford Focus","Sedan"],["Ford Escape","SUV"],["Ford Mustang","Coupe"],["Ford Explorer","SUV"],["Chevrolet Cruze","Sedan"],["Chevrolet Silverado","Truck"],["Chevrolet Traverse","SUV"],["Toyota Corolla","Sedan"],["Toyota Tundra","Truck"],["Toyota Sequoia","SUV"],["Dodge Charger","Sedan"],["Dodge Journey","SUV"],["Dodge Grand Caravan","Minivan"],["Mercedez Benz CLS","Coupe"],["Mercedez Benz CLA","Sedan"],["Mercedez Benz GLA","SUV"],["Hyundai Sonata","Sedan"],["Hyundai Tucson","SUV"],["Hyundai Veloster","Coupe"]];
function setActive2() {
	active2 = true;
}
function setInactive2() {
	active2 = false;
}
function isActive2() {
	return active2;
}
function carResults2 (att){
	var arr = [];
	for(i = 0; i < carTypes.length; i++){
		if (att == carTypes[i][1]){
			arr.push(carTypes[i][0]);
		}
	}
	return arr;
}

var active3 = false;
var carPassengers = [["Honda Civic", "5"],["Honda Accord", "5"],["Honda CR-V","5"],["Volkswagon Tiguan","5"],["Volkswagon Jetta","5"],["Volkswagon Eos","4"],["Ford Focus","5"],["Ford Escape","5"],["Ford Mustang","4"],["Ford Explorer","7"],["Chevrolet Cruze","5"],["Chevrolet Silverado","5"],["Chevrolet Traverse","7"],["Toyota Corolla","5"],["Toyota Tundra","3"],["Toyota Sequoia","8"],["Dodge Charger","5"],["Dodge Journey","7"],["Dodge Grand Caravan","8"],["Mercedez Benz CLS","5"],["Mercedez Benz CLA","5"],["Mercedez Benz GLA","7"],["Hyundai Sonata","5"],["Hyundai Tucson","5"],["Hyundai Veloster","5"]];
function setActive3() {
	active3 = true;
}
function setInactive3() {
	active3 = false;
}
function isActive3() {
	return active3;
}
function carResults3 (att){
	var arr = [];
	for(i = 0; i < carPassengers.length; i++){
		if (att == carPassengers[i][1]){
			arr.push(carPassengers[i][0]);
		}
	}
	return arr;
}

var active4 = false;
var carMakes = [["Honda Civic", "Honda"],["Honda Accord", "Honda"],["Honda CR-V","Honda"],["Volkswagon Tiguan","Volkswagon"],["Volkswagon Jetta","Volkswagon"],["Volkswagon Eos","Volkswagon"],["Ford Focus","Ford"],["Ford Escape","Ford"],["Ford Mustang","Ford"],["Ford Explorer","Ford"],["Chevrolet Cruze","Chevrolet"],["Chevrolet Silverado","Chevrolet"],["Chevrolet Traverse","Chevrolet"],["Toyota Corolla","Toyota"],["Toyota Tundra","Toyota"],["Toyota Sequoia","Toyota"],["Dodge Charger","Dodge"],["Dodge Journey","Dodge"],["Dodge Grand Caravan","Dodge"],["Mercedez Benz CLS","Mercedez Benz"],["Mercedez Benz CLA","Mercedez Benz"],["Mercedez Benz GLA","Mercedez Benz"],["Hyundai Sonata","Hyundai"],["Hyundai Tucson","Hyundai"],["Hyundai Veloster","Hyundai"]];
function setActive4() {
	active4 = true;
}
function setInactive4() {
	active4 = false;
}
function isActive4() {
	return active4;
}
function carResults4 (att){
	var arr = [];
	for(i = 0; i < carMakes.length; i++){
		if (att == carMakes[i][1]){
			arr.push(carMakes[i][0]);
		}
	}
	return arr;
}

function setExperts(origin, numPass, type, logo){	//sets active experts for search algorithm
	if(origin != "") {
		setActive1();	//if the variable for that expert is non-empty, set that expert as active
	}
	else {
		setInactive1();	//else, set inactive so that it is not used
	}
	if(numPass != "") {
		setActive3();
	}
	else {
		setInactive3();
	}
	if(type != "") {
		setActive2();
	}
	else {
		setInactive2();
	}
	if(logo != "") {
		setActive4();
	}
	else {
		setInactive4();
	}
}

function findCars(array1, array2, array3){	//takes the 3 arrays of cars from experts and finds cars common to all 3 arrays
	var results = [];
	for (i=0; i<array1.length; i++){
		for(j=0; j<array2.length; j++){
			if (array1[i]==array2[j]){
				for(k=0; k<array3.length; k++){
					if(array1[i]==array3[k]){
						results.push(array3[k]);
					}
				}
			}
		}
	}
	return results;
}

function searchCar(origin, numPass, type, logo){
	setExperts(origin, numPass, type, logo);
	if (isActive1()!=true) {	//if origin expert is inactive, the other three are active
		var numPassCars = carResults3(numPass);	//pass in the variables to each expert and receive array of cars with that attribute
		var typeCars = carResults2(type);
		var logoCars = carResults4(logo);
		var results = findCars(numPassCars, typeCars, logoCars);	//find the cars that are in all three expert arrays
	}
	else if(isActive3()!=true) {	//same as above, just with different 3 active experts
		var originCars = carResults1(origin);
		var typeCars = carResults2(type);
		var logoCars = carResults4(logo);
		var results = findCars(originCars, typeCars, logoCars);
	}
	else if (isActive2()!=true) {
		var originCars = carResults1(origin);
		var numPassCars = carResults3(numPass);
		var logoCars = carResults4(logo);
		var results = findCars(originCars, numPassCars, logoCars);
	}
	else {
		var originCars = carResults1(origin);
		var numPassCars = carResults3(numPass);
		var typeCars = carResults2(type);
		var results = findCars(originCars, numPassCars, typeCars);
	}
	return results;
}

function printToConsole(arr){
	for(i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

printToConsole(searchCar("Japanese","","SUV","Honda"));