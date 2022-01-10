import { PersonInterface } from "./PersonInterface";

class PersonDetail implements PersonInterface{
    first: string;
    last: string;

    getFullName(): string {
        return this.first + this.last;
    }
}
var p1=new PersonDetail();
p1.first="sireesha "
p1.last=" kadali"
console.log(p1.getFullName());