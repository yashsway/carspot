var history;
function add(car){
	if (history.length <5){
		history.unshift(car);
	}
	else{
		history.pop();
		history.unshift(car);
	}
}
function test(name){
	return "Hello, " + name + "!";
}
