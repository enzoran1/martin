
// event click

const btn = document.getElementById('btn');

const img = document.getElementById('img');


btn.addEventListener('click', () => {
    img.classList.toggle('show');
})



// event souri

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');


mouseEvent.addEventListener('mousemove', (event) => {
    horizontal.innerHTML = event.x;
    vertical.innerHTML = event.y;

    mouseEvent.style.left = event.x / window.innerWidth * 100 + "%";
    
    if (event.x > 1000) {

        document.body.style.filter = "blur(3px)";
    }

    else if(event.x < 1000) {

        document.body.style.filter = "none";


    }    
})




