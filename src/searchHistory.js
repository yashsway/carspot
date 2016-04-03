public class searchHistory{
	var history = [];
	function add(car){
		if (history.length <5){	//if array not full, prepends new car to array
			history.unshift(car);
		}
		else{	//if history already full, removes 5th element and prepends new car to array
			history.pop();
			history.unshift(car);
		}
	}
	function displayHistory(){	//quick display method, may or may not be needed
		var text;
		for(i = 0; i < history.length; i++){
			text += (i+1) + ". " + history[i] + "<br>";
		}
		return text;
	}
}
