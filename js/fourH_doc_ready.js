/*!
4H Doc Ready Class 01, written by Sherrod Blankner, Phlebas Consulting

 */

    //set up interactions
    $( document ).ready(function() { 	
    
    	/*
    	$( "#binary_submit" ).click(function() {
    		 alert(IBM_json);
		});	
		
	$( "#binary_submit" ).click(function() {
    	   text_array = splitText(name);
		   alert(text_array);
		});	
		*/
		
		
		//get the vars from the query string
		var allVars = getUrlVars();
		var name = getUrlVar('name');	
		var char_type = getUrlVar('char_type');
		//set the values of the form to the values you submitted
		$("#name").val(name);
		$("#char_type").val(char_type);
		
		
		
		$( "#assembly_submit" ).click(function() {
		   document.getElementById("assembly").submit()
		   location.reload();
		});	
		
		convertText();
		
		/*
		//function to handle submit on the assembly form
		$( "#binary_submit" ).click(function() {
		 
		   /
		 
		   //split the text into characters
		   text_array = splitText(name);
		   alert(text_array);	
		   	  
		  
		   //event.preventDefault();
		});
		*/
    
    });