
function validate()
{
  
    var name=document.f1.name.value; 
    var email =document.f1.email.value;
    var address =document.f1.address.value;
    var mobile =document.f1.mobile.value;
    var gender=document.f1.gender.value;
    var lang=document.f1.language.value;
    var country=document.f1.country.value;
    var error=document.getElementById('error');
    var status=false;

    if(!email.endsWith('@gmail.com'))
    {
      
        error.innerHTML="<font color=red>Not a Valid gmail ID.";
        status=false;
        return false;
    }
    if(mobile.length<10)
    {
        
        error.innerHTML="<font color=red>Not a Valid Mobile.";
        status=false;
        return false;
    }
    console.log(status);
    return status;
}

