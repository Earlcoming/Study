exports.checkUserInfo = "select * from ev_users where username=?"; //查询用户名存不存在
exports.setUser = "insert into ev_users set ?"; // 添加用户名
exports.selectUserInfo =
  "select id,username,likename,email,user_pic from ev_users where id=?"; //获取用户信息
exports.updateUserInfo = "update ev_users set ? where id=?"; //更新用户信息
exports.selectPass = "select * from ev_users where id=?";
exports.updatePass = "update ev_users set password=? where id=?"; //更新密码
exports.updateAvator = "update ev_users set user_pic=? where id=?"; //更新用户头像
exports.getArticleCates = "select * from ev_article_cate where is_delete=0"; //获取所有文章分类
exports.getArticleCatesNameAlisa =
  "select * from ev_article_cate where name=? or alisa=?"; //根据name,alisa查询文章分类
exports.addCates = "insert into ev_article_cate set ?"; //新增文章分类
exports.updateCates = "update ev_article_cate set is_delete=1 where id=?"; //删除文章分类
exports.getCatesId = "select * from ev_article_cate where id=?"; //根据ID获取文章分类
exports.updateCatesId = "update ev_article_cate set ? where id =?";
