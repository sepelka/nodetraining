// getForm ('{"id":"sepelkaform", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"sepelka", "description":"this is my description", "type":"description", "required":true, "defValue":"This is the default value", "fSize":"35"}, {"id":"sepelka2", "description":"this is my description", "type":"email", "required":true, "defValue":"This is the default value", "fSize":"35"}]}]}]}');

createPage("sepelkaform.html","./formTemplate.html", '[{"widName":"wiiGap1", "eleName": {"id":"sepelkaform", "description":"This is the description of my form", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"sepelka", "description":"this is my description", "type":"description", "required":true, "defValue":"This is the default value", "fSize":"35"}, {"id":"sepelka2", "description":"this is my description", "type":"email", "required":true, "defValue":"This is the default value", "fSize":"35"}]}]}]}}]') 

function getField (field) {
obj = field;

////console.log(obj);
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

var htmlFieldPre='<div class="form-group" style="width:100%"><label for="'+obj.id+'" class="col-sm-4 control-label">'+obj.description+':</label><div class="col-sm-8">';
var htmlFieldPost='</div></div>';
switch(obj.type) {
    case "name":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;   
       break;
    case "address":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;   
       break;
    case "date":
       htmlField=htmlFieldPre+'<input type="date" name="'+obj.id+'"size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;
       break
    case "search":
       htmlField=htmlFieldPre+'<input type="search" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;
       break
    case "email":
       htmlField=htmlFieldPre+'<input type="email" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;
       break
    case "money":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;
       break
    case "telephone":
       htmlField=htmlFieldPre+'<input type="tel" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;
       break
    case "description":
       htmlField=htmlFieldPre+'<textarea name="'+obj.id+'" rows="4" cols="50" maxlength="'+obj.fSize+'" '+required+' class="form-control vii">'+defValue+'</textarea>'+htmlFieldPost;
       break
    case "color":
       htmlField=htmlFieldPre+'<input type="color" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+obj.description+'" value="'+defValue+'" class="form-control vii">'+htmlFieldPost;
       break
}
//console.log(htmlField+'\n');
return (htmlField);
}

function getGroups(groups) {
  obj = groups;
  var htmlGroups="";


  for (field in fields=obj.field)
    htmlGroups=htmlGroups+getField(fields[field])+"<br>";
  //console.log(htmlGroups+'\n');
  return(htmlGroups);
}

function getSteps(steps) {
  obj = steps;
  //console.log(obj);
  var htmlSteps=""

  for (group in groups=obj.group)
    htmlSteps=htmlSteps+getGroups(groups[group])+"<br>";
  //console.log(htmlSteps+'\n');
  return(htmlSteps);
}

function getForm(form) {
  //obj = JSON.parse(form);

  obj = form;
  var submit="";
  var method="get";
  var skin="fII_Form";
  var htmlForm="";
  var description="";


  if (obj.submit)
    submit="action="+obj.submit;

  if (obj.skin)
    skin=obj.skin;

  if (obj.subMethod)
    method=obj.subMethod;

  if (obj.description)
    description="<legend>"+obj.description+"</legend>"
  
////console.log(obj.step);
for (step in steps=obj.step) 
    htmlForm=htmlForm+getSteps(steps[step])+"<br>";

htmlForm='<form name="'+obj.id+'" '+submit+' method="'+method+'"class="form-horizontal" role="form">'+description+'<div class="form-group">'+htmlForm+'</div></form>';
return(htmlForm);

}

function createHTML(Template, Widgets) {
  var newPage;
  var widgetsObj = JSON.parse(Widgets);
  widgetsObj.forEach(function (obj, index) {
    newPage=Template.replace("<"+obj.widName+">", getForm(obj.eleName));
  })
  return newPage;
}

function createPage(PageName, TemplateFile, Widgets) {
 fs=require('fs');
  fs.readFile(TemplateFile, {encoding:'utf8'}, function (err, data) {
    if (err) throw err;
    newPageHTML=createHTML(data, Widgets);
    fs.writeFile(PageName, newPageHTML, function (err) {
      if (err) throw err;
      console.log('File '+PageName+' has been created!');
    });
  });
  //console.log(newPageHTML);
}