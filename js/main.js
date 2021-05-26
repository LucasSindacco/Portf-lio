// Menu slide 

const btnOpen = document.querySelector('.toggle i');
btnOpen.addEventListener('click', function() {
    const openSlide = document.querySelector('.menu-slide .container');
    openSlide.classList.toggle('active');
});

const btnClose = document.querySelector('.exit');
btnClose.addEventListener('click', function() {
    const openSlide = document.querySelector('.menu-slide .container');
    openSlide.classList.toggle('active');
});