var net = require('net');

var client = new net.Socket();
client.connect(8000, "localhost", function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log(data.toString().trim());
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on("error", function(err){
	console.log("Connection closed with error");	
});