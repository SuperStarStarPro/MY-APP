import Vue from 'vue';
import Router from 'vue-router';
import BigProps from '../views/BigProps.vue';
import Event from '../views/Event.vue';
import index from '../views/index.vue';
import Props from '../views/Props.vue';
import Slot from '../views/Slot.vue';

Vue.use(Router);

//创建并暴露一个组件
export default new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes: [//配置路由(Children通常用来配置子路由)
    {
      path: '/BigProps',
      component: BigProps,
    },
    {
      path: '/Event',
      component: Event,
    },
    {
      path: '/index',
      component: index,
    },
    {
      path: '/Props',
      component: Props,
    },
    {
      path: '/Slot',
      component: Slot,
    }
  ]
});