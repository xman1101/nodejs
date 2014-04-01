var btn = new Array();　
var subbtn = new Array();

var subbtn1 = {
	"type": "click",
	"name": "1111"
}
var subbtn2 = {
	"type": "click2",
	"name": "222"
}
var subbtn3 = {
	"type": "click3",
	"name": "3333",
}

subbtn[0] = subbtn1;
subbtn[1] = subbtn2;
subbtn[2] = subbtn3;

var button1 = {
	"type": "click",
	"name": "1111"
}
var button2 = {
	"type": "click2",
	"name": "222"
}
var button3 = {
	"type": "click3",
	"name": "3333",
	"subbutton": subbtn
}
btn[0] = button1;
btn[1] = button2;
btn[2] = button3;

var menu = {
	"button": btn
}
var str = JSON.stringify(menu); 
console.log(str); 
