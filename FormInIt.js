getForm ('{"id":"sepelkaform", "step" : {"id": "step1", "group": {"id": "group1", "field": {"id":"sepelka", "description":"this is my description", "type":"description", "required":true, "defValue":"This is the default value", "fSize":"35"}}}}');

function getField (field) {
obj = field;
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
console.log("htmlField: "+htmlField+"\n");
return(htmlField);
}

function getGroups(groups) {
  obj = groups;

  var fields=getField(obj.field);
  
  var headerGroups=""

  htmlGroups=fields;
  console.log("htmlGroups: "+htmlGroups+"\n");
  return(htmlGroups);
}

function getSteps(steps) {
  obj = steps;

  var groups=getGroups(obj.group);
  
  var headerStep=""

  htmlSteps=groups;
  console.log("htmlSteps: "+htmlSteps+"\n");
  return(htmlSteps);
}

function getForm(form) {
  obj = JSON.parse(form);

  var submit="";
  var method="get";
  var skin="fII_Form";


  if (obj.submit)
    submit="action="+obj.submit;

  if (obj.skin)
    skin=obj.skin;

  if (obj.subMethod)
    method=obj.subMethod;
  
var steps=getSteps(obj.step);
htmlForm='<form name="'+obj.id+'" '+submit+' method="'+method+'">'+steps+'</form>';
console.log(htmlForm);

}