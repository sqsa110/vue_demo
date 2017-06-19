# flexible 自适应移动端平面
  flexible 介绍 https://github.com/amfe/article/issues/17

### 示例用stylus实现 px 到 rem的转换
  pxTorem方法 定义转换
  默认px和rem的转换比例是1:40


### 安装
    首先在index.html的head标签里插入
   ``` html
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
   ```

   其次安装stylus
   ``` bash
    npm install stylus stylus-loader --save-dev
   ```

  在.styl文件中定义转换单位的方法
  $default-font-size = 40px !default
  pxTorem($px)
    return (1rem * ($px / $default-font-size))

  也可以统一定义个文件通过@import引入也行


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
