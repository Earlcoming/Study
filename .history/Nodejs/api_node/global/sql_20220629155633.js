exports.checkUserInfo = "select * from ev_users where username=?"; //查询用户名存不存在
exports.setUser = "insert into ev_users set ?"; // 添加用户名
exports.selectUserInfo =
  "select id,username,likename,email,user_pic from ev_users where id=?"; //获取用户信息
exports.updateUserInfo = "update ev_users set ? where id=?"; //更新用户信息
exports.selectPass = "select * from ev_users where id=?";
exports.updatePass = "update ev_users set password=? where id=?"; //更新密码
exports.updateAvator = "update ev_users set user_pic=? where id=?"; //更新用户头像
exports.getArticleCates = "select * from ev_article_cate"; //获取所有文章分类
exports.getArticleCatesId = "select * from ev_article_cate where name=? od "; //根据name,alisa查询文章分类