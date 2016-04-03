public class searchHistory{
	var history = [];
	function add(var car){
		if (history.length <5){
			history.unshift(car);
		}
		else{
			history.pop();
			history.unshift(car);
		}
	}
	function displayHistory(){
		var text;
		for(i = 0; i < history.length; i++){
			text += (i+1) + ". " + history[i] + "<br>";
		}
		return text;
	}
}
