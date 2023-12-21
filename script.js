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

    for (let i = 0; i < trendingEpisodes.length; i++) {
        trendingEpisodes[i].addEventListener('mouseover', function () {
            trendingEpisodes[i].style.width = '400px';
            trendingEpisodes[i].style.height = '600px';
        });

        trendingEpisodes[i].addEventListener('mouseout', function () {
            trendingEpisodes[i].style.width = '100px';
            trendingEpisodes[i].style.height = '300px';
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