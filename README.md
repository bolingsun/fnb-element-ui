# fnb-element-ui

## 基于 Element UI 组件封装的适用于本公司业务逻辑通用组件

### 文档

文档地址 [fnb-element-ui](http://docs.yangchebyd.com/fnb-element-ui/)

### 安装

```bash
yarn add element-ui @autodt/fnb-element-ui
# OR
npm install element-ui @autodt/fnb-element-ui
```

> `element-ui`必须安装。

### 引入 Element

在 main.js 中写入以下内容：

```js
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import FnbElementUI from '@autodt/fnb-element-ui'
import '@autodt/fnb-element-ui/lib/index.css'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(FnbElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入，**且必须在 element-ui 组件样式引入之后**（否则 fnb-element-ui 组件中部分样式覆盖不了 element-ui 中组件样式）。
