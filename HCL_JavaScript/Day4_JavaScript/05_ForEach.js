const months=["Jan","Feb","Mar","Apr","May","Jun"];

function disp(month,index)
{
    console.log('months[ '+index+' ] = '+month);
}

months.forEach(disp);


function getData()
{
    fetch('Products.json')
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(p=>{
            document.write("<ul><li>"+p.id+"</td>");
            document.write("<li>"+p.title+"</li>");
            document.write("<li>"+p.desc+"</li>");
            document.write("<li>"+p.price+"</li>");
            document.write("<li>"+p.Rating+"</li></ul>");
            document.write("<hr height=2")
        })
    })
}
getData();