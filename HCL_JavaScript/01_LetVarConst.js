var x=11;
function test()
{
    var a=100;
    let b=200;
    const c=300;
   // console.log(a+" , "+b+" , "+c);
    {
        var y=22;
        let z=33;
    }
    console.log(x);
    console.log(y); // because its declared with var keyword [will have function scope]
    console.log(z);
    //c=1000;
}

test();
//console.log(a+" , "+b+" , "+c);
console.log(x);