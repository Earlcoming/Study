## docker

`docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql` mysql安装到docker

`docker stop some-mysql` 停止some-mysql的运行

`docker rm some-mysql` 删除some-mysql的

`docker ps` 查看本地docker运行情况

## docker-compose

>s 通过配置文件`YAML`文件来定义容器服务

```yml
# Use root/example as user/password credentials
version: "3.1"

services:
  db:
    image: mysql
    # NOTE: use of "mysql_native_password" is not recommended: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (this is just an example, not intended to be a production configuration)
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: example
    ports:
      - 3390:3306

  adminer:
    image: adminer
    restart: always
    ports:
      - 8090:8080

```

`docker-compose up -d` 创建docker