import { CountUp } from './node_modules/countup.js/dist/countUp.js';


    var countUp = new CountUp('num', 5000, {suffix: ' user'});
    countUp.start();


AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
