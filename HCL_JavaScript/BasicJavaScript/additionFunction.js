function add()
{
    var no1=document.getElementById('number1').value; // String
    var no2=document.getElementById('number2').value; // String
    console.log(typeof(no1));
    console.log(typeof(no2));

    no1=parseInt(no1); // Number
    no2=parseInt(no2); // Number
    console.log(typeof(no1));
    console.log(typeof(no2));

    var result=no1+no2;
    console.log("Total of two nos. "+result);
}
