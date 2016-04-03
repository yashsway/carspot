public class carSearchControl{
	function searchCar(origin, numPass, type, logo){
		if (originExpert.isActive()!=true) {
			var numPassCars = passengerExpert.carResults(numPass);
			var typeCars = typeExpert.carResults(type);
			var logoCars = logoExpert.carResults(logo);
			var results = findCars(numPassCars, typeCars, logoCars);
			for (i = 0; i < 3; i++) {
				if (verifyResult(results[i]){
					var identifiedCar = results[i];
					break;
				}
			}
		}
		else if(passengerExpert.isActive()!=true) {
			var originCars = originExpert.carResults(origin);
			var typeCars = typeExpert.carResults(type);
			var logoCars = logoExpert.carResults(logo);
			var results = findCars(originCars, typeCars, logoCars);
			for (i = 0; i < 3; i++) {
				if (verifyResult(results[i]){
					var identifiedCar = results[i];
					break;
				}
			}
		}
		else if (typeExpert.isActive()!=true) {
			var originCars = originExpert.carResults(origin);
			var numPassCars = passengerExpert.carResults(numPass);
			var logoCars = logoExpert.carResults(logo);
			var results = findCars(originCars, numPassCars, logoCars);
			for (i = 0; i < 3; i++) {
				if (verifyResult(results[i]){
					var identifiedCar = results[i];
					break;
				}
			}
		}
		else (logoExpert.isActive()) {
			var originCars = originExpert.carResults(origin);
			var numPassCars = passengerExpert.carResults(numPass);
			var typeCars = typeExpert.carResults(type);
			var results = findCars(originCars, numPassCars, typeCars);
			for (i = 0; i < 3; i++) {
				if (verifyResult(results[i]){
					var identifiedCar = results[i];
					break;
				}
			}
		}
		return identifiedCar;
	}
	function setExperts(origin, numPass, type, logo){
		if(origin != "") {
			originExpert.setActive();
		}
		else {
			originExpert.setInactive();
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
	function findCars(array1, array2, array3){
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
	function verifyResult(result){
		if (//user agrees with the result){
			return true;
		}
		return false;
	}
}