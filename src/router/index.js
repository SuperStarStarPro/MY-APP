//导入视图组件
import Vue from 'vue';
import Router from 'vue-router';
import BigProps from '../views/BigProps.vue';
import Event from '../views/Event.vue';
import Index from '../views/index.vue'; // 将组件名改为大写以符合命名规范
import Props from '../views/Props.vue';
import Slot from '../views/Slot.vue';
import NotFound from '../views/NotFound.vue'; // 假设你有一个NotFound.vue组件用于404页面

Vue.use(Router);

//创建并暴露一个组件
export default new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes: [ // 配置路由
    {
      path: '/BigProps',
      component: BigProps,
    },
    {
      path: '/Event',
      component: Event,
    },
    {
      path: '/',
      component: Index, // 修改路径为根路径，并将index改写为Index以符合命名规范
    },
    {
      path: '/Props',
      component: Props,
    },
    {
      path: '/Slot',
      component: Slot,
    },
    {
      path: '*', // 错误处理路由，匹配所有不存在的路径
      component: NotFound,
    }
  ]
});
