function authenticate()
{
    var loginId=document.getElementById('loginId').value;
    var password=document.getElementById('password').value;
    // in-memory authentication
    if(loginId === "Ratna" && password==="Ratna@123")
    {
        location.replace("http://127.0.0.1:5500/HCL_JavaScript/EmployeeProject/dashboard.html");
    }
    else
    {
        alert('Incorrect Credentials....');
    }
}