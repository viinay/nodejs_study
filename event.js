var EventEmitter  = require("events").EventEmitter;
var event  =  new EventEmitter();

event.on("some_event", function () {
	console.log('some_event occured.');
})
event.on("create",function(data){
	console.log("create" +data )
})
setTimeout(function(){
	event.emit("some_event");
	event.emit("create","aaa")
},1000);