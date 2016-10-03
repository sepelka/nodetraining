
//load all models in models file
var mongoose =require('mongoose');

function Widget(WidgetID) {
  var myForm = require('./FormInIt.js');
  var newWidgetHTML;
  var id=myForm.generateUUID();

<<<<<<< Updated upstream
  var fs = require('fs');
  var pxwidget = require(__dirname + '/models/pxWidFormField');

fs.readdirSync(__dirname + '/models').forEach(function (filename){
  if (~filename.indexOf('.js')) {require(__dirname + '/models/' + filename); console.log("loading: "+__dirname + '/models/' + filename+"\n");};
});


// Attirbutes of a widget: data, type, id, skin

  var widgetWrapper = '<div id="'+id+'_Wrap" style="min-width:480px; max-width:800px; margin:auto"><div id="'+id+'_Conf" style="width:90%; margin:auto"><wiiGap1></div><div class="btn-toolbar" role="toolbar"><button type="button" class="btn btn-default" style="float:right; margin-right:30px;" onclick=\'confWidget("'+id+'")\'><span class="glyphicon glyphicon-cog"></span> <span class="sr-only">Config</span></button><div class="adsSep"></div><form name="'+id+'_VisWrap" id="'+id+'_VisWrap" method="post" class="form-horizontal" role="form"><div id="'+id+'_Vis" style="opacity:0"></div></form></div></div>';
=======
  var widgetWrapper = '<div id="'+id+'_Wrap" style="min-width:480px; max-width:800px; margin:auto"><div id="'+id+'_Conf" style="width:90%; margin:auto"><wiiGap1></div><form name="'+id+'_VisWrap" id="'+id+'_VisWrap" method="post" class="form-horizontal" role="form" style="opacity:0"><div class="btn-toolbar" role="toolbar"><button type="button" class="btn btn-default" style="float:right; margin-right:30px;" onclick=\'confWidget("'+id+'")\'><span class="glyphicon glyphicon-cog"></span> <span class="sr-only">Config</span></button><button type="button" class="btn btn-default" style="float:right; margin-right:5px;" onclick=\'delWidget("'+id+'")\'><span class="glyphicon glyphicon-remove"></span> <span class="sr-only">Delete</span></button><div class="adsSep"></div><div id="'+id+'_Vis"></div></form></div></div>';
>>>>>>> Stashed changes
  switch(WidgetID) {
    case "FiiField":
      //var widgetObj = JSON.parse('{"id":"'+id+'", "title":"Widget #Field Configuration", "submit":"http://127.0.0.1:3000/pxField", "methodType":"post", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"id", "title":"Id", "description":"This is the internal ID for this field", "type":"name", "required":true, "placeholder":"Id", "fSize":"35"}, {"id":"title", "title":"Titles", "placeholder":"Title", "type":"name", "required":true, "fSize":"35"}, {"id":"description", "title":"Description", "placeholder":"Description", "type":"description", "required":false, "fSize":"35"}, {"id":"placeholder", "title":"Placeholder", "placeholder":"Placeholder", "type":"name", "required":false, "fSize":"35"}, {"id":"type", "title":"Type","placeholder":"select a type", "type":"list", "fSize":"0", "required":true, "values1":["Name","Address", "Date", "Search", "Email", "Money", "Telephone", "Description", "Color","Password","List"]},{"id":"required", "title":"Required","placeholder":"Is this field required?", "type":"list", "fSize":"0", "required":true, "defValue":"false", "values1":["true","false"]},{"id":"fSize", "title":"Size","placeholder":"field Max Size", "type":"name", "fSize":"4", "required":true, "defValue":"100"}, {"id":"defValue", "title":"Default","placeholder":"Type the default value if any", "type":"name", "fSize":"0", "required":false}, {"id":"values", "title":"Values","placeholder":"Each value in a new line", "type":"description", "fSize":"10000", "required":false},{"id":"campo1", "title":"Mi Campo 1", "description":"Este es un campo que pone el filtro", "type":"list", "values1":["US","ES"]}, {"id":"campo2", "title":"Mi Campo 2", "description":"Este es un campo que coge el filtro", "type":"list", "dependencies": {"filterBy": "campo1"}, "values1":[{"filter":"US","values1":["test 1","test 2"]},{"filter":"ES","values1":["test 3","test 4"]}]}]}]}]}');
      var widgetObj = JSON.parse('{"id":"'+id+'","title":"Widget #Field Configuration","submit":"http://127.0.0.1:3000/pxField","methodType":"post","step":[{"id":"step1","group":[{"id":"group1","field":[{"id":"id","title":"Id","description":"This is the internal ID for this field","type":"name","required":true,"placeholder":"Id","fSize":"35"},{"id":"title","title":"Titles","placeholder":"Title","type":"name","required":true,"fSize":"35"},{"id":"description","title":"Description","placeholder":"Description","type":"description","required":false,"fSize":"35"},{"id":"placeholder","title":"Placeholder","placeholder":"Placeholder","type":"name","required":false,"fSize":"35"},{"id":"type","title":"Type","placeholder":"select a type","type":"list","fSize":"0","required":true,"values1":["Name","Address","Date","Search","Email","Money","Telephone","Description","Color","Password","List"]},{"id":"required","title":"Required","placeholder":"Is this field required?","type":"list","fSize":"0","required":true,"defValue":"false","values1":["true","false"]},{"id":"fSize","title":"Size","placeholder":"field Max Size","type":"name","fSize":"4","required":true,"defValue":"100"},{"id":"defValue","title":"Default","placeholder":"Type the default value if any","type":"name","fSize":"0","required":false},{"id":"values","title":"Values","placeholder":"Each value in a new line","type":"description","fSize":"10000","required":false},{"id":"campo1","title":"Mi Campo 1","description":"Este es un campo que pone el filtro","type":"list","values1":["US","ES"]},{"id":"campo2","title":"Mi Campo 2","description":"Este es un campo que coge el filtro","type":"list","dependencies":{"filterBy":"campo1"},"values1":[{"filter":"US","values1":["test 1","test 2"]},{"filter":"ES","values1":["test 3","test 4"]}]}],"widgetContainer":[{"id":"pxFormField"}]}],"widgetContainer":[{"id":"pxFormGroup"}]}],"widgetContainer":[{"id":"pxFormStep"}]}');
      var data = new pxwidget({
        id: id,
        title: '',
        description: '',
        type: 'Name',
        skin: '',
        required: '',
        placeHolder: '',
        size: '',
        values: '',
        defValue: ''});

        data.save(function(err){
          if(err){console.log("Error saving widget: "+err);}
          else {console.log("Widget guardardo");} 
        })
      break;
  }
    newWidgetHTML=myForm.getForm(widgetObj);
    widgetWrapper.replace("<wiiGap1>",newWidgetHTML);
    return (widgetWrapper.replace("<wiiGap1>",newWidgetHTML));
  }

  module.exports.Widget= Widget;