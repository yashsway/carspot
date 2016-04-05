var active = false;
var carMakes = [["Honda Civic", "Honda"],["Honda Accord", "Honda"],["Honda CR-V","Honda"],["Volkswagon Tiguan","Volkswagon"],["Volkswagon Jetta","Volkswagon"],["Volkswagon Eos","Volkswagon"],["Ford Focus","Ford"],["Ford Escape","Ford"],["Ford Mustang","Ford"],["Ford Explorer","Ford"],["Chevrolet Cruze","Chevrolet"],["Chevrolet Silverado","Chevrolet"],["Chevrolet Traverse","Chevrolet"],["Toyota Corolla","Toyota"],["Toyota Tundra","Toyota"],["Toyota Sequoia","Toyota"],["Dodge Charger","Dodge"],["Dodge Journey","Dodge"],["Dodge Grand Caravan","Dodge"],["Mercedez Benz CLS","Mercedez Benz"],["Mercedez Benz CLA","Mercedez Benz"],["Mercedez Benz GLA","Mercedez Benz"],["Hyundai Sonata","Hyundai"],["Hyundai Tucson","Hyundai"],["Hyundai Veloster","Hyundai"]];
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
	for(i = 0; i < carMakes.length; i++){
		if (att == carMakes[i][1]){
			arr.push(carMakes[i][0]);
		}
	}
	return arr;
}
