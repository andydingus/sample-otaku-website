// Ready to be scripted!
const lightSwitch = document.querySelector('.btn');
const headerBanner = document.querySelector('h1.logo');
let navLinks = document.getElementsByClassName('nav-link-text');
let articles = document.getElementsByClassName('container article');

let lightMode = true;
let darkMode = false;
lightSwitch.addEventListener('mouseup', function() {
    if (!darkMode) {
        document.body.style.background = '#311D3F';
        document.body.style.color = '#F1ECE1';

        // Applying the text color to the nav links
        for (let i = 0, len = navLinks.length; i < len; i++) {
            navLinks[i].style.color = 'white';
        }

        // Changing the banner
        headerBanner.style.backgroundImage = 'url(images/blue.gif)';
        headerBanner.style.backgroundBlendMode = 'normal';

        darkMode = true;
        lightMode = false;
    } else {
        document.body.style.background = '#F1ECE1';
        document.body.style.color = '#311D3F';

        // Applying the text color to the nav links
        for (let i = 0, len = navLinks.length; i < len; i++) {
            navLinks[i].style.color = '#311D3F';
        }

        // Changing the banner
        headerBanner.style.backgroundImage = 'url(images/pink.gif)';
        headerBanner.style.backgroundBlendMode = 'normal';
        
        lightMode = true;
        darkMode = false;
    }
});

// Using the DOM and JS to add eventListeners to all class "container article" items
// for (let i = 0; i < articles.length; i++) {
//     articles[i].addEventListener('mouseover', function() {
//
//     });
// }