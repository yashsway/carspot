var active = false;
var carOrigins = [["Honda Civic", "Japanese"],["Honda Accord", "Japanese"],["Honda CRV","Japanese"],["Volkswagon Tiguan","German"],["Volkswagon Jetta","German"],["Volkswagon Eos","German"],["Ford Focus","American"],["Ford Escape","American"],["Ford Mustang","American"],["Ford Explorer","American"],["Chevrolet Cruze","American"],["Chevrolet Silverado","American"],["Chevrolet Traverse","American"],["Toyota Corolla","Japanese"],["Toyota Tundra","Japanese"],["Toyota Sequoia","Japanese"],["Dodge Charger","American"],["Dodge Journey","American"],["Dodge Grand Caravan","American"],["Mercedez Benz CLS","German"],["Mercedez Benz CLA","German"],["Mercedez Benz GLA","German"],["Hyundai Sonata","Korean"],["Hyundai Tucson","Korean"],["Hyundai Veloster","Korean"]];
function setActive() {
	active = true;
}
function setInactive() {
	active = false;
}
function isActive() {
	return active;
}
function carResults (att){
	var arr = [];
	for(i = 0; i < carOrigins.length; i++){
		if (att == carOrigins[i][1]){
			arr.push(carOrigins[i][0]);
		}
	}
	return arr;
}