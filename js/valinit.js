// ValInIt, by Sepelka
var email1 = new RegExp("^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");
var email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var pwd1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
var pwd = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;


function valInIt(formID) {
    // get all the inputs into an array.
    var $inputs = $('#'+formID+' :input');
    viiST =false;
	viiCrST = false;
    //Check on every input in the form.
    $inputs.each(function() {
		viiInputST="NVal";
		   if ($(this).val()=="")
		    {
		      if ($(this).hasClass("vii"))
		      {
			    $(this).addClass( "viiInputMandatory" );
			    viiInputST="vii";
			  }
			  else
			    $(this).removeClass( "viiInputMandatory" );
				$(this).removeClass( "viiInputCorrection" );
			}
		   else
			{
			   if ($(this).hasClass("viiemail"))
		        {
			      if (email.test($(this).val()))
			       {  
			         $(this).removeClass( "viiInputCorrection" );
					 $(this).removeClass( "viiInputMandatory" );		 
			       }
			      else
			       {
			         $(this).addClass( "viiInputCorrection" );
			         viiInputST="viiemail";
				   }
				}
			   else
			    {
			      if ($(this).hasClass("viipwd"))
		            {
			          if (pwd.test($(this).val()))
			           {
					     $(this).removeClass( "viiInputCorrection" );
					     $(this).removeClass( "viiInputMandatory" );	   
			           }
			          else
			           {
			             $(this).addClass( "viiInputCorrection" );
			             viiInputST="viipwd";
					   }
					 }
					else
					 {   
					   if ($(this).hasClass("viinum"))
		                {
			              if (pwd.test($(this).val()))
			                {  
			                  $(this).removeClass( "viiInputCorrection" );
					          $(this).removeClass( "viiInputMandatory" );	 
			                }
			              else
			                {
			                  $(this).addClass( "viiInputCorrection" );
			                  viiInputST="viinum";
			                 }
		                  }
						else
						 {
					       $(this).removeClass( "viiInputCorrection" );
					       $(this).removeClass( "viiInputMandatory" );	  
			             }
		              }
			       }
		        } 
		if (viiInputST!="NVal")
		 { 
		   $("#"+viiInputST+this.name).removeClass( "viitext" );
		   $("#"+viiInputST+this.name).addClass( "viiShowTime" );
		   if (viiInputST=="vii")
		     viiST=true;
		   else
		     viiCrST=true;
		 }
	    else
		 {
		   $("#"+viiInputST+this.name).removeClass( "viiShowTime" );
		   $("#"+viiInputST+this.name).addClass( "viitext" ); 
		 }		
    });
	
	var $inputs = $('input[class^="viieq"]');
	$inputs.each(function()
	 {
		 
	 });
	
	if (viiST==true)
	 {$('#'+formID+' .viierror').addClass("viiShowTime");}
	else
	 {$('#'+formID+' .viierror').removeClass("viiShowTime");}
	if (viiCrST==true)
	 {$('#'+formID+' .viicorrection').addClass("viiShowTime");}
	else
	 {$('#'+formID+' .viicorrection').removeClass("viiShowTime");}
	 
	return (viiST || viiCrST);
};
