var active = false;
var carPassengers = [["Honda Civic", "5"],["Honda Accord", "5"],["Honda CR-V","5"],["Volkswagon Tiguan","5"],["Volkswagon Jetta","5"],["Volkswagon Eos","4"],["Ford Focus","5"],["Ford Escape","5"],["Ford Mustang","4"],["Ford Explorer","7"],["Chevrolet Cruze","5"],["Chevrolet Silverado","5"],["Chevrolet Traverse","7"],["Toyota Corolla","5"],["Toyota Tundra","3"],["Toyota Sequoia","8"],["Dodge Charger","5"],["Dodge Journey","7"],["Dodge Grand Caravan","8"],["Mercedez Benz CLS","5"],["Mercedez Benz CLA","5"],["Mercedez Benz GLA","7"],["Hyundai Sonata","5"],["Hyundai Tucson","5"],["Hyundai Veloster","5"]];
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
	for(i = 0; i < carPassengers.length; i++){
		if (att == carPassengers[i][1]){
			arr.push(carPassengers[i][0]);
		}
	}
	return arr;
}