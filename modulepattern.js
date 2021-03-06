// module pattern sample

// very simple logging function
function log(message){
	if(typeof console != "undefined"){
		console.log(message);
	}
}

// IIFE - Immediately Invoked Function Expression (avoid creating global variables)
(function(){
	var createPerson = function(){

		var firstLanguage = function(){
			log("Hi");
		};

		var secondLanguage = function(){
			log("Hola");
		};

		return {
			speakEnglish : firstLanguage, 
			speakSpanish : secondLanguage
		};
	};

// sample usage
var person = createPerson(); 

person.speakEnglish(); 
person.speakSpanish(); 

}());