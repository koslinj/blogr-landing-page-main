
let hamburger = document.querySelector('.hamburger');
let navparts = document.querySelectorAll('.nav-part');
let header = document.querySelector('.header');

hamburger.addEventListener("click", function() {
    header.classList.toggle("active");
    navparts.forEach((part) => {
        part.classList.remove("open");
    })
})

navparts.forEach( function(part){
    part.querySelector('button').addEventListener('click', function(){
        part.classList.toggle("open");
    })
})