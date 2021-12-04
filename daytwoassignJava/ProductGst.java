package com.sonata;

public class ProductGst {
	int PrdId;
	String PrdName;
	 double ProPrice;
	
	
	public double totalPrice(double gst)
	 {
		 ProPrice=ProPrice+gst;
		 return ProPrice;
	 }
	  
	public void display()
	{
		System.out.println(PrdId);
		System.out.println(PrdName);
		System.out.println(ProPrice);	
	}
	public static void main(String args[])
	{
		ProductGst p1=new ProductGst();
		p1.PrdId=1;
		p1.PrdName="doll";
		p1.ProPrice=500;
		p1.display();
		System.out.println("Price after adding Gst:"+p1.totalPrice(20));
	}
}
