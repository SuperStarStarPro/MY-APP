# 2025 年 3 月 5 日 星期三 雨天

组件库：element-plus
两种引入方式：

- 全局引入：缺点是打包体积过大。
- 按需引入：用什么引入什么，正常公司开发时候，都会用一种方式。

思考：
component 与 Views 的区别？
组件（compoent）：一个独立、可复用的代码块，通常包含 HTML、CSS 和 JavaScript。它可以是一个按钮、表单、对话框等。组件可以接受（props）并管理状态（state）。
视图（View）：用户界面的一部分，通常表示某个特定的状态或数据的呈现。视图可以由多个组件组成。
总结：
组件是构建块，可以被复用。组件可以构成视图。
视图是特定状态下的用户呈现。视图是多个组件组成。

之前 vue 文件都是在 conponents 文件夹下创建，现在这个项目有很多个 Demo 在 views 文件，需要引入 router。

先换个小项目练手，不补充理论知识了。

# 2025 年 3 月 4 日 星期二 雨天

## 学习计划

今日：\
上午：
回顾昨天内容，整理 md 笔记。
下午:\
 习题回顾，Vue 项目实战 55/19

## 知识点 s

### 16.获取夸层级组件实例（拒绝递归）

ref 引用信息

```
<!-- `vm.$refs.p` will be the DOM node-->
<p ref="p">Hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>
```

callback ref

- 主动通知（`setXxxRef`）
- 主动获取（`getXxxRef`）

### template 和 JSX 的对比以及它们的本质

- template：渲染模板，将数据绑定到模板中，渲染成最终的页面。
- JSX：`JavaScript` + `XML`，是一种`React`的语法扩展，可以用类似`HTML`的语法来描述`React`组件。
- template 的本质：`HTML`字符串，`Vue`会将其编译成`render`函数，然后调用`render`函数生成`VNode`树，再将`VNode`树渲染成真实的`DOM`。
- JSX 的本质：`JavaScript`对象，`Vue`会将其编译成`createElement`函数，然后调用`createElement`函数生成`VNode`对象，再将`VNode`对象渲染成真实的`DOM`。

template 的优点：

- 简单易用，模板语法简单，学习成本低
- 性能高，模板渲染时，`Vue`只需要生成`VNode`树，不涉及`DOM`操作，性能高，渲染速度快
- 灵活，模板可以绑定任意数据，可以嵌套，可以控制逻辑，可以自定义指令

JSX 的优点：（灵活）

- 功能强大，可以绑定任意数据，可以嵌套，可以控制逻辑，可以自定义指令
- 学习成本高，需要学习`JSX`语法，学习成本高
- 性能一般，`JSX`渲染时，`Vue`会将`JSX`编译成`createElement`函数，再调用`createElement`函数生成`VNode`对象，再将`VNode`对象渲染成真实的`DOM`，`JSX`渲染性能一般

template

- 模板语法（HTML 的扩展）
- 数据绑定使用 Mustache 语法（双大括号）

```
<span>Message: {{ msg }}</span>
```

### But 语法糖

<span> Message: {{ msg }}</span>编译成 createElement("span","Message: ${{ this.msg }}")

`components`里存放公共组件，比如`header`、`footer`、`sidebar`等。
`store`里存放全局状态管理，比如用户信息、`token`等。`utils`里存放一些工具函数，比如时间格式化、加密解密等。
`App.vue`是入口文件，主要负责渲染路由和全局状态管理。在`componoents`中创建了文件，需要在`App.vue`中引入，注册。

Array 是数组型

# 2025 年 3 月 3 号 星期一 雨天

## 学习计划

今日：\
上午：

- 整理笔记，回顾上一周的内容。

下午：

- `Vue`开发实战项目进度 55/15。

## 知识点：

13. 生命周期的应用场景和函数式组件

- `beforeUpdate`：在数据改变后、DOM 更新前触发
  ✓ 适用：移除旧 DOM 元素的事件监听
  ✗ 禁止：修改依赖数据（可能造成无限循环）

- `updated`：在数据改变导致的 DOM 更新后触发
  ✓ 适用：操作更新后的 DOM
  ✗ 禁止：修改依赖数据（可能造成无限循环）

- `beforeUnmount`(Vue3)/`beforeDestroy`(Vue2)：实例销毁前触发
  ✓ 适用：清除定时器、取消事件监听、解除 DOM 绑定

函数式组件：

- 通过`functional: true`声明
- 特性：无状态、无实例、无上下文、无生命周期
- 适用场景：纯展示型简单组件

  14.指令的本质是什么
  `template`：渲染模板，将数据绑定到模板中，渲染成最终的页面。
  `directive`：指令，是`Vue.js`的扩展，可以自定义元素的行为，如`v-if`、`v-show`、`v-for`、`v-model`、`v-once`等。

## 指令的本质

指令是`Vue.js`的扩展，可以自定义元素的行为。常见的指令包括`v-if`、`v-show`、`v-for`、`v-model`、`v-once`等。

### 常用高级特性

- **provide/inject**: 实现跨组件通信。

### 优雅地获取跨层级组件实例（拒绝递归）

- **ref 引用信息**: 递归查找会导致代码繁琐且性能低效。
- **callback ref**:
  - 主动通知（`setXxxRef`）
  - 主动获取（`getXxxRef`）

### 组件传值

- **父组件向子组件传值**: 使用`props`。
- **子组件向父组件传值**: 使用`$emit`。

### 响应式数据

- **ref**: 可以创建响应式的数据，支持基础数据类型和复杂数据类型（如`object`、`array`）。
- **reactive**: 将普通对象转换为响应式对象，只能定义复杂数据类型，且不需要`.value`。`reactive`的功能`ref`也能实现。

### 箭头函数

- 箭头函数可以省略`return`关键字，如果函数体只有一行代码，可以省略花括号。
- 箭头函数的`this`指向在定义时就已经确定，且不能通过`call`、`apply`或`bind`来修改。它指向定义时外层的第一个普通函数的`this`。

总结：
习题归纳： 1.设计一个秒杀倒计时组件

<!-- 2.设计一个图片懒加载组件
3.设计一个轮播图组件
4.设计一个表单验证组件 -->

2.查看组件生命周期和指令周期钩子的运行顺序

<!-- 3.使用`provide`和`inject`实现跨组件通信
4.使用`ref`实现跨组件通信
5.使用`v-model`实现表单数据双向绑定
6.使用`v-html`和`v-text`实现文本内容的渲染 -->

3.使用 2.6 最新 `APL Vue.observable`优化响应式`provide`

<!-- 4.使用`watch`实现数据监听，并在监听到数据变化时执行回调函数。
5.使用`computed`实现数据计算，并在数据变化时自动更新视图。
6.使用`provide`和`inject`实现跨组件通信。
7.使用`ref`实现跨组件通信。
8.使用`v-model`实现表单数据双向绑定。
9.使用`v-html`和`v-text`实现文本内容的渲染。
10.使用`v-pre`跳过元素和子元素的编译过程，提升渲染性能。
11.使用`v-once`只渲染元素一次，数据变化时不会重新渲染。
12.使用`v-cloak`延迟显示，在数据渲染完成之前，隐藏元素。
13.使用`v-if`和`v-show`实现条件渲染。 -->

4.`v-ant-re`f 指令回调中能否对更改响应式数据？为什么？ 5.箭头函数与普通函数的区别

## 月计划：

- 学习 Vue 开发实战进度 7/4 周，完成后，发布到`github`上。
- 学习英语，争取每天听说读写。

# 2025 年 3 月 2 日 星期日 晴天

周末，放松一下，好好休息。
开启记录自己美好生活，记录现在风华正茂的年纪的自己所做的事情。

# 2025 年 3 月 1 日 星期六 晴天

周末，放松一下，好好休息。
周末在家整理打扫房间，洗被单衣物。下午和家人一起去花卉市场买花，看看有没有适合的花买回家。

# 2025 年 2 月 28 日 星期五 晴天

## 学习计划

- 昨日：
  上午：整理笔记，拓展`Vscode`操作，总结`vue`目录知识，整理`github`文件操作流程。
  下午：Vue 开发实战项目进度 55/12。

- 今日：
  上午：整理`md`笔记内容，总结课后习题，三个`Vue`知识点。

## 知识点

监听器`wacth`

- 更加灵活、通用
- `watch`中可以执行任何逻辑，如函数节流，`Ajax`异步获取数据，甚至操作`DOM`

`computed` vs `watch`

- `computed`能做的，`watch`都能做，反之则不行
- 能用`Computed`的尽量用`Computed`，能用`Watch`的尽量用`Watch`

`v-html`:将一个字符串解析为`html`标签渲染到模板中，主要用来渲染文本内容，并且存在`xss`攻击风险。
`v-text`：将数据绑定到模板中，替换目标文件内容，防止`xss`攻击，`html`转义

`input`：输入事件
`blur`：失去焦点时触发
`focus`：获得焦点时触发
`input`：输入内容时触发

```
handleBlur(){
  console.log('失去焦点')
}
```

```
    v-model：双向数据绑定，将数据双向绑定到输入框和数据，数据发生变化时，输入框也会发生变化。
    v-if：条件渲染，根据表达式的值，决定是否渲染元素。
    v-show：根据表达式的值，切换元素的display属性，显示或隐藏。
    v-for：循环渲染，根据数组或对象，渲染多个元素。
    v-on：事件绑定，绑定事件处理函数。
    v-bind：属性绑定，绑定元素的属性值。
    v-cloak：延迟显示，在数据渲染完成之前，隐藏元素。
    v-pre：跳过元素和子元素的编译过程，提升渲染性能。
    v-once：只渲染元素一次，数据变化时不会重新渲染。
```

`js`中，定义变量的三种方式

```
1.var
2.let
3.const
```

`v-for`中`key`值，跟`vue`的虚拟`DOM`有关
`vue2`和`vue3`的生命周期钩子是不同的。
`views`是用来存放页面的，
@是路径别名
在`app.vue`中对`views`中的`vue`文件进行传值操作.

1.父组件向子组件进行传值：`Propse`

```
（1）:msg="message"
 (2) message:"这是APP.vue父组件的值"，
```

子组件向父组件进行传值：`$emit`

2.子组件向父组件进行传值：`emit`（自定义事件）

# 2025 年 2 月 27 日 星期四 晴天

## 知识点

### vscode 修改标点符号：

### 多光标编辑

1.ALt+单机（windows/Linux）\
 2.快捷键扩展（Ctrl/Cmd + D）

### 批量查找替换

1.简单替换（Ctrl/Cmd+H）\
2.正则表达式替换（支持复杂规则）

### 计算属性`computed`

- 减少模板中计算逻辑
- 数据缓存
- 依赖固定的数据类型（响应式数据）

### 快速生成 Vue 组件的方法

`Emmet`在.vue 文件中的支持情况，\
1.`Emmet` 缩写（推荐原生方式）

```
输入`vue`，然后按Tab键，即可生成一个Vue组件模板。
```

2.`Vetur `插件（官方推荐插件）

```
输入`vbase`,然后按Tab键，即可生成一个完整基础`Vue`组件模板。
```

### src 下：

`assests`：静态资源，一般放图片

`components`：组件，公共组件（解耦）--- 一个东西到处用，可以省着重复去写了

`router`：路由 vue-router

`store`：状态管理 vuex

`views`：页面，页面组件（解耦）

`App.vue`：根组件，入口文件，渲染其他组件

`main.js`：入口文件，渲染根组件 App.vue

`.gitignore`文件配置 忽略文件

`babel.config.js`文件配置 `babel`：做兼容的，它可以把 es6 以及之后的代码转为 es5，支持绝大多数浏览器。

`package.json`文件配置 依赖包

`README.md`文件配置 项目说明

新创建一个文件夹 `mkdir monorepo`(文件夹名称)
`cd monorepo`
初始化 `pnpm init -y`
`code .`

### cd 高频技巧

`cd `两层含义：\
第一：`Change Directory`，切换目录\
第二：`Compact Dise` 光盘，压缩碟，表示压缩文件。

可以通过 cd ~回到用户主目录，或者`cd` -返回上一个目录。例：\
`C:\Users\YourName>cd Desktop\`
`cd C:\Users\YourName\Desktop	`进入指定绝对路径

1.快速回家

```
cd ~       # Linux/macOS 直接返回用户主目录
cd %USERPROFILE%  # Windows 专用写法
```

2.路径补全

输入 cd D → 按 Tab 键自动补全路径（支持多级目录）

### github 克隆与初始化仓库操作指南

```
git clone <repository>
```

```
git init
git add .
git commit -m "first commit"
```

```
git branch <branch-name>
git checkout <branch-name>
```

```
git push origin <branch-name>
```

2.初始化仓库（jit init）

```
git init
git add .
git commit -m "first commit"
```

3.创建分支（jit branch）

```
git branch <branch-name>
git checkout <branch-name>
```

4.推送分支（jit push）

```
git push origin <branch-name>
```

```
git remote add origin <repository>
```

5.拉取远程分支（jit pull）

```
git pull origin <branch-name>
```

6.创建标签（jit tag）

```
git tag <tag-name>
git push origin <tag-name>
```

7.删除远程分支（jit push）

```
git push origin --delete <branch-name>
```

8.删除本地分支（jit branch）

```
git branch -d <branch-name>
```

9.删除远程标签（jit tag）

```
git push origin --delete <tag-name>
```

10.删除本地标签（jit tag）

```
git tag -d <tag-name>
```

## 今日总结

- 学习了 vscode 的多光标编辑、批量查找替换、快速生成 Vue 组件的方法。
- 掌握了 Vue 组件的核心概念，包括属性、插槽、事件。
- 了解了双向数据绑定和单向数据绑定数据流不冲突。
- 掌握了 Vue 组件的语法糖。
- 了解了虚拟 DOM 匹配的算法机制。
- 了解了数据驱动。
- git 克隆与初始化仓库操作指南。

# 2025 年 2 月 26 日 星期三 雨天

## 工作总结

已经在公司实习两周了，虽然还没有完全融入到公司的氛围，但也算是有了一定的工作经验。Vue 基础知识与实例小项目已经完成。现在进入 Vue 项目实战阶段，准备按照项目流程一步步完成。今年进公司时有点不适应，但相信在公司好好提升自己的技能一定会带来收获，加油！

## 学习计划

- 继续学习 Vue 基础知识，掌握 Vue 的组件化开发、路由、Vuex 等核心概念。
- 学习 TypeScript，掌握 TypeScript 的基本语法、类型注解、接口、泛型等。
- 学习 Vue 项目实战，熟悉 Vue 项目的开发流程、规范、优化、部署等。
- 学习单元测试、E2E 测试、持续集成、自动化部署等相关知识。
- 学习开源项目，了解开源项目的开发流程、规范、优化、部署等。
- 学习英文，提升英文水平。

## 月总结

- 公司实习了两周，收获颇丰，但也有很多不足，需要加强自身的学习能力，提升自己的能力。
- 等 Typescript(Ts)类型，全局安装 yarn，文件类型转换。相关知识，掌握了这些知识的使用方法。
- 学习了网页设计中的切图，设计师规范标准，css 回顾知识，掌握了这些知识的使用方法。

## 知识点内容

### 终端打开方式：

徽标+R，输入 cmd，回车打开命令行窗口。\
文件目录行输入：cd 文件路径，回车进入指定目录。

打开后输入 code . 打开 vscode 编辑器。

### vscode 打开方式：

打开 vscode，点击左侧文件目录，输入 cmd，回车打开命令行窗口。

### vscode 快捷键：

1. 终端：ctrl+`
2. 打开文件：ctrl+p
3. 保存文件：ctrl+s
4. 格式化代码：shift+alt+f
5. 代码提示：ctrl+space
6. 代码折叠：ctrl+shift+[
7. 代码展开：ctrl+shift+]
8. 跳转到定义：f12
9. 跳转到下一个错误：f8
10. 跳转到上一个错误：shift+f8

命令行运行时需要注意的事项：\
默认设置是 windows powershell，shell 跟 cmd 有一定的差异。

<!---
依赖删除命令：

### npm install -g rimraf   // 先进行全局安装

### rimraf node_modules   // 进行删除


-->

# 2025 年 2 月 25 日 星期二 雨天

## 学习计划

- 继续学习`Vue`知识，进行公司培训项目搭建，熟悉`Vue`项目开发流程。

## 知识点

### Vue 组件的核心概念（一）

插件`Vetur`，`ESlint`\

- 自定义属性 props,props 中声明的属性\
- 原生属性 attrs 没有声明的属性，默认自动挂载到组件根元素上，设置 inheriAtts 为 false 可以关闭自动挂载\
- 特殊属性 class，style 挂载到组件根元素上，支持字符串，对象，数组等多种语法

<template slot="XXX"></template>
<template v-slot="XXX"></template>

作用域的插槽\
<template slot="XXX" slot-scope="scope">...</template>
<template v-slot:XXX="props">...</template>

### 三大核心概念：

属性：自定义属性 props，原生属性 attrs，特殊属性 class，style\
插槽：普通插槽，作用域插槽，具名插槽\
事件：普通事件，事件修饰符，按键修饰符

demo 多个 Vue 小项目实现页面切换。

### 双向数据绑定和单向数据绑定数据流不冲突

- model 更新 view，view 更新 model，双向数据绑定
- v-model 指令，单向数据绑定，数据流不冲突，view 更新 model，model 更新 view。
- Vue 是单向数据流，不是双向绑定
- Vue 的双向绑定不过是语法糖
- Object。defineProperty 是用来做响应式更新的，和双向绑定没关系

### 语法糖

<personalInfo
v-model="poneInfo"
:zip-code.sync="zipCode"

>

<PersonalInfo
:phone-info="phoneInfo"
@change="val => (phoneInfo = val)"
:zip-code.sync="zipCode"
@update:zipCode="val => (zipCode = val)"
/>

### 虚拟 DOM 匹配的算法机制，三个节点：

场景 1：移动\
场景 2：删除\
场景 3：新增\
场景 4：更新删除新建（无 key）\
场景 5：移动（有 key）\
场景 6：插入（有 key）

### 数据驱动

数据来源（单向的）三个部分：
来自父元素的属性
来自组件自身的状态 data
来自状态管理器，如 vuex，Vue.observable

### data vs 属性 props

- 状态是组件自身的数据
- 属性是来自父组件的数据
- 状态的改变未必会触发更新
- 属性的改变未必会触发更新

由于账号密钥丢失，导致无法登录，github 新账号，记录美好生活。
