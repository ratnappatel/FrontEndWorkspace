function getAssignedTasks()
{
    var d=document.getElementById('data');
    fetch('./data/assignedTasks.json')
    .then((response)=>response.json())
    .then((data)=>d.innerHTML=JSON.stringify(data));
    //.then((data)=>console.log(data));
}
function getCompletedTasks()
{
    var d=document.getElementById('data');
    fetch('./data/completedTasks.json')
   //fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=>d.innerHTML=JSON.stringify(data));
   // .then((data)=>console.log(data));
}

