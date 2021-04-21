var http = require("http");

//Options to be used by request
var options = {
	host: "localhost",
	port: "8081",
	path:"/index.htm"
};

//Callback function is used to deal with response
var callback = function(response){
	//Continously update stream with data
	var body = "";
	respose.on("data", function(data){
		body += data;
	});

	response.on("end", function(){
		//Data received completely.
		console.log(body);
	});
}
//Make a request to the server
var req = http.request(options, callback);
req.end();