



var btn = document.getElementById("btn");
var swapiDiv = document.getElementById("info"); // will be used to dump the api data into the page


// two parameter - what im looking for and what it will do
btn.addEventListener("click", function() {
	
	var ourRequest = new XMLHttpRequest();
	

	// This will open the connection and allow us to get some data 
	// The first parameter is what we want to do (ex retrieve data, send data)
	// The second parameter will be the json url
	ourRequest.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");
	
	// need the send() to send the request to the API
	ourRequest.send();
	
	// using a anonymous function (no name) to assign the value to ourRequest once its loaded
	ourRequest.onload = function() {
		
		// console.log(ourRequest.responseText);
		// the JSON.parse() lets our app know how to render this as a JSON and not just text
		// this lets us retrieve the data using the key and value pairs or index if an array
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};

	
	
});



//creating a new method to render the data to my HTML page
function renderHTML(data) {
	for(i=0;i< data.complete.length;i++){
		var htmlString = "<p>" + data.complete[i].firstName + data.complete[i].lastName + " " + "invented " + data.complete[i].innovation + "</p>";
		swapiDiv.insertAdjacentHTML("beforeend", htmlString);
		
	}
}