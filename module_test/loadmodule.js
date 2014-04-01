var my_module = require("./module");

var hello = new (my_module.Hello)();
hello.setName("hahahaha");
hello.getName();
//my_module.sayHello();
hello.sayHello();
