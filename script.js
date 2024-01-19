// Ready to be scripted!
const lightSwitch = document.querySelector('.lightswitch');
const headerBanner = document.querySelector('h1.logo');
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const nav = document.querySelector('.nav-div');
const navIcons = document.getElementsByClassName('icon');
const navLinks = document.querySelectorAll('.nav-link');
const navLinksText = document.getElementsByClassName('nav-link-text');
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
            setDarkModeStyles();
        } else {
            setLightModeStyles();
        }
    });

    // Trending episodes' animations
    for (let i = 0; i < trendingEpisodes.length; i++) {
        trendingEpisodes[i].addEventListener('mouseover', function () {
            setTrendingEpisodeStyles(trendingEpisodes[i]);
        });

        trendingEpisodes[i].addEventListener('mouseout', function () {
            resetTrendingEpisodeStyles(trendingEpisodes[i]);
        });
    }

    
}

function setDarkModeStyles() {
    document.body.style.background = '#00506F';
    document.body.style.color = '#F1ECE1';
    document.body.style.transition = 'all 1s ease-out';

    // Changing nav icons
    setNavIconsStyles('url(images/streetlight.png)', 'white');

    // Changing the banner
    headerBanner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("images/blue.gif")';
    headerBanner.style.backgroundColor = 'rgba(0,0,0,0.3)';
    headerBanner.style.backgroundBlendMode = 'darken';

    // Applying the text color to the article links
    setArticleLinksStyles('#FF6666');

    // Changing the buttons
    setButtonsStyles('#F1ECE1', '#311D3F');

    darkMode = true;
    lightMode = false;
}

function setLightModeStyles() {
    document.body.style.background = '#F1ECE1';
    document.body.style.color = '#311D3F';

    // Changing nav icons
    setNavIconsStyles('url(images/sakura.png)', '#311D3F');

    // Changing the banner
    headerBanner.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), url("images/pink.gif")';
    headerBanner.style.backgroundColor = 'rgba(255,255,255,0.2)';
    headerBanner.style.backgroundBlendMode = 'lighten';

    // Applying the text color to the article links
    setArticleLinksStyles('#AC7CB4');

    // Changing the buttons
    setButtonsStyles('#311D3F', '#F1ECE1');

    lightMode = true;
    darkMode = false;
}

function setNavIconsStyles(backgroundImage, color) {
    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].style.backgroundImage = backgroundImage;
    }

    // Applying the text color to the nav links
    for (let i = 0; i < navLinksText.length; i++) {
        navLinksText[i].style.color = color;
        navLinksText[i].style.transition = 'all 0.2s ease-out';
    }
}

function setArticleLinksStyles(color) {
    for (let i = 0; i < articleLinks.length; i++) {
        articleLinks[i].style.color = color;
        articleLinks[i].style.transition = 'all 1s ease-out';
    }
}

function setButtonsStyles(backgroundColor, color) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = backgroundColor;
        buttons[i].style.color = color;
        buttons[i].style.transition = 'all 1s ease-out';
    }
}

function setTrendingEpisodeStyles(episode) {
    // Additional logic for trending episodes' mouseover event
    // ...
    if (episode.classList.contains('jjk')) {
        episode.appendChild(jjkLogo);
    } else if (episode.classList.contains('frieren')) {
        episode.appendChild(frierenLogo);
    } else if (episode.classList.contains('onk')) {
        episode.appendChild(onkLogo);
    } else if (episode.classList.contains('op-wano')) {
        episode.appendChild(opLogo);
    } else if (episode.classList.contains('nier')) {
        episode.appendChild(nierLogo);
    } else {
        episode.appendChild(bleachLogo);
    }
}

function resetTrendingEpisodeStyles(episode) {
    // Additional logic for trending episodes' mouseout event
    if (episode.classList.contains('jjk')) {
        episode.removeChild(jjkLogo);
    } else if (episode.classList.contains('frieren')) {
        episode.removeChild(frierenLogo);
    } else if (episode.classList.contains('onk')) {
        episode.removeChild(onkLogo);
    } else if (episode.classList.contains('op-wano')) {
        episode.removeChild(opLogo);
    } else if (episode.classList.contains('nier')) {
        episode.removeChild(nierLogo);
    } else {
        episode.removeChild(bleachLogo);
    }
}

const navSlide = () => {
    const toggleNav = () => {
        nav.classList.toggle('nav-active');
        nav.classList.toggle('nav-darken');
        document.body.classList.toggle('nav-active');
    };

    const animateLinks = () => {
        navLinks.forEach((link, index) => {
            const animationDelay = index / 10 + 0.3;
            link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${animationDelay}s`;
        });
    };

    const toggleBurgerAnimation = () => {
        hamburger.classList.toggle('toggle');
    };

    // Toggle nav event
    hamburger.addEventListener('click', () => {
        toggleNav();
        animateLinks();
        toggleBurgerAnimation();
    });

    cross.addEventListener('click', () => {
        toggleNav();
        toggleBurgerAnimation();
        animateLinks();
    });
};

setEventListeners();
navSlide();


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