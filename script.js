// Ready to be scripted!
const lightSwitch = document.querySelector('.btn');
let articles = document.getElementsByClassName('container article');

let lightMode = true;
let darkMode = false;
// lightSwitch.addEventListener('mouseup', function() {
//     if (!darkMode) {
//         document.body.style.background = '#311D3F';
//         document.body.style.color = '#E23E57';
//         darkMode = true;
//         lightMode = false;
//     } else {
//         document.body.style.background = '#E23E57';
//         document.body.style.color = '#311D3F';
        
//         lightMode = true;
//         darkMode = false;
//     }
// });

// Using the DOM and JS to add eventListeners to all class "container article" items
// for (let i = 0; i < articles.length; i++) {
//     articles[i].addEventListener('mouseover', function() {
//
//     });
// }