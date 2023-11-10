document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-scards',{delay: 500});
ScrollReveal().reveal('.cards-banners-one');
ScrollReveal().reveal('.cards-banners-two');