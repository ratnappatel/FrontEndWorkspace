class Employee{
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    displayData()
    {
        console.log("ID : "+this.id);
        console.log("Name : "+this.name);
        console.log("Salary : "+this.salary);
    }
}

let emp1=new Employee(11,"John",6457.24);
emp1.displayData();
console.log(emp1);