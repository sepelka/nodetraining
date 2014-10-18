// ValInIt, by Sepelka
var email1 = new RegExp("^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");
var email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var pwd1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
var pwd = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;
var num = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;

var msgs={
"required" : "All fields in Yellow are mandatory. Please fill them in to continue.",
"valTo" : "",
"eqTo" : "%S has a different value than %D",
"Min" : "%S has to be higher than %L",
"Max" : "%S has to be lower than %L",
"MinTo" : "%S has to be higher than %D",
"MaxTo" : "%S has to be lower than %D"
}

function inputKO(elementID){
	$(elementID).removeClass( "viitext" );
    $(elementID).addClass( "viiShowTime" );	
}

function inputOK(elementID){
  $(elementID).addClass( "viitext" );
  $(elementID).removeClass( "viiShowTime" );		
}

function addCorrection (inputID, type) {
	$(inputID).addClass( "viiInputCorrection" );
	inputKO("#"+type+inputID.name);
	removeMandatory  (inputID);
	return (true);	
}
function addMandatory (inputID){
	$(inputID).addClass( "viiInputMandatory" );
	inputKO("#vii"+inputID.name);
	removeCorrection (inputID);
	return (true);	
}

function removeMandatory  (inputID){
	$(inputID).removeClass( "viiInputMandatory" );
	inputOK("#vii"+inputID.name);
}

function removeCorrection (inputID){
	$(inputID).removeClass( "viiInputCorrection" );
	if ($(inputID).is("[class*='vii']"))
	$($(inputID).attr('class').split(' ')).each(function() {
		if (this.match("^viieq")){
	      inputOK("#viieq"+inputID.name);}
		else if (this.match("^vii")){ 
		  inputOK("#"+this+inputID.name);}
	});	
}
function removeError(inputID){
	removeMandatory  (inputID);
	removeCorrection (inputID);
	}

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
			    viiST=addMandatory (this);
			  else
			    removeError(this);
			}
		   else
			{
			   if ($(this).hasClass("viiemail"))
		        {
			      if (email.test($(this).val()))
			       removeError(this);
			      else
			       viiCrST=addCorrection (this,"viiemail");
				}
			   else
			    {
			      if ($(this).hasClass("viipwd"))
		            {
			          if (pwd.test($(this).val()))
			           removeError(this);
			          else
			           viiCrST=addCorrection (this,"viipwd");
					 }
					else
					 {   
					   if ($(this).hasClass("viinum"))
		                {
			              if (num.test($(this).val()))
			                removeError(this);
			              else
			                viiCrST=addCorrection (this,"viinum");
		                 }
					    else
						 {
						  if ($(this).is("[class*='viieq']"))
						   {
						     myInput=this;
							 $($(this).attr('class').split(' ')).each(function() {
			                 if (this.match("^viieq")){
			                   if (this.substring(5,1)!="%" || this.substring(5,3)=="%F%"){
							     if ($(myInput).val()==$("#"+this.substring(5).replace("%F%","")).val())
							       removeError(myInput);
							     else
							       viiCrST=addCorrection (myInput,"viieq");}}
							 });
						   }
						  else 
					       removeError(this);
						 }
		              }
			     }
		   } 	
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
