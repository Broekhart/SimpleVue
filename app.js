import SimpleVue from './scripts/SimpleVue.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = new SimpleVue({
    el: '#app',
    data: {
      count: 0,
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    },
  });
});
