exports.checkUserInfo = "select * from ev_users where username=?"; //查询用户名存不存在
exports.setUser = "insert into ev_users set ?"; // 添加用户名
exports.selectUserInfo =
  "select id,username,likename,email,user_pic from ev_users where id=?"; //获取用户信息
exports.updateUserInfo = "update ev_users set ? where id=?"; //更新用户信息
exports.updatePass = 'update'