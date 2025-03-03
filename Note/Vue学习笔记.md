# vue学习笔记：

这是一个大概目录，补充了掌握不牢固的知识。


## 1.环境搭配
## 2.Vue-cli
    这是用来构建一个webpack的项目，需要进行一些配置
    ```
    > vue init webpack my-project
    ```
## 3.Vues实例
### 3.1  结构目录
### 3.2  生命周期
### 3.3  过滤器
```
      //模板中使用
      {{status | statusFilter}} //使用{{ 数据 | 过滤器}} 支持链式{{ 数据 | 过滤器1 | 过滤器2 }}
      //可以在style中引用
      ：style="status | colorFilter"

      //定义过滤器
      export default {
        filters: {
          statusFilter:function(val){
            switch(val){
              case ture : return 'OK';
              case false : return 'NO';
            }
            return "待获取";
          }，
          colorFilter:function(val){
            switch(val){
              case ture : return 'green';
              case false : return 'red';
                }
              }
            }
          },
```
全局过滤注意事项：全局过滤与局部过滤同名时会加载局部过滤器。
```
Vue.filter('dataFormat',(input,pattern = '') => {});
```
        3.4计算属性
        3.5监听器
        3.6方法
## 4.组件
### 4.1 组件介绍
      Vue-cli默认是构建单页面应用，使用Url的锚来确定组件引用，组件是可复用的Vue实例，如果网页中的某一个部分需要再多个场景中使用，那么我们可以将其抽出为一个组件进行复用。组件大大提高了代码的复用率，
### 4.2 使用Element-ui组件库
```
npm i element-ui -S
```

```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

```
全局引入，Vue是单页应用，打包起来的项目其实就是一页，所需的资源将全部被打包，所以全局引入会导致打包后的项目体积过大。根据以上建议使用局部引入，另一种则是在单页cdn引入全部的组件，这样就不会打包Element UI的组件进去了。现在使用本地资源按需引入，则需要借助babel-plugin-component插件，安装依赖。

```
cnpm i babel-plugin-component -D
```


# 内置指令（语法糖、标志位）
## 1.v-text
## 2.v-html
## 3.v-show
## 4.v-if
## 5.v-else
## 6.v-else-if
## 7.v-for
## 8.v-on
## 9.v-bind
## 10.v-model
## 11.v-pre
## 12.v-cloak

# 自定义指令（生命周期钩子）
## bind
## inserted
## update
## componentUpdated
## unbind

