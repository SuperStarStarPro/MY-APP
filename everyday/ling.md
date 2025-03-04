
# 2025年3月3号 星期一 雨天
## 学习计划
- 今日：\
上午： 
    - 整理笔记，回顾上一周的内容。
 
下午：\
    - 观看`Vue`开发实战视频，`Vue`开发实战项目进度55/15。


    对`Watch1 Demo`进行防抖改造，即直到用户停止输入`500ms`才更新我们的`fullname`

13.生命周期的应用场景和函数式组件
- `beforeUpfata:`依赖数据改变或`$forceUpdata`强制刷新，移除已经添加的事件监听器等<b>万万不可更改依赖数据</b>。
- `upfated`:操作DOM添加事件监听器等<b>万万不可更改依赖数据</b>
- `beforeDestroy`:销毁组件前，移除事件监听器等
函数式组件：
- `functional: true`
- 无状态，无实例，没有`this`上下文，无生命周期


14.指令的本质是什么
`template`：渲染模板，将数据绑定到模板中，渲染成最终的页面。
`directive`：指令，是`Vue.js`的扩展，可以自定义元素的行为，如`v-if`、`v-show`、`v-for`、`v-model`、`v-once`等。

15.常用高级特性
常用高级特性`provide`/`inject`
 
16.如何优雅获地获取夸层级组件实例（拒绝递归）
`ref`引用信息
递归查找缺点：代码繁琐，性能低效
`callback ref`：
主动通知（`setXxxRef`）
主动获取（`getXxxRef`）


组件、父组件向子组件传值（`props`）、子组件向父组件传值（`emit`）

.vue的文件，就是一个组件，每个组件.vue文件就是单个，
`vue2`和`vue3`的生命周期钩子是不同的。

传值操作：\
父组件向子组件传值：`props`
子组件向父组件传值：`$emit`

`ref`可以创建响应式的数据
`ref`里面可以是基础数据类型，可以是引用类型（复杂数据类型）：`object`、`array`

`reactive`：将普通对象转换为响应式对象,只能定义复杂数据类型
`reactive`不需要`.value`了。
`reactive`能做到的事情，`ref`都能做到。
 
箭头函数 => 箭头函数可以省略`return`关键字，如果函数体只有一行代码，可以省略花括号。

箭头函数的`this`指向在定义的的时候就已经决定了，而且是不修改的（不能有`call`，`apply`，`bind`），箭头函数的`this`指向定义的时候，外层第一个普通该函数的`thiis`。


总结：
习题归纳：
1.设计一个秒杀倒计时组件
<!-- 2.设计一个图片懒加载组件
3.设计一个轮播图组件
4.设计一个表单验证组件 -->
2.查看组件生命周期和指令周期钩子的运行顺序
<!-- 3.使用`provide`和`inject`实现跨组件通信
4.使用`ref`实现跨组件通信
5.使用`v-model`实现表单数据双向绑定
6.使用`v-html`和`v-text`实现文本内容的渲染 -->
3.使用2.6最新 `APL Vue.observable`优化响应式`provide`
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
4.`v-ant-re`f指令回调中能否对更改响应式数据？为什么？
5.箭头函数与普通函数的区别
















## 月计划：
- 学习Vue开发实战进度7/4周，完成后，发布到`github`上。
- 学习英语，争取每天听说读写。


# 2025年3月2日 星期日 晴天

周末，放松一下，好好休息。
开启记录自己美好生活，记录现在风华正茂的年纪的自己所做的事情。

# 2025年3月1日 星期六 晴天
周末，放松一下，好好休息。
周末在家整理打扫房间，洗被单衣物。下午和家人一起去花卉市场买花，看看有没有适合的花买回家。

# 2025年2月28日 星期五 晴天
## 学习计划
- 昨日：
上午：整理笔记，拓展`Vscode`操作，总结`vue`目录知识，整理`github`文件操作流程。
下午：修改`Vue`项目小demo的BUG，观看视频教学。Vue开发实战项目进度55/12。

- 今日：
上午：整理`md`笔记内容，总结课后习题，三个`Vue`知识点。

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


















# 2025年2月27日 星期四 晴天
 ### vscode修改标点符号：
 ### 多光标编辑
 1.ALt+单机（windows/Linux）\
 2.快捷键扩展（Ctrl/Cmd + D）

 ### 批量查找替换
1.简单替换（Ctrl/Cmd+H）\
2.正则表达式替换（支持复杂规则）

计算属性`computed`
- 减少模板中计算逻辑
- 数据缓存
- 依赖固定的数据类型（响应式数据）

 ### 快速生成Vue组件的方法
 `Emmet`在.vue文件中的支持情况，\
1.`Emmet` 缩写（推荐原生方式）
```
输入`vue`，然后按Tab键，即可生成一个Vue组件模板。
```
2.`Vetur `插件（官方推荐插件）
```
输入`vbase`,然后按Tab键，即可生成一个完整基础`Vue`组件模板。
```
### src下：
`assests`：静态资源，一般放图片

`components`：组件，公共组件（解耦）--- 一个东西到处用，可以省着重复去写了

`router`：路由 vue-router

`store`：状态管理 vuex

`views`：页面，页面组件（解耦）

`App.vue`：根组件，入口文件，渲染其他组件

`main.js`：入口文件，渲染根组件App.vue

`.gitignore`文件配置 忽略文件

`babel.config.js`文件配置 `babel`：做兼容的，它可以把es6以及之后的代码转为es5，支持绝大多数浏览器。

`package.json`文件配置 依赖包

`README.md`文件配置 项目说明

新创建一个文件夹 `mkdir monorepo`(文件夹名称)
                `cd monorepo`
初始化           `pnpm init -y`
                `code .`

### cd高频技巧
`cd `两层含义：\
第一：`Change Directory`，切换目录\
第二：`Compact Dise` 光盘，压缩碟，表示压缩文件。

可以通过cd ~回到用户主目录，或者`cd` -返回上一个目录。例：\
`C:\Users\YourName>cd Desktop\`
`cd C:\Users\YourName\Desktop	`进入指定绝对路径

1.快速回家
```
cd ~       # Linux/macOS 直接返回用户主目录
cd %USERPROFILE%  # Windows 专用写法
```
2.路径补全

输入 cd D → 按 Tab 键自动补全路径（支持多级目录）

### github克隆与初始化仓库操作指南
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
- 学习了vscode的多光标编辑、批量查找替换、快速生成Vue组件的方法。
- 掌握了Vue组件的核心概念，包括属性、插槽、事件。
- 了解了双向数据绑定和单向数据绑定数据流不冲突。
- 掌握了Vue组件的语法糖。
- 了解了虚拟DOM匹配的算法机制。
- 了解了数据驱动。
- git克隆与初始化仓库操作指南。




# 2025年2月26日 星期三 雨天

## 工作总结
已经在公司实习两周了，虽然还没有完全融入到公司的氛围，但也算是有了一定的工作经验。Vue基础知识与实例小项目已经完成。现在进入Vue项目实战阶段，准备按照项目流程一步步完成。今年进公司时有点不适应，但相信在公司好好提升自己的技能一定会带来收获，加油！

## 学习计划
- 继续学习Vue基础知识，掌握Vue的组件化开发、路由、Vuex等核心概念。
- 学习TypeScript，掌握TypeScript的基本语法、类型注解、接口、泛型等。
- 学习Vue项目实战，熟悉Vue项目的开发流程、规范、优化、部署等。
- 学习单元测试、E2E测试、持续集成、自动化部署等相关知识。
- 学习开源项目，了解开源项目的开发流程、规范、优化、部署等。
- 学习英文，提升英文水平。

## 月总结
- 公司实习了两周，收获颇丰，但也有很多不足，需要加强自身的学习能力，提升自己的能力。
- 等Typescript(Ts)类型，全局安装 yarn，文件类型转换。相关知识，掌握了这些知识的使用方法。
- 学习了网页设计中的切图，设计师规范标准，css回顾知识，掌握了这些知识的使用方法。


### 终端打开方式：
徽标+R，输入cmd，回车打开命令行窗口。\
文件目录行输入：cd 文件路径，回车进入指定目录。

打开后输入 code . 打开vscode编辑器。

### vscode打开方式：
打开vscode，点击左侧文件目录，输入cmd，回车打开命令行窗口。

### vscode快捷键：
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
默认设置是windows powershell，shell跟cmd有一定的差异。
<!---      

### npm install -g rimraf   // 先进行全局安装

### rimraf node_modules   // 进行删除   


-->

# 2025年2月25日 星期二 雨天

## 学习计划  

- 继续学习`Vue`知识，进行公司培训项目搭建，熟悉`Vue`项目开发流程。
### Vue组件的核心概念（一）
插件`Vetur`，`ESlint`\
- 自定义属性props,props中声明的属性\
- 原生属性attrs 没有声明的属性，默认自动挂载到组件根元素上，设置inheriAtts为false可以关闭自动挂载\
- 特殊属性class，style 挂载到组件根元素上，支持字符串，对象，数组等多种语法

<template slot="XXX"></template>
<template v-slot="XXX"></template>

作用域的插槽\
<template slot="XXX" slot-scope="scope">...</template>
<template v-slot:XXX="props">...</template>

### 三大核心概念：
属性：自定义属性props，原生属性attrs，特殊属性class，style\
插槽：普通插槽，作用域插槽，具名插槽\
事件：普通事件，事件修饰符，按键修饰符

demo多个Vue小项目实现页面切换。

习题：\
子组件为何不可以修改父组件传递的Props，如果修改了，Vue是如何监控到属性的修改并给出警告的？ 

### Vue组件的核心概念（二）
习题：\
相同名称的插槽是合并还是替换？

### 双向数据绑定和单向数据绑定数据流不冲突

- model更新view，view更新model，双向数据绑定
- v-model指令，单向数据绑定，数据流不冲突，view更新model，model更新view。
- Vue是单向数据流，不是双向绑定
- Vue的双向绑定不过是语法糖
- Object。defineProperty是用来做响应式更新的，和双向绑定没关系

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

习题：扩展Personallnfo Demo对手机号做非空且合法校验，如不合法，则给出错误提示

### 虚拟DOM匹配的算法机制，三个节点：
场景1：移动\
场景2：删除\
场景3：新增\
场景4：更新删除新建（无key）\
场景5：移动（有key）\
场景6：插入（有key）

### 数据驱动
数据来源（单向的）三个部分：
来自父元素的属性
来自组件自身的状态data
来自状态管理器，如vuex，Vue.observable

### data vs 属性props
- 状态是组件自身的数据
- 属性是来自父组件的数据 
- 状态的改变未必会触发更新
- 属性的改变未必会触发更新


习题：
数组有哪些方法支持响应式更新，如不支持如何处理，底层原理如何实现的？

由于账号密钥丢失，导致无法登录，github新账号，记录美好生活。