# vue-multi-pages

> 多页Vue，每个页面都是单页应用

页面写在`./src/templates`下；

添加页面时，在`./build/pages.js`中添加如下：

```js
{ name: 'concat', entry: 'concat.js', template: 'concat.html' }
```

其他的和正常的Vue一样

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
