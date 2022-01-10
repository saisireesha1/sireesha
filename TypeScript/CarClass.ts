/*7) Create a super class called Car.  The Car class has the following fields and methods.
a. Number speed;
b. number regularPrice;
c. String color;
d. Number getSalePrice();*/
export class Car{
    speed:number;

    regularPrice:number;

    color:string;
    getSalePrice(){
        console.log(this.regularPrice);
    }
 display(){
        console.log(this.speed);
        console.log(this.regularPrice);
        console.log(this.color);
    }
}