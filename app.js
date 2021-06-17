var http = require('http');
const request = require('request');
//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
 if(url ==='/results'){
    
    var urls = 'https://www.omdbapi.com/?i='+ 'tt1285016' +'&apikey=ee3b843f';
    request(urls, function(error, response, body){
        if(!error && response.statusCode == 200){
            res.write(body);
        }
    });
 }else{
    res.write('<h1>Search For a Movie</h1>' +
        '<form action="/results" method="get">' +
	    '<input type="text" name="search" placeholder="search term">' +
	    '<input type="submit">' +
	    '</form>'
    );
    res.end(); //end the response
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});

