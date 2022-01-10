export class Employee{
    empID:number=123;
    empName:String="sireesha";
    empSal:number=2345

    constructor(i:number,n:string,s:number)
    {
        this.empID=i;
        this.empName=n;
        this.empSal=s;
    }
    display()
    {
        console.log(this.empID);
        console.log(this.empName);
        console.log(this.empSal);

    }
}
var e1=new Employee(124,"sireesha k",7890);
e1.display();