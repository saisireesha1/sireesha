export class Student{
    stdID:number=123;
    stdName:String="sireesha";
    stdCourse:string="B.Tech"

    constructor(i:number,n:string,s:string)
    {
        this.stdID=i;
        this.stdName=n;
        this.stdCourse=s;
    }
    display()
    {
        console.log(this.stdID);
        console.log(this.stdName);
        console.log(this.stdCourse);

    }
}
var e1=new Student(124,"sireesha k","B.Tech(CSE)");
var e2=new Student(135,"Leela k","BSC(MPCs)");
e1.display();
e2.display();