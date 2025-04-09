### 1. 创建目录

- 首先创建`public`与`src目录`
- `public`目录下创建`index.html`文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>学习日志</title>
  </head>

  <body>
    <!-- 根目录 -->
    <div id="root"></div>
  </body>
</html>
```

### 2. 初始化文件

```shell
# use yarn or npm
yarn init -y

npm init -y
```

### 3. 安装依赖

```shell
# use yarn or npm
yarn add react react-dom react-scripts

npm install react react-dom react-scripts -S
```

### 4. 打包

`npx react-scripts build`

### 5. 运行

`npx react-scripts start`
