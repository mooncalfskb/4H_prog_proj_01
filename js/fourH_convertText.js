function convertText(IBM_json, char_type_defs){

   var new_str = new String();

   var allVars = getUrlVars();
   var name = getUrlVar('name');	
   var name = fixName(name);

   var char_type = getUrlVar('char_type');
   text_array = splitText(name);
   
   var arrayLength = text_array.length;
   for (var i = 0; i < arrayLength; i++) {
    my_char = text_array[i];
    	if (IBM_json.hasOwnProperty(my_char)) {
			console.log(my_char + " -> " + IBM_json[my_char][char_type]);
			new_str = new_str + IBM_json[my_char][char_type];
		}
		
	//Do something
	}
	
	var html = new String();
	var html = "<h3>" + name + " in " + char_type + "</h3>";
	var html = html + "<p>" + new_str + "</p>";
	var html = html + "<p></p>";
	var html = html + "<p>" + char_type_defs[char_type] + "</p>";
	
	$( "#Answer" ).html(html);

}

function fixName(name){
   var name = name.replace(/\+/g, ' ');
   var name = decodeURIComponent(name);
   return name

}

/*
 IBM_json = [{}{"ASCII":"A","Decimal":"65","Hex":"41","Octal":"101","Binary":"1000001"},{"ASCII":"B","Decimal":"66","Hex":"42","Octal":"102","Binary":"1000010"}];	
[{"ASCII":"A","Decimal":"65","Hex":"41","Octal":"101","Binary":"1000001"},{"ASCII":"B","Decimal":"66","Hex":"42","Octal":"102","Binary":"1000010"}];
*/