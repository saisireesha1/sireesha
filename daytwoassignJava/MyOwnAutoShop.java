package com.sonata;
public class MyOwnAutoShop {
	
	public static void main(String args[])
	{
		Car c = new Car(400,100000,"White");
		Sedan s = new Sedan(200,40000,"Navy Blue",30);
		Ford f = new Ford(300,80000,"Black",2020,3);
		Ford f1 = new Ford(500,280000,"silver",2020,5);
		
		System.out.println("Car");
		c.display();
		System.out.println("Sale Price of Car:  "+c.getSalePrice());
		System.out.println("\n");
		
		System.out.println("Sedan");
		s.display();
		System.out.println(s.length);
		System.out.println("Sale Price of Sedan:"+s.getSalePrice());
		System.out.println("\n");
		
		/*System.out.println("Truck");
		System.out.println("\n");*/
		
		
		
		System.out.println("Ford ");
		f.display();
		System.out.println(f.manufacturerDiscount);
		System.out.println(f.year);
		System.out.println("Sale Price of ford:"+f.getSalePrice());
		
		
		
		System.out.println("Ford ");
		f1.display();
		System.out.println(f1.manufacturerDiscount);
		System.out.println(f1.year);
		System.out.println("Sale Price of ford:"+f1.getSalePrice());
	}


}
