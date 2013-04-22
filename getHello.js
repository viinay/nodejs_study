//var Hello  =require("./singleObject.js").Hello;
var Hello  = require("./Hello.js");

var hello  = new Hello();

hello.setName("lycandjava") ; 
hello.sayHello();

var hello2  = new Hello()	;
hello2.setName(" nodejs ");
hello2.sayHello();
