function getStudents()
{
    fetch('http://localhost:3004/students',
    {
        method:'GET',
        headers:{
            'Accept':'application/json'
        }
    })
    .then((response)=>response.json())
    .then(res=>{
        printTable(res);
    });
}

function printTable(data)
{
    var div=document.getElementById('studentTable');
    var table="<table border='3px'>";
    table+="<tr><th>Student ID</th><th>Student Name</th><th>Student Marks</th><th>Edit Details</th><th>Delete Details</th></tr>";
    for(var i=0;i<data.length;i++)
    {
        table+="<tr>";
        table+="<td>"+data[i].id+"</td>";
        table+="<td>"+data[i].name+"</td>";
        table+="<td>"+data[i].marks+"</td>";
        table+="<td><a href=''>Edit</a></td>";
        table+="<td><a href=''>Delete</a></td>";
        table+="</tr>";
    }
    table+="</table>";
    div.innerHTML=table;
}

function addStudent()
{
    fetch('http://localhost:3004/students',
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify()
    });
    window.location.replace('http://127.0.0.1:5500/Week9-Day4Examples/index.html');
}
getStudents();
