function getTotal(n1,n2,callback1)
{
    callback1(n1*n2);
}
function findEven(no)
{
    console.log(no);
    if(no%2==0)
     console.log('Even.....');
    else
    console.log('Odd.....');
}

function displayProduct(product)
{
    console.log('The Product is : '+product);
}

/* var result=getTotal(22,72);
findEven(result); */

getTotal(23,75,findEven);
getTotal(50,50,displayProduct);

// Callback functions can be defined as ArrowFunctions[== LambdaExpression]
getTotal(25,25,(data)=>{console.log(data/10)});