## ESLint

> 代码检测

## 选择

> 选择`ESLint + Prettier`，`Lint on Save` 可以在保存时候自动格式化代码，`Lint and fix on commit `

## vscode 安装插件

- ESLint
- Prettier-Code Formatter
- Vetur

`settions.json` 里面的代码

```json
  "editor.formatOnSave": true, //自带保存格式化
  // 保存触发eslint
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "html",
    "vue",
    "javascript",
    "jsx",
    "css",
    "sass",
    "less",
    "typescript"
  ],
```