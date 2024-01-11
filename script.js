// Ready to be scripted!
const lightSwitch = document.querySelector('.lightswitch');
const headerBanner = document.querySelector('h1.logo');
const navIcons = document.getElementsByClassName('icon');
const navLinks = document.getElementsByClassName('nav-link-text');
const articles = document.getElementsByClassName('container article');
const articleLinks = document.getElementsByClassName('article-link');
const buttons = document.getElementsByTagName('button');
const trendingChapters = document.getElementsByClassName('chapter');
const trendingEpisodes = document.getElementsByClassName('episode');
const borderEpisode = document.querySelector('.select');

// Logos for the episodes
const jjkLogo = document.createElement('img');
const frierenLogo = document.createElement('img');
const onkLogo = document.createElement('img');
const opLogo = document.createElement('img');
const nierLogo = document.createElement('img');
const bleachLogo = document.createElement('img');

jjkLogo.src = 'images/jjk-logo.png';
jjkLogo.style.maxWidth = '80%';
jjkLogo.style.maxHeight = '100%';
jjkLogo.style.margin = 'auto';

frierenLogo.src = 'images/frieren-logo.png';
frierenLogo.style.maxWidth = '80%';
frierenLogo.style.maxHeight = '100%';
frierenLogo.style.margin = 'auto';

onkLogo.src = 'images/onk-logo.png';
onkLogo.style.maxWidth = '70%';
onkLogo.style.maxHeight = '100%';
onkLogo.style.margin = 'auto';

opLogo.src = 'images/op-logo.png';
opLogo.style.maxWidth = '80%';
opLogo.style.maxHeight = '100%';
opLogo.style.margin = 'auto';

nierLogo.src = 'images/nier-logo.png';
nierLogo.style.maxWidth = '80%';
nierLogo.style.maxHeight = '100%';
nierLogo.style.margin = 'auto';

bleachLogo.src = 'images/bleach-logo.png';
bleachLogo.style.maxWidth = '50%';
bleachLogo.style.maxHeight = '100%';
bleachLogo.style.margin = 'auto';

// IntersectionObserver elements
// Allows for animation that plays when scrolled into view
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
    root: document.querySelector('.container.xtra-gap'),
    threshold: 0.1,
}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
document.querySelectorAll('[data-inviewport]').forEach(el => {
    Obs.observe(el, obsOptions);
});


let lightMode = true;
let darkMode = false;


// What is should do:
// 1) On hover: any "covered" manga should be fully "shown" (change the width to what the top chapter has).
// Top chapter should get "covered"
// 2) After hover: top manga chapter becomes "uncovered", manga that was being hovered becomes "covered" again

function setEventListeners() {
    lightSwitch.addEventListener('mouseup', function () {
        if (!darkMode) {
            document.body.style.background = '#00506F';
            document.body.style.color = '#F1ECE1';
            document.body.style.transition = 'all 1s ease-out'; // Illusion of smooth 'transition'

            // Changing nav icons
            for (let i = 0; i < navIcons.length; i++) {
                navIcons[i].style.backgroundImage = 'url(images/streetlight.png)';
            }

            // Applying the text color to the nav links
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.color = 'white';
                navLinks[i].style.transition = 'all 0.2s ease-out';
            }

            // Changing the banner
            headerBanner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("images/blue.gif")';
            headerBanner.style.backgroundColor = 'rgba(0,0,0,0.3)';
            headerBanner.style.backgroundBlendMode = 'darken';

            // Applying the text color to the article links
            for (let i = 0; i < articleLinks.length; i++) {
                articleLinks[i].style.color = '#FF6666';
                articleLinks[i].style.transition = 'all 1s ease-out';
            }

            // Changing the buttons
            // this.textContent = 'Light Mode';
            this.setAttribute('src', 'images/moon.svg');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = '#F1ECE1';
                buttons[i].style.color = '#311D3F';
                buttons[i].style.transition = 'all 1s ease-out'; // Animation
            }

            darkMode = true;
            lightMode = false;
        } else {
            document.body.style.background = '#F1ECE1';
            document.body.style.color = '#311D3F';

            // Changing nav icons
            for (let i = 0; i < navIcons.length; i++) {
                navIcons[i].style.backgroundImage = 'url(images/sakura.png)';
            }

            // Applying the text color to the nav links
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.color = '#311D3F';
            }

            // Changing the banner
            headerBanner.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), url("images/pink.gif")';
            headerBanner.style.backgroundColor = 'rgba(255,255,255,0.2)';
            headerBanner.style.backgroundBlendMode = 'lighten';

            // Applying the text color to the article links
            for (let i = 0; i < articleLinks.length; i++) {
                articleLinks[i].style.color = '#AC7CB4';
            }

            // Changing the lightswitch
            // this.textContent = 'Dark Mode';
            this.setAttribute('src', 'images/sun.svg');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = '#311D3F';
                buttons[i].style.color = '#F1ECE1';
                buttons[i].style.transition = 'all 1s ease-out';
            }

            lightMode = true;
            darkMode = false;
        }
    });

    // Trending chapters' animations
    for (let i = 0; i < trendingChapters.length; i++) {
        trendingChapters[i].addEventListener('mouseover', function () {
            trendingChapters[i].style.width = '400px';
            trendingChapters[i].style.height = '600px';
        });

        trendingChapters[i].addEventListener('mouseout', function () {
            trendingChapters[i].style.width = '100px';
            trendingChapters[i].style.height = '300px';
        })
    }

    // Trending episodes' animations
    for (let i = 0; i < trendingEpisodes.length; i++) {
        trendingEpisodes[i].addEventListener('mouseover', function () {
            trendingEpisodes[i].style.width = '375px';
            trendingEpisodes[i].style.height = '500px';
            trendingEpisodes[i].style.boxShadow = '10px 10px';
            // Looking to add the logo of the anime onto the middle of the gif somehow
            // Use element.classList.contains(class) to achieve the next step (each anime has their own logo when hovered)
            if (trendingEpisodes[i].classList.contains('jjk')) {
                trendingEpisodes[i].appendChild(jjkLogo);
            } else if (trendingEpisodes[i].classList.contains('frieren')) {
                trendingEpisodes[i].appendChild(frierenLogo);
            } else if (trendingEpisodes[i].classList.contains('onk')) {
                trendingEpisodes[i].appendChild(onkLogo);
            } else if (trendingEpisodes[i].classList.contains('op-wano')) {
                trendingEpisodes[i].appendChild(opLogo);
            } else if (trendingEpisodes[i].classList.contains('nier')) {
                trendingEpisodes[i].appendChild(nierLogo);
            } else {
                trendingEpisodes[i].appendChild(bleachLogo);
            }

        });

        trendingEpisodes[i].addEventListener('mouseout', function () {
            trendingEpisodes[i].style.width = '375px';
            trendingEpisodes[i].style.height = '500px';
            trendingEpisodes[i].style.boxShadow = '10px -10px';
            // Remove logo of anime from the middle when mouse isn't hovering
            if (trendingEpisodes[i].classList.contains('jjk')) {
                trendingEpisodes[i].removeChild(jjkLogo);
            } else if (trendingEpisodes[i].classList.contains('frieren')) {
                trendingEpisodes[i].removeChild(frierenLogo);
            } else if (trendingEpisodes[i].classList.contains('onk')) {
                trendingEpisodes[i].removeChild(onkLogo);
            } else if (trendingEpisodes[i].classList.contains('op-wano')) {
                trendingEpisodes[i].removeChild(opLogo);
            } else if (trendingEpisodes[i].classList.contains('nier')) {
                trendingEpisodes[i].removeChild(nierLogo);
            } else {
                trendingEpisodes[i].removeChild(bleachLogo);
            }

        })
    }
}



setEventListeners();


// function chapterSelect() {

// }

// Icon creds:
// Streelight: <a href="https://www.flaticon.com/free-icons/street-light" title="street light icons">Street light icons created by Freepik - Flaticon</a>;

// Using the DOM and JS to add eventListeners to all class "container article" items
// for (let i = 0; i < articles.length; i++) {
//     articles[i].addEventListener('mouseover', function() {
//
//     });
// }