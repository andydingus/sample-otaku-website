// Ready to be scripted!
const lightSwitch = document.querySelector('.lightSwitch');

let lightMode = true;
let darkMode = false;
lightSwitch.addEventListener('mouseup', function() {
    if (!darkMode) {
        document.body.style.background = '#C42348';
        document.body.style.color = '#EF7674';
        darkMode = true;
        lightMode = false;
    } else {
        document.body.style.background = '#EF7674';
        document.body.style.color = '#C42348';
        lightMode = true;
        darkMode = false;
    }
});