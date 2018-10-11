function convertText(){

   var allVars = getUrlVars();
   var name = getUrlVar('name');	
   var char_type = getUrlVar('char_type');
   text_array = splitText(name);
   alert(text_array);

}