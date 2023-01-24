import http from './http-common';


export const getAllEmployee=()=>
{
    return http.get("/employees");
}

export const addEmployee=(data)=>
{
    return http.post("/employees",data);
}