<template>
    <div>
      <p v-if="!hasStarted">距离秒杀开始还剩：{{ countdown }}</p>
      <p v-else-if="hasStarted && !isOver">秒杀进行中，距离结束还剩：{{ countdown }}</p>
      <p v-else>秒杀已结束</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SeckillCountdown',
    props: {
      startTime: {
        type: Date,
        required: true
      },
      endTime: {
        type: Date,
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
      hasStarted() {
        return this.now >= this.startTime.getTime();
      },
      isOver() {
        return this.now > this.endTime.getTime();
      },
      countdown() {
        if (!this.hasStarted) {
          const diff = this.startTime.getTime() - this.now;
          return this.formatTime(diff);
        } else if (!this.isOver) {
          const diff = this.endTime.getTime() - this.now;
          return this.formatTime(diff);
        } else {
          return '00:00:00';
        }
      }
    },
    methods: {
      formatTime(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  
        return `${days}天 ${this.pad(hours)}小时 ${this.pad(minutes)}分钟 ${this.pad(seconds)}秒`;
      },
      pad(value) {
        return value < 10 ? `0${value}` : `${value}`;
      }
    },
    mounted() {
      this.intervalId = setInterval(() => {
        this.now = new Date().getTime();
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  };
  </script>
  
  <style scoped>
  /* 可以根据需要添加样式 */
  </style>
  