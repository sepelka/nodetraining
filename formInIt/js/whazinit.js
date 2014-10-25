// JavaScript Document
function formValidation()
 {
   validate=true;

   $.each(MandatoryFields, function(index, value) {
    if ($('#'+value).val()=="")
     {
       $('#ctl'+value).addClass("error");
	   //$('.help-inline', $('#ctl'+value)).show();
	   $('#'+value).focus();
	   validate=false
	 }
    else
     {
       $('#ctl'+value).removeClass("error");
	   //$('.help-inline', $('#ctl'+value)).hide();
     } 
});
	$.each(validationFileds, function(index, value) { 
	 if ($("label.error", $('#ctl'+value)).css('display') == 'block')
      {
       $('#ctl'+value).addClass("warning");
	  // $('.help-inline', $('#ctl'+value)).show();
	   $('#'+value).focus();
	   validate=false
	  }
    else
      {
       $('#ctl'+value).removeClass("warning");
	  // $('.help-inline', $('#ctl'+value)).hide();
      } 
});

   if (validate) 
    {
//	 alert("submitiendo");
//	 $('food').submit();
	}
 }