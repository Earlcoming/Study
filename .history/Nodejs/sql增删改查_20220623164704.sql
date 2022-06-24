-- 从users中查询username, password
-- select username,password from users

-- insert into table_name (列 1, 列 2) values (值 1, 值 2)

-- insert into users (username, password) values ('earl','123456')

-- select * from users
-- update users set password='xxxx' where id=4
-- update users set password='123123',status=1 where id =1

-- delete from users where id=4

-- select * from users where username!='小红'

-- select * from users order by status desc, username asc

-- select count(*) as total from users where status=0
select username as nuname,password as up from users 



