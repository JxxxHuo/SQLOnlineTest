
alasql.options.joinstar = 'underscore';
alasql("create table dept( did integer primary key, dname varchar2(20), manager integer, tel varchar2(15), master integer);create table emp( eid integer primary key,ename varchar2(20),sex varchar2(1), hire varchar, sar number(8,2), did integer);create table history(hid integer primary key, startdate date, enddate date, place varchar2(50), job varchar2(20),  eid integer);insert into dept values(1,'board',5,'1111111',0);insert into dept values(2,'market department',6,'2222222',1);insert into dept values(3,'finance department',7,'3333333',1);insert into dept values(4,'purchase department',8,'4444444',1);insert into emp values(5,'tom','m','234',4500.50,1);insert into emp values(6,'jacky','m','543',2982.12,2);insert into emp values(7,'kelly','f','445',3491.32,3);insert into emp values(8,'red','f','143',3700.00,4);insert into emp values(9,'blue','m','423',3800.00,2);insert into emp values(10,'green','m','413',5100.00,3);insert into emp values(11,'peter','m','243',6700.00,4);");
console.log('data loaded.');


