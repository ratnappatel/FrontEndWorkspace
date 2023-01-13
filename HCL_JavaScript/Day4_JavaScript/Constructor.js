//Creating a constructor
function Student(name,age){
    // If we declare any field using this keyword => it will become an instance variable/field
    this.name=name;
    this.age=age;
}

var s1=new Student("Ratna",42);
console.log(s1);

var s2=new Student("Pinakin",42);
console.log(s2);

var s3=new Student("Uttam",11);
console.log(s3);

Student.prototype.mobile='8949164232';

var s4=new Student("Uttam",11);
console.log(s4.mobile);
console.log(s3.mobile);




//Object Literal
let Author={
    name:'abc',
    age:'12'
}