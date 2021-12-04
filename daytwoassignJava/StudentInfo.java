package com.sonata;

public class StudentInfo {
	int stdId;
	String stdName;
	String stdClass;
	public void display()
	{
		System.out.println(stdId);
		System.out.println(stdName);
		System.out.println(stdClass);
		
	}
	public static void main(String args[])
	{
		StudentInfo s1=new StudentInfo();
		s1.stdId=101;
		s1.stdName="sireesha";
		s1.stdClass="1st";
		s1.display();
		StudentInfo s2=new StudentInfo();
		s2.stdId=102;
		s2.stdName="sandy";
		s2.stdClass="2nd";
		s2.display();
	}

}
