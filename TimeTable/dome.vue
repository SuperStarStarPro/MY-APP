<template>
    <div>
      <p>距离秒杀开始还剩：<span>{{ countdown }}</span></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SeckillCountdown',
    props: {
      // 秒杀开始的时间戳，单位为毫秒
      startTime: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        now: new Date().getTime(),
        intervalId: null
      };
    },
    computed: {
      countdown() {
        const diff = this.startTime - this.now;
        if (diff <= 0) {
          return '秒杀已经开始或已结束';
        }
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return `${hours}小时 ${minutes}分钟 ${seconds}秒`;
      }
    },
    created() {
      // 每秒更新一次当前时间
      this.intervalId = setInterval(() => {
        this.now = new Date().getTime();
      }, 1000);
    },
    beforeDestroy() {
      // 清除定时器
      clearInterval(this.intervalId);
    }
  };
  </script>
  
  <style scoped>
  /* 你可以在这里添加一些样式 */
  p {
    font-size: 20px;
    color: #333;
  }
  </style>
  