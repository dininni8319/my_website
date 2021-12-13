let btnUp = document.querySelector('.btn-up');
let btnDown = document.querySelector('.btn-down');

// background-color: rgb(255, 255, 255, 0.9);

window.onscroll = function () {
    
    showUpBtn()
    btnUp.addEventListener('click', function (params) {
    
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }) 
}

// console.log(document.documentElement.scrollTop, 'test');
function showUpBtn() {
    if (document.documentElement.scrollTop == 0) {

        btnUp.style.display = 'none';  
    } else {

        btnUp.style.display = 'block';
    }
}


