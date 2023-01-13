function init()
{
    // Accessing Form elements by root navigation
    document.forms[0].loginId.value="Enter Your Registered Login ID";

    //Accessing Form elements by its name[if assigned]
    var fields=document.getElementsByName('password');
    fields[0].style.backgroundColor="green";
    fields[1].style.backgroundColor="blue";

    var paras=document.getElementsByClassName('odd');
    console.log('There are '+paras.length+" Odd Paragraphs available on Webpage..");

    paras=document.getElementsByClassName('even');
    console.log('There are '+paras.length+" Even Paragraphs available on Webpage..");

    paras=document.getElementsByTagName('p');
    console.log('There are '+paras.length+" Paragraphs available on Webpage..");
}
function submitForm()
{
    var id=document.getElementById('lid').value;
    var pwd=document.getElementById('pwd').value;
    var cpwd=document.getElementById('cpwd').value;
    var email=document.getElementById('email').value;
    if(id.length<=0)
       alert("Login Id Can't be Left Blank");
    if(pwd.length < 8 )
       alert('Password Must be of atleast 8 char long.');
    if(cpwd.length>8)
    {
        if(pwd !== cpwd)
            alert('Password And Confirm Password Must be the same');
    } 
    if(email.length>0 && email.endsWith('@gmail.com'))
        createWindow(id);
    else
        alert('Not a Valid Gmail ID');
}
function createWindow(lid)
{
    var w=window.open('',"Registration Confirmation", 'height=300,width=300,scrollbars=yes');
    w.document.writeln('<h1>Registration successful.....');
    w.document.writeln('Your Register Id is <b>'+lid+'</b> Use it for further communication..');
    w.focus();
}