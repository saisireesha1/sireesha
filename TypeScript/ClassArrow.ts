export class Employee{
    empCode:number;
    empName:string;

    constructor(code:number,name:string)
    {
        this.empCode=code;
        this.empName=name;
    }
    display=()=>{console.log(this.empCode+' '+this.empName)}
}
let emp=new Employee(1,'sai');
emp.display();