let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', movement);

function movement(){    
    const value = window.scrollY;

    stars.style.left = Math.min(value * 0.25, stars) + 'px';
    moon.style.top = Math.min(value * 1.05, moon) + 'px';
    mountains_behind.style.top = Math.min(value * 0.5, mountains_behind) + 'px';
    btn.style.marginTop = Math.min(value * 1.5) + 'px';
    mountains_front.style.top = Math.min(value * 0, mountains_front) + 'px';

}    

