 SELECT JOB,DEPTNO, AVG(SAL*12) AS 'ANNUAL_SAL'
   FROM EMP
   GROUP BY JOB ,DEPTNO;

   SELECT COUNT(SAL) AS 'TOTAL_SAL' ,COUNT(COMM) AS 'TOTAL_COMM'
   FROM EMP
   WHERE DEPTNO = 30 ;

   SELECT AVG(SAL) AS 'AVERAGE', MIN(SAL) AS 'MINIMUM', MAX(SAL) AS 'MAXIMUM'
   FROM EMP
   WHERE JOB = 'CLERK' OR JOB ='MANAGER' ;

    SELECT DEPTNO
   FROM EMP
   WHERE EXISTS (SELECT COUNT(JOB) AS CLERK_COUNT 
                FROM EMP
                WHERE JOB = 'CLERK'
                GROUP BY DEPTNO)
   GROUP BY DEPTNO;

   SELECT ENAME , SAL
   FROM EMP
   WHERE SAL < (SELECT SAL*0.3 AS SAL
                 FROM EMP 
                 WHERE JOB= 'PRESIDENT');

select	count(ename)
from emp
join
dept
on loc='chicago';

select	ename
from emp
join
dept
on loc='chicago';


select	ename,
		loc
from emp e
join dept d
on e.DEPTNO=d.DEPTNO
order by loc; 


select	count(distinct deptno)
from emp;

select	top 1 ename,
		avg(sal) as average_salary


from emp
group by ename
order by average_salary;