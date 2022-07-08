
begin transaction;
insert into dept (did,dname) values('5','human resource');
select * from dept;

rollback;
select * from dept;

