package com.sonata;

public class Reverseofarray {
	public static void main(String args[])
	{
		int a[]= {1,2,3,4,5,6};
		System.out.println("The original array is");
		for(int i=0;i<a.length;i++)
		{
			System.out.println(a[i]);
		}
		System.out.println("The array in reverse order is");
		for(int i=a.length-1;i>=0;i--)
		{
			System.out.println(a[i]);
		}
	}

}
