## ifnull()
```
IFNULL(expression, alt_value)
```

> 如果第一个参数的表达式 expression 为 NULL，则返回第二个参数的备用值 alt_value。

参数	解析
expression	必须，要测试的值
alt_value	必须，expression 表达式为 NULL 时返回的值

## not in


## not exits

地址[https://leetcode.cn/problems/customers-who-never-order/]

select name Customers from Customers where not exists(
    select CustomerId from Orders where CustomerId = Customers.Id
)

## IF(expr1,expr2,expr3)

地址[https://leetcode.cn/problems/calculate-special-bonus/]

select employee_id,if(employee_id %2!=0 and left(name,1) !='M', salary,0) as bonus
from Employees order by employee_id


地址[https://leetcode.cn/problems/swap-salary/]

update Salary set sex=if(sex='m','f','m')

## delete 

地址[https://leetcode.cn/problems/delete-duplicate-emails/submissions/]

delete p1 from Person p1,Person p2 where (p1.email = p2.email and p1.id > p2.id)