// getForm ('{"id":"sepelkaform", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"sepelka", "description":"this is my description", "type":"description", "required":true, "defValue":"This is the default value", "fSize":"35"}, {"id":"sepelka2", "description":"this is my description", "type":"email", "required":true, "defValue":"This is the default value", "fSize":"35"}]}]}]}');

createPage("sepelkaform.html","./formTemplate.html", '[{"widName":"wiiGap1", "eleName": {"id":"sepelkaform", "description":"This is the description of my form", "submit":"registerHero.php", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"Email", "title":"Email", "description":"Email", "type":"email", "required":false, "defValue":"sepelus@gmail.com", "fSize":"35"},{"id":"Name", "title":"Name", "placeholder":"Name", "type":"name", "required":true, "fSize":"35"},{"id":"Surname", "title":"Surname", "placeholder":"Your Surname", "type":"name", "required":true, "fSize":"35"}, {"id":"Password", "title":"Password", "placeholder":"Your Password", "type":"password", "required":true, "fSize":"35"}, {"id":"Password2", "title":"Re-type password","placeholder":"Re-type your password", "type":"password", "required":true, "fSize":"35"}, {"id":"sepelka", "description":"this is my description", "type":"description", "required":false, "defValue":"This is the default value", "fSize":"35"}]}]}]}}]') 

function getField (field) {
var obj = field;

////console.log(obj);
var required, viiReq="";
var size="";
var defValue="";
var htmlField="";
var title="";
var placeholder="";

if (obj.required)
{ required="required"; viiReq="vii";}
if (obj.fSize)
  size='size="'+obj.fSize+'"';	
if (obj.defValue)
  defValue=obj.defValue;
if (obj.title)
  title=obj.title;
if (obj.placeholder)
  placeholder=obj.placeholder;

var htmlFieldPre='<div class="form-group" style="width:100%"><label for="'+obj.id+'" class="col-sm-4 control-label">'+title+':</label><div class="col-sm-8">';
var htmlFieldPost='</div></div>';
switch(obj.type) {
    case "name":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;   
       break;
    case "address":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;   
       break;
    case "date":
       htmlField=htmlFieldPre+'<input type="date" name="'+obj.id+'"size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;
       break
    case "search":
       htmlField=htmlFieldPre+'<input type="search" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;
       break
    case "email":
       htmlField=htmlFieldPre+'<input type="email" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control viiemail '+viiReq+'">'+htmlFieldPost;
       break
    case "money":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;
       break
    case "telephone":
       htmlField=htmlFieldPre+'<input type="tel" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;
       break
    case "description":
       htmlField=htmlFieldPre+'<textarea name="'+obj.id+'" rows="4" cols="50" maxlength="'+obj.fSize+'" '+required+' class="form-control '+viiReq+'">'+defValue+'</textarea>'+htmlFieldPost;
       break
    case "color":
       htmlField=htmlFieldPre+'<input type="color" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control viipwd '+viiReq+'">'+htmlFieldPost;
       break
    case "password":
       htmlField=htmlFieldPre+'<input type="Password" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+'">'+htmlFieldPost;
       break   
}
//console.log(htmlField+'\n');
return (htmlField);
}

function getGroups(groups) {
  var obj = groups;
  var htmlGroups="";


  for (field in fields=obj.field)
    htmlGroups=htmlGroups+getField(fields[field])+"<br>";
  //console.log(htmlGroups+'\n');
  return(htmlGroups);
}

function getSteps(steps) {
  var obj = steps;
  //console.log(obj);
  var htmlSteps=""

  for (group in groups=obj.group)
    htmlSteps=htmlSteps+getGroups(groups[group])+"<br>";
  //console.log(htmlSteps+'\n');
  return(htmlSteps);
}

function getForm(form) {
  //obj = JSON.parse(form);

  var obj = form;
  var submit="";
  var method="get";
  var skin="fII_Form";
  var htmlForm="";
  var description="";
  var id="form1";


  if (obj.submit)
    submit=obj.submit;

  if (obj.skin)
    skin=obj.skin;

  if (obj.subMethod)
    method=obj.subMethod;

  if (obj.description)
    description="<legend>"+obj.description+"</legend>";
  
  if (obj.id)
    id=obj.id;
////console.log(obj.step);
for (step in steps=obj.step) 
    htmlForm=htmlForm+getSteps(steps[step])+"<br>";

htmlForm='<form name="'+id+'" id="'+id+'"method="'+method+'"class="form-horizontal" role="form">'+description+'<div class="viierror viitext">All fields in Yellow are mandatory. Please fill them in to continue.</div><div class="form-group">'+htmlForm+'</div><div style="width:100px;margin:auto"><button class="btn btn-primary" type="button" id="compID">Submit</button></div></form><script>$(\'#compID\').click(function (e) {if (!valInIt(\''+id+'\')){var request=$.ajax({type: "POST", data: $(\'#'+id+'\').serialize(),url: "'+submit+'", dataType: "html"});request.done( function(data) { $("#mainMessage").html(data);$("#SignUp2").hide();$("#SignUp1").hide();})}});</script>';
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