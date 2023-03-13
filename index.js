let stars = document.getElementById('stars'); 
let text = document.getElementById('text'); 
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.marginRight = value * 4 + 'px';
    text.style.marginRight = value * 6 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.1 + 'px';
})