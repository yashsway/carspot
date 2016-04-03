public class searchHistory{
	var history;
	function add(var car){
		if (history.length <5){
			history.unshift(car);
		}
		else{
			history.pop();
			history.unshift(car);
		}
	}
	//do we need function to output the cars?
}