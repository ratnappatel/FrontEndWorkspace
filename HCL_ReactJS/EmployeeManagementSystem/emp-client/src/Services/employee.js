import http from './http-common';


export const getAllEmployee=()=>
{
    return http.get("/employees");
}

export const addEmployee=(data)=>
{
    return http.post("/employees",data);
}

export const getEmployeeDetails=(id)=>{
    return http.get("/employees/"+id);
}

export const updateEmployeeDetails=(id, employee)=>
{
    return http.put("/employees/"+id,employee);
}