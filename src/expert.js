public class expert {
	var active = false;
	var carOrigins = {{"Honda Civic", "Japanese"},{"Honda Accord", "Japanese"},{"Honda CR-V","Japanese"}}
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
		var arr;
		for(i = 0; i < carOrigins.length; i++){
			if (att == carOrigins[i][1]){
				arr.push(carOrigins[i][0]);
			}
		}
		return arr;
	}
}