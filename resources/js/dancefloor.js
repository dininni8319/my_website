// window

function danceFloor() {

    function randomColor1() {
        return Math.round(Math.random() * 255) 
    }
    
    function randomColor2() {
        return Math.round(Math.random() * 255) 
    }
    
    function randomColor3() {
        return Math.round(Math.random() * 255) 
    }
    
    let container = document.querySelector('#container')
    
    let n = 8   
    let i = -1;
    
    let s = '';

    while (++i < n) {
        s+= '<div class="row-dance">'

        for (let j = 0; j < n; j++) {

            s += `<div class="cell" style="background: rgb(${randomColor1()}, ${randomColor2()}, ${randomColor3()}, 0.9)">  </div>`  
       }
    
       s+= '</div>'  
    }

    container.innerHTML = s
}

function setInt(params) {

    let btn = document.querySelector('#btn')
    // console.log(btn, 'test');
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

const buttons = setInt()




