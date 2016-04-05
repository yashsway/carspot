function searchCar(origin, numPass, type, logo){
	if (originExpert.isActive()!=true) {	//if origin expert is inactive, the other three are active
		var numPassCars = passengerExpert.carResults(numPass);	//pass in the variables to each expert and receive array of cars with that attribute
		var typeCars = typeExpert.carResults(type);
		var logoCars = logoExpert.carResults(logo);
		var results = findCars(numPassCars, typeCars, logoCars);	//find the cars that are in all three expert arrays
		/*for (i = 0; i < 3; i++) {	//only loop 3 times maximum as per requirement of 3 attempts
			if (verifyResult(results[i]){	//verify that the car is correct, if so set the identified car variable and break from loop
				var identifiedCar = results[i];
				break;
			}
		}*/
	}
	else if(passengerExpert.isActive()!=true) {	//same as above, just with different 3 active experts
		var originCars = originExpert.carResults(origin);
		var typeCars = typeExpert.carResults(type);
		var logoCars = logoExpert.carResults(logo);
		var results = findCars(originCars, typeCars, logoCars);
		/*for (i = 0; i < 3; i++) {
			if (verifyResult(results[i]){
				var identifiedCar = results[i];
				break;
			}
		}*/
	}
	else if (typeExpert.isActive()!=true) {
		var originCars = originExpert.carResults(origin);
		var numPassCars = passengerExpert.carResults(numPass);
		var logoCars = logoExpert.carResults(logo);
		var results = findCars(originCars, numPassCars, logoCars);
		/*for (i = 0; i < 3; i++) {
			if (verifyResult(results[i]){
				var identifiedCar = results[i];
				break;
			}
		}/*/
	}
	else {
		var originCars = originExpert.carResults(origin);
		var numPassCars = passengerExpert.carResults(numPass);
		var typeCars = typeExpert.carResults(type);
		var results = findCars(originCars, numPassCars, typeCars);
		/*for (i = 0; i < 3; i++) {
			if (verifyResult(results[i]){
				var identifiedCar = results[i];
				break;
			}
		}*/
	}
	//searchHistory.add(identifiedCar);	//add successfully identified car to the search history
	//return identifiedCar;
	return results;
}
function setExperts(origin, numPass, type, logo){	//sets active experts for search algorithm
	if(origin != "") {
		originExpert.setActive();	//if the variable for that expert is non-empty, set that expert as active
	}
	else {
		originExpert.setInactive();	//else, set inactive so that it is not used
	}
	if(numPass != "") {
		passengerExpert.setActive();
	}
	else {
		originExpert.setInactive();
	}
	if(type != "") {
		typeExpert.setActive();
	}
	else {
		originExpert.setInactive();
	}
	if(logo != "") {
		logoExpert.setActive();
	}
	else {
		originExpert.setInactive();
	}
}
function findCars(array1, array2, array3){	//takes the 3 arrays of cars from experts and finds cars common to all 3 arrays
	var results = [];
	for (i=0; i<array1.length(); i++){
		for(j=0; j<array2.length(); j++){
			if (array1[i].equals(array2[j])){
				for(k=0; k<array3.length(); k++){
					if(array1[i].equals(array3[k])){
						results.push(array3[k]);
					}
				}
			}
		}
	}
	return results;
}
/*function verifyResult(result){
	if (//TODO: interface with user, user agrees with the result){
		return true;
	}
	return false;
}*/

function printToConsole(arr){
	for(i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

printToConsole(searchCar("American","5","Truck",""));