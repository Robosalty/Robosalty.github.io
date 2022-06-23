let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', movement);

function movement(){    
    const value = window.scrollY;

    stars.style.left = Math.min(value * 0.25, stars.height) + 'px';
    moon.style.top = Math.min(value * 1.05, moon.height/2) + 'px';
    mountains_behind.style.top = Math.min(value * 0.5, mountains_behind.height/2) + 'px';
    mountains_front.style.top = Math.min(value * 0, mountains_front.height/2) + 'px';

}    

