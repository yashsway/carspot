var active = false;
var carTypes = [["Honda Civic", "Sedan"],["Honda Accord", "Coupe"],["Honda CR-V","SUV"],["Volkswagon Tiguan","SUV"],["Volkswagon Jetta","Sedan"],["Volkswagon Eos","Coupe"],["Ford Focus","Sedan"],["Ford Escape","SUV"],["Ford Mustang","Coupe"],["Ford Explorer","SUV"],["Chevrolet Cruze","Sedan"],["Chevrolet Silverado","Truck"],["Chevrolet Traverse","SUV"],["Toyota Corolla","Sedan"],["Toyota Tundra","Truck"],["Toyota Sequoia","SUV"],["Dodge Charger","Sedan"],["Dodge Journey","SUV"],["Dodge Grand Caravan","Minivan"],["Mercedez Benz CLS","Coupe"],["Mercedez Benz CLA","Sedan"],["Mercedez Benz GLA","SUV"],["Hyundai Sonata","Sedan"],["Hyundai Tucson","SUV"],["Hyundai Veloster","Coupe"]];
function setActive() {
	active = true;
}
function setInactive() {
	active = false;
}
function isInactive() {
	return active;
}
function carResults (att){
	var arr = [];
	for(i = 0; i < carTypes.length; i++){
		if (att == carTypes[i][1]){
			arr.push(carTypes[i][0]);
		}
	}
	return arr;
}