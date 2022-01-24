function scrollY() {
    let btnUp = document.querySelector('.btn-up');
    
    showUpBtn()
    btnUp.addEventListener('click', function (params) {
    
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }) 
}

function showUpBtn() {
    let btnUp = document.querySelector('.btn-up');

    if (document.documentElement.scrollTop == 0) {

      return  btnUp.style.display = 'none';  
    } 

    return btnUp.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', scrollY)

