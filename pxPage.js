function createHTML(Template, Widgets) {
  var myForm = require('./FormInIt.js');
  var newPage;
  var widgetsObj = JSON.parse(Widgets);
  widgetsObj.forEach(function (obj, index) {
    newPage=Template.replace("<"+obj.widName+">", "<script>var formData=[];;</script>"+myForm.getForm(obj.eleName));
  })
  return newPage;
}

module.exports = {
  createPage: function (PageName, TemplateFile, Widgets) {
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
}}