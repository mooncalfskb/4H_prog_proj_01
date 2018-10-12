/* 
This function processes the query string for javascript 
Returns all key-pairs
*/
function getUrlVars() {
	  var vars = [], hash;
	  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	  for(var i = 0; i < hashes.length; i++)
	  {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	  }
	  return vars;
}

/* 
This function returns the value of the key you are looking for from the query string.
*/
function getUrlVar(name){
	return getUrlVars()[name];
}


function splitText(text){
	var res = text.split("");
	return res;
}

