import { CountUp } from './node_modules/countup.js/dist/countUp.js';

window.onload = function() {
    var countUp = new CountUp('num', 5000, {suffix: ' user'});
    countUp.start();
  }

