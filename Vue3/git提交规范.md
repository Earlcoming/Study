## git代码提交规范

### 1.安装commitizen和cz-customizable

```sh
npm install -g commitizen@4.2.4
npm i cz-customizable@6.3.0 --save-dev
```

### 2.在package.json中进行新增

```js
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

### 3.在根目录下新建.cz-config.js文件并写入配置 之后就可以用 git cz 来代替 git commit

### 4.使用husky进行强制git代码提交规范

```
npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
npm install husky@7.0.1 --save-dev
npx husky install
```

### 5.在package.json中新增指令 scripts里面新增
```js
  "scripts": {
    "prepare": "husky install"
  }
```

### 6.并执行

```
npm run prepare
```


### 7.新增husky配置文件 并往里面写入

> 新增文件commit-msg
```
npx husky add .husky/commit-msg
```

> 会在.husky里面新增出一个commit-msg的文件，
添加  `npx --no-install commitlint --edit`

完整的文件内容是下面这个

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit

```
