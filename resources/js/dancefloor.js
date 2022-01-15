
function danceFloor() {

    let container = document.querySelector('#container')
    
    let n = 8 , i = -1, s = '';

    while (++i < n) {
        s += '<div class="row-dance">'

        for (let j = 0; j < n; j++) {

            s += `<div class="cell" style="background: rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 0.9)">  </div>`  
       }
    
       s += '</div>'  
    }

    container.innerHTML = s
}

function setInt(params) {

    let btn = document.querySelector('#btn')
   
    let btnStop = document.querySelector('.btn-stop')
    
    let interval;
    
    btn.addEventListener('click', () => {
        interval = setInterval(() => {
                danceFloor()
            }, 500)
       
    })
    
    btnStop.addEventListener('click', () => {
       clearInterval(interval)
        
    })
}

document.addEventListener('DOMContentLoaded', setInt)



