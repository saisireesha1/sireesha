package com.sonata;

public class TshirtEx {
	String color;
	String material;
	String design;
	public void display()
	{
		System.out.println(color);
		System.out.println(material);
		System.out.println(design);
		
		}
	public static void main(String args[])
	{
		TshirtEx small=new TshirtEx();
		small.color="Blue";
		small.material="silk";
		small.design="floral";
		small.display();
		System.out.println("This for Tshirt small");
		TshirtEx large=new TshirtEx();
		large.color="pink";
		large.material="cotton";
		large.design="strips";
		large.display();
		System.out.println("This for Tshirt large");
		TshirtEx Xtralarge=new TshirtEx();
		Xtralarge.color="yellow";
		Xtralarge.material="lenin";
		Xtralarge.design="Dots";
		Xtralarge.display();
		System.out.println("This for Tshirt Xtralarge");
		
	}

}
