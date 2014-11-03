function createWidget(WidgetID) {
  var myForm = require('./FormInIt.js');
  var newWidgetHTML;
  var id=myForm.generateUUID();

  var widgetWrapper = '<div id="'+id+'_Wrap" style="min-width:480px; max-width:800px; margin:auto"><div id="'+id+'_Conf" style="width:90%; margin:auto"><wiiGap1></div><div id="'+id+'_Vis" style="opacity:0"></div></div>';
  switch(WidgetID) {
    case "FiiField":
      var widgetObj = JSON.parse('{"id":"'+id+'", "title":"Widget #Field Configuration", "submit":"http://127.0.0.1:3000/pxField", "methodType":"post", "step" : [{"id": "step1", "group": [{"id": "group1", "field": [{"id":"id", "title":"Id", "description":"This is the internal ID for this field", "type":"name", "required":true, "placeholder":"Id", "fSize":"35"}, {"id":"title", "title":"Titles", "placeholder":"Title", "type":"name", "required":true, "fSize":"35"}, {"id":"description", "title":"Description", "placeholder":"Description", "type":"description", "required":false, "fSize":"35"}, {"id":"placeholder", "title":"Placeholder", "placeholder":"Placeholder", "type":"name", "required":false, "fSize":"35"}, {"id":"type", "title":"Type","placeholder":"select a type", "type":"list", "fSize":"0", "required":true, "values1":["Name","Address", "Date", "Search", "Email", "Money", "Telephone", "Description", "Color","Password","List"]},{"id":"required", "title":"Required","placeholder":"Is this field required?", "type":"list", "fSize":"0", "required":true, "defValue":"false", "values1":["true","false"]},{"id":"fSize", "title":"Size","placeholder":"field Max Size", "type":"name", "fSize":"4", "required":true, "defValue":"100"}, {"id":"defValue", "title":"Default","placeholder":"Type the default value if any", "type":"name", "fSize":"0", "required":false}, {"id":"values", "title":"Values","placeholder":"Each value in a new line", "type":"description", "fSize":"10000", "required":false},{"id":"campo1", "title":"Mi Campo 1", "description":"Este es un campo que pone el filtro", "type":"list", "values1":["US","ES"]}, {"id":"campo2", "title":"Mi Campo 2", "description":"Este es un campo que coge el filtro", "type":"list", "dependencies": {"filterBy": "campo1"}, "values1":[{"filter":"US","values1":["test 1","test 2"]},{"filter":"ES","values1":["test 3","test 4"]}]}]}]}]}');
      break;
  }
    newWidgetHTML=myForm.getForm(widgetObj);
    widgetWrapper.replace("<wiiGap1>",newWidgetHTML);
    return (widgetWrapper.replace("<wiiGap1>",newWidgetHTML));
  }

  module.exports.createWidget= createWidget;