// getForm ('{"id":"sepelkaform", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"sepelka", "description":"this is my description", "type":"description", "required":true, "defValue":"This is the default value", "fSize":"35"}, {"id":"sepelka2", "description":"this is my description", "type":"email", "required":true, "defValue":"This is the default value", "fSize":"35"}]}]}]}');

var theScript="";
createPage("sepelkaform.html","./formTemplate.html", '[{"widName":"wiiGap1", "eleName": {"id":"sepelkaform", "title":"Complete your Registration", "submit":"registerHero.php", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"Email", "title":"Email", "description":"Email", "type":"email", "required":false, "defValue":"sepelus@gmail.com", "fSize":"35"},{"id":"Name", "title":"Name", "placeholder":"Name", "type":"name", "required":true, "fSize":"35"},{"id":"Surname", "title":"Surname", "placeholder":"Your Surname", "type":"name", "required":true, "fSize":"35"}, {"id":"Password", "title":"Password", "placeholder":"Your Password", "type":"password", "required":true, "fSize":"35"}, {"id":"Password2", "title":"Re-type password","placeholder":"Re-type your password", "type":"password", "required":true, "fSize":"35", "validations": {"eqTo": {"field" : "Password", "msg":"%S has a different value than %D"}}},{"id":"campo1", "title":"Mi Campo 1", "description":"Este es un campo que pone el filtro", "type":"list", "values1":["US","ES"]},{"id":"campo2", "title":"Mi Campo 2", "description":"Este es un campo que coge el filtro", "type":"list", "dependencies": {"filterBy": "campo1"}, "values1":[{"filter":"US","values1":["test 1","test 2"]},{"filter":"ES","values1":["test 3","test 4"]}]}]}]}]}}]') 

function getDependencies(field, dependencies) {
  var dependencyTags="";

  for (x in dependencies) {
    switch(x){
      case "filterBy": dependencyTags=dependencyTags+"viifiltby%F%"+dependencies[x];break;
    }
  }
  console.log("Estas son las dependencias: "+dependencyTags);
  return(dependencyTags);
}
function getValidations(field, validations) {

  validationTags="";
  valData="";
  //valTo, eqTo, dateMin, dateMax, dateMinTo, dateMaxTo, numMin, numMax, numMinTo, numMaxTo}
  // console.log(validations.length);
  console.log(validations);
  for (x in validations) {
    switch(x){
      case "valTo":
        break;
      case "eqTo":
        validator = validations[x];
        for (prop in validator)
          {
            switch (prop) {
              case "field": validationTags=validationTags+"viieq%F%"+validator[prop];valData=validator[prop];break;
              case "date": validationTags=validationTags+"viieq%D%"+validator[prop];valData=validator[prop];break;
              case "num": validationTags=validationTags+"viieq%N%"+validator[prop];valData=validator[prop];break;
              case "msg": validator[prop].replace("%S",field.title).replace("%D",valData);break;
            }
          }
        break;
      case "min":
        validator = validations[x];
        for (prop in validator)
          {
            switch (prop) {
              case "field": validationTags=validationTags+"viimin%F%"+validator[prop];valData=validator[prop];break;
              case "date": validationTags=validationTags+"viimin%D%"+validator[prop];valData=validator[prop];break;
              case "num": validationTags=validationTags+"viimin%N%"+validator[prop];valData=validator[prop];break;
              case "msg": validator[prop].replace("%S",field.title).replace("%D",valData);break;
            }
          }
        break;
      case "max":
         validator = validations[x];
        for (prop in validator)
          {
            switch (prop) {
              case "field": validationTags=validationTags+"viimax%F%"+validator[prop];valData=validator[prop];break;
              case "date": validationTags=validationTags+"viimax%D%"+validator[prop];valData=validator[prop];break;
              case "num": validationTags=validationTags+"viimax%N%"+validator[prop];valData=validator[prop];break;
              case "msg": validator[prop].replace("%S",field.title).replace("%D",valData);break;
            }
          }
        break;
    }
  }
    return(validationTags);
}

function getField (field) {
var obj = field;

////console.log(obj);
var required, viiReq="";
var size="";
var defValue="";
var htmlField="";
var title="";
var placeholder="";
var validations="";
var dependencies="";

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
if(obj.validations)
   validations=getValidations(obj, obj.validations);
 if(obj.dependencies)
   dependencies=getDependencies(obj, obj.dependencies);

var htmlFieldPre='<div class="form-group" style="width:100%"><label for="'+obj.id+'" class="col-sm-4 control-label">'+title+':</label><div class="col-sm-8">';
var htmlFieldPost='</div></div>';

switch(obj.type) {
    case "name":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;   
       break;
    case "address":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;   
       break;
    case "date":
       htmlField=htmlFieldPre+'<input type="date" name="'+obj.id+'"size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break
    case "search":
       htmlField=htmlFieldPre+'<input type="search" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break
    case "email":
       htmlField=htmlFieldPre+'<input type="email" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control viiemail '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break
    case "money":
       htmlField=htmlFieldPre+'<input type="text" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break
    case "telephone":
       htmlField=htmlFieldPre+'<input type="tel" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break
    case "description":
       htmlField=htmlFieldPre+'<textarea name="'+obj.id+'" rows="4" cols="50" maxlength="'+obj.fSize+'" '+required+' class="form-control '+viiReq+validations+'"">'+defValue+'</textarea>'+htmlFieldPost;
       break
    case "color":
       htmlField=htmlFieldPre+'<input type="color" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control viipwd '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break
    case "password":
       htmlField=htmlFieldPre+'<input type="Password" name="'+obj.id+'" size="'+obj.fSize+'" '+required+' placeholder="'+placeholder+'" value="'+defValue+'" class="form-control '+viiReq+" "+validations+" "+dependencies+'"">'+htmlFieldPost;
       break 
     case "list":
      if (dependencies=="") {
        htmlField=htmlFieldPre+'<select name="'+obj.id+'" id="'+obj.id+'"" size="'+obj.fSize+'" '+required+' class="form-control '+validations+" "+dependencies+'"">';
        console.log("los valores son: "+obj.values1);
        obj.values1.forEach( function(element){
        htmlField=htmlField+'<option value="'+element+'">'+element+'</option>';
         })
        htmlField=htmlField+"</select>"+htmlFieldPost;
       }
      else {
        console.log("los valores son los siguientes: "+obj.values1);
        htmlField=htmlFieldPre+'<select name="'+obj.id+'" id="'+obj.id+'"" size="'+obj.fSize+'" '+required+' disabled class="form-control '+validations+" "+dependencies+'"></select>'+htmlFieldPost;
        theScript=theScript+"var "+obj.id+"FData=[];"
        obj.values1.forEach(function (element){
          theScript=theScript+obj.id+"FData['"+element.filter+"']=[";
          for (data in element.values1)
            theScript=theScript+"'"+element.values1[data]+"',";
          theScript=theScript.substring(0, theScript.length - 1)+"];";
        })
        //theScript=theScript+"var "+obj.id+"FData;"["Saab", "Volvo", "BMW"];
        console.log("que va en el script: "+theScript);
      }
      break;
            
}
//console.log(htmlField+'\n');
return (htmlField);
}

function getGroups(groups) {
  var obj = groups;
  var htmlGroups="";


  for (field in fields=obj.field)
    htmlGroups=htmlGroups+getField(fields[field]);
  //console.log(htmlGroups+'\n');
  return(htmlGroups);
}

function getSteps(steps) {
  var obj = steps;
  //console.log(obj);
  var htmlSteps=""

  for (group in groups=obj.group)
    htmlSteps=htmlSteps+getGroups(groups[group]);
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
  var title="";
  var id="form1";


  if (obj.submit)
    submit=obj.submit;

  if (obj.skin)
    skin=obj.skin;

  if (obj.subMethod)
    method=obj.subMethod;

  if (obj.title)
    description="<legend>"+obj.title+"</legend>";
  


  if (obj.id)
    id=obj.id;
////console.log(obj.step);
for (step in steps=obj.step) 
    htmlForm=htmlForm+getSteps(steps[step]);

htmlForm='<form name="'+id+'" id="'+id+'"method="'+method+'"class="form-horizontal" role="form">'+description+'<div class="viierror viitext">All fields in Yellow are mandatory. Please fill them in to continue.</div><div class="form-group">'+htmlForm+'</div><div style="width:100px;margin:auto"><button class="btn btn-primary" type="button" id="compID">Submit</button></div></form><script>$(\'#compID\').click(function (e) {if (!valInIt(\''+id+'\')){var request=$.ajax({type: "POST", data: $(\'#'+id+'\').serialize(),url: "'+submit+'", dataType: "html"});request.done( function(data) { $("#mainMessage").html(data);$("#SignUp2").hide();$("#SignUp1").hide();})}});</script>';
return(htmlForm+"<script>"+theScript+"</script>");

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