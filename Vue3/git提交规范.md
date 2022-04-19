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

```js
// .cz-config.js
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}

```


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


### 8.使用 

1. `git add .`

2. `git cz` 选择操作