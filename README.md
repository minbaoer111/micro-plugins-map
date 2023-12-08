# micro-plugins-map
微前端地图插件

micro-plugins-map为了解决嵌入地图时产生的跨域等问题。

# 开始

## 1、安装

```bash
yarn add micro-plugins-map
```

## 2、引用
首先在引用到地图的package,json中安装该npm包
```js
import {pluginObj} from 'micro-plugins-map'
```

## 3、在项目中使用
在潜入地图子应用的几座中使用
```js
microApp.start({
  plugins: {
    global: [
      pluginObj
    ],
  }
})
```