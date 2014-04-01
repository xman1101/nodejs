
function Hello() {
	var name;

	this.getName = function() {
		console.log("Hello " + name);
	};
	
	this.setName = function(_name) {
		name = _name;
	};
}

/*
exports.sayHello = function() {
	console.log("Hello everyone");
}
*/
Hello.prototype.sayHello = function() {
	console.log("Hello everyone");
}
//module.exports = Hello;
exports.Hello = Hello;
