## 全局使用scss变量

``` js
 在vue.config.js中写入
 
 css: {
    loaderOptions: {
      sass: {
        additionalData: 或 prependData:   // 8版本用prependData: 10+使用 additionalData
        `
          @import "@/styles/variables.scss";  // scss文件地址
          @import "@/styles/mixin.scss";     // scss文件地址
        `
      }
    }
  }
```