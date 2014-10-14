getField ('{"id":"sepelka", "description":"this is my description", "type":"description", "required":true, "defValue":"This is the default value", "fSize":"35"}');

function getField (field) {
obj = JSON.parse(field);
var required="";
var size="";
var defValue="";
var htmlField="";

if (obj.required)
  required="required";
if (obj.fSize)
  size='size="'+obj.fSize+'"';	
if (obj.defValue)
  defValue=obj.defValue;

console.log(obj);
switch(obj.type) {
    case "name":
       htmlField=obj.description+': <input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';   
       break;
    case "address":
       htmlField=obj.description+': <input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';   
       break;
    case "date":
       htmlField=obj.description+': <input type="date" name="'+obj.id+'"size="'+obj.fSize+'" '+required+' value="'+defValue+'">';
       break
    case "search":
       htmlField=obj.description+': <input type="search" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';
       break
    case "email":
       htmlField=obj.description+': <input type="email" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';
       break
    case "money":
       htmlField=obj.description+': <input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';
       break
    case "telephone":
       htmlField=obj.description+': <input type="tel" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';
       break
    case "description":
       htmlField=obj.description+': <textarea name="'+obj.id+'" rows="4" cols="50" maxlength="'+obj.fSize+'" '+required+'>'+defValue+'</textarea>';
       break
    case "color":
       htmlField=obj.description+': <input type="color" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' value="'+defValue+'">';
       break
}
console.log(htmlField);
}