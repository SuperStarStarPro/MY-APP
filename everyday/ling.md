# 2025年2月27日 星期四 
 ### vscode修改标点符号：
 #### 多光标编辑
 1.ALt+单机（windows/Linux）
 2.快捷键扩展（Ctrl/Cmd + D）

 ##### 批量查找替换
1.简单替换（Ctrl/Cmd+H） c
2.正则表达式替换（支持复杂规则）

计算属性computed
- 减少模板中计算逻辑
- 数据缓存
- 依赖固定的数据类型（响应式数据）

 ### 快速生成Vue组件的方法
 Emmet在.vue文件中的支持情况，
1.Emmet 缩写（推荐原生方式）
···
输入'vue'，然后按Tab键，即可生成一个Vue组件模板。
···
2.Vetur 插件（官方推荐插件）
···
输入'vbase',然后按Tab键，即可生成一个完整基础Vue组件模板。
···
src下：
assests：静态资源，一般放图片
components：组件，公共组件（解耦）--- 一个东西到处用，可以省着重复去写了
router：路由 vue-router
store：状态管理 vuex
views：页面，页面组件（解耦）
App.vue：根组件，入口文件，渲染其他组件
main.js：入口文件，渲染根组件App.vue

.gitignore文件配置 忽略文件
babel.config.js文件配置 babel：做兼容的，它可以把es6以及之后的代码转为es5，支持绝大多数浏览器。
package.json文件配置 依赖包
README.md文件配置 项目说明

新创建一个文件夹 mkdir monorepo(文件夹名称)
                cd monorepo
初始化           pnpm init -y
                code .   
### cd高频技巧
cd 两层含义：
第一：Change Directory，切换目录
第二：Compact Dise 光盘，压缩碟，表示压缩文件。

可以通过cd ~回到用户主目录，或者cd -返回上一个目录。例：
C:\Users\YourName>cd Desktop
cd C:\Users\YourName\Desktop	进入指定绝对路径

1.快速回家
···
cd ~       # Linux/macOS 直接返回用户主目录
cd %USERPROFILE%  # Windows 专用写法
···
2.路径补全
输入 cd D → 按 Tab 键自动补全路径（支持多级目录）



















# 2025年2月26日 星期三 雨天

# 工作总结
已经在公司实习两周了，虽然还没有完全融入到公司的氛围，但也算是有了一定的工作经验。Vue基础知识与实例小项目已经完成。现在进入Vue项目实战阶段，准备按照项目流程一步步完成。今年进公司时有点不适应，但相信在公司好好提升自己的技能一定会带来收获，加油！

#### 学习计划
- 继续学习Vue基础知识，掌握Vue的组件化开发、路由、Vuex等核心概念。
- 学习TypeScript，掌握TypeScript的基本语法、类型注解、接口、泛型等。
- 学习Vue项目实战，熟悉Vue项目的开发流程、规范、优化、部署等。
- 学习单元测试、E2E测试、持续集成、自动化部署等相关知识。
- 学习开源项目，了解开源项目的开发流程、规范、优化、部署等。
- 学习英文，提升英文水平。

#### 月总结
- 公司实习了两周，收获颇丰，但也有很多不足，需要加强自身的学习能力，提升自己的能力。
- 等Typescript(Ts)类型，全局安装 yarn，文件类型转换。相关知识，掌握了这些知识的使用方法。
- 学习了网页设计中的切图，设计师规范标准，css回顾知识，掌握了这些知识的使用方法。


终端打开方式：
徽标+R，输入cmd，回车打开命令行窗口。
文件目录行输入：cd 文件路径，回车进入指定目录。

打开后输入 code . 打开vscode编辑器。

vscode打开方式：
打开vscode，点击左侧文件目录，输入cmd，回车打开命令行窗口。

vscode快捷键：
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

命令行运行时需要注意的事项：
默认设置是windows powershell，shell跟cmd有一定的差异。
<!---      

### npm install -g rimraf   // 先进行全局安装

### rimraf node_modules   // 进行删除   


-->


# 2025年2月25日 星期二 雨天

#### 学习计划  

- 继续学习Vue知识，进行公司培训项目搭建，熟悉Vue项目开发流程。
#### Vue组件的核心概念（一）
插件Vetur，ESlint
- 自定义属性props,props中声明的属性
- 原生属性attrs 没有声明的属性，默认自动挂载到组件根元素上，设置inheriAtts为false可以关闭自动挂载
- 特殊属性class，style 挂载到组件根元素上，支持字符串，对象，数组等多种语法

<template slot="XXX"></template>
<template v-slot="XXX"></template>

作用域的插槽
<template slot="XXX" slot-scope="scope">...</template>
<template v-slot:XXX="props">...</template>

##### 三大核心概念：
属性：自定义属性props，原生属性attrs，特殊属性class，style
插槽：普通插槽，作用域插槽，具名插槽
事件：普通事件，事件修饰符，按键修饰符

demo多个Vue小项目实现页面切换。

习题：
子组件为何不可以修改父组件传递的Props，如果修改了，Vue是如何监控到属性的修改并给出警告的？ 

#### Vue组件的核心概念（二）
习题：
相同名称的插槽是合并还是替换？

#### 双向数据绑定和单向数据绑定数据流不冲突

- model更新view，view更新model，双向数据绑定  
- v-model指令，单向数据绑定，数据流不冲突，view更新model，model更新view。
- Vue是单向数据流，不是双向绑定
- Vue的双向绑定不过是语法糖
- Object。defineProperty是用来做响应式更新的，和双向绑定没关系

#### 语法糖
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

#### 虚拟DOM匹配的算法机制，三个节点：
场景1：移动
场景2：删除
场景3：新增
场景4：更新删除新建（无key）
场景5：移动（有key）
场景6：插入（有key）

#### 数据驱动
数据来源（单向的）三个部分：
来自父元素的属性
来自组件自身的状态data
来自状态管理器，如vuex，Vue.observable

#### data vs 属性props
- 状态是组件自身的数据
- 属性是来自父组件的数据 
- 状态的改变未必会触发更新
- 属性的改变未必会触发更新


习题：
数组有哪些方法支持响应式更新，如不支持如何处理，底层原理如何实现的？

由于账号密钥丢失，导致无法登录，github新账号，记录美好生活。