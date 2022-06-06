## 操作文件

fs.readFile()     读取文件内容
fs.writeFile()    在文件里写内容

```js
const fs = require('fs')
fs.readFile('./file.txt', 'utf8' ,function (err, dataStr) {
  console.log(err)
  console.log(dataStr)
})
```


## __dirname 

## path

### path.join()

```js
const pathStr = path.join('/a', '/b/c','../', 'd', 'e')
console.log(pathStr) // '\a\b\d\e'
```

### path.basename()
> path.basename(pathStr, '.html'); 获取路径index.html中的index
> path.basename(pathStr); 获取路径中最后一个index.html名

```js
const pathStr = '/a/b/c/index.html'
const fullName = path.basename(pathStr);
console.log(fullName);

```

### path.extname()
> 获取扩展名

```js
const fpath = '/a/b/c/d/index.html'
const fext = path.extname(fpath);
console.log(fext) //.html
```


## http


## nrm

- nrm ls 查看所有淘宝镜像
- nrm use taobao  切换到淘宝镜像

