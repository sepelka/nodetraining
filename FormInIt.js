

var theScript="";


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

"Name","Address", "Date", "Search", "Email", "Money", "Telephone", "Description", "Color","Password","List"

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
          if (defValue==element)
            htmlField=htmlField+'<option value="'+element+'" selected="selected">'+element+'</option>';
          else
           htmlField=htmlField+'<option value="'+element+'">'+element+'</option>'; 
         })
        htmlField=htmlField+"</select>"+htmlFieldPost;
       }
      else {
        console.log("los valores son los siguientes: "+obj.values1);
        htmlField=htmlFieldPre+'<select name="'+obj.id+'" id="'+obj.id+'"" size="'+obj.fSize+'" '+required+' disabled class="form-control '+validations+" "+dependencies+'"></select>'+htmlFieldPost;
          theScript=theScript+"var arr"+obj.id+"=[];";
        obj.values1.forEach(function (element){
          theScript=theScript+"arr"+obj.id+"['"+element.filter+"']=[";
          for (data in element.values1)
            theScript=theScript+"'"+element.values1[data]+"',";
          theScript=theScript.substring(0, theScript.length - 1)+"];";
        })
        theScript=theScript+"formData['"+obj.id+"']=arr"+obj.id+";";
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

module.exports = {

  getForm : function (form) {
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

}}