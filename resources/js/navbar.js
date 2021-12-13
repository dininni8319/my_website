
let button = document.querySelector("#nav-li-icon")

let a = document.querySelectorAll('.nav-link')

let navlink = document.querySelectorAll('.nav-link')

let ul = document.querySelector('.row')

let nav = document.querySelector('.container');

document.addEventListener('scroll', () => {
   let scrolled = window.scrollY;

   if (scrolled > 30) {
      nav.style.backgroundColor = 'rgb(255, 255, 255, 0.5)'

   } else {
      nav.style.backgroundColor = 'var(--backgroundColor)'

   }
})

window.onload = initMouseOver;

function initMouseOver() {
   let b = a
   
   const randomic1 = () => {
      return Math.round(Math.random() * 255)
   }
   
   const randomic2 = () => {
      return Math.round(Math.random() * 255)
   }
   
   const randomic3 = () => {
      return Math.round(Math.random() * 255)
   }

   let mouseIn =  a.forEach(el => {
      el.addEventListener('mouseover', () => { 

         if (el.innerText == "") {
            return;
         }
         
         scrollDown()
         el.style.fontSize = '30px';
         el.style.color = `rgb(${randomic1()}, ${randomic2()}, ${randomic3()}, 0.9)`;
         el.style.transition = '2s';
         return el.textContent = `${el.innerText.split('').reverse().join('')}`; 

      }) 
   });
   
   let mouseOut = b.forEach(el => {
         el.addEventListener('mouseout', () => {
            
            if (el.innerText == "") {
               return;
            }

            el.style.fontSize = ''
            el.style.color = ''
            el.style.transition = '2s'
            return el.textContent = `${el.innerText.split('').reverse().join('')}`;
       })
   })

      return mouseIn ? mouseOut : mouseIn
      // return mouseOut
}

let active = document.querySelector('ul')

function rotate() {
   if (!active.classList.contains("active")) {
      console.log('hello wolrd sksksk');
      return button.style.transform = 'rotate(45deg)'
   } else {
      console.log('lol');
      return button.style.transform = 'rotate(-360deg)'
   }
}

function dropDown(func) {
   if (active.classList.contains("active")) {
      
      return active.classList.remove("active")
   } 
     return active.classList.add("active"); 
}

button.addEventListener('click', dropDown)
button.addEventListener('click', rotate)


function scrollDown() {
   navlink.forEach(el => {

         if (el.innerText === 'Experiences') {
            el.addEventListener('click', () => {
               window.scrollTo(0, 500)
            })
         }  else if (el.innerText === 'Contact' ) {
            el.addEventListener('click', () => {
               window.scrollTo(0, 2000)
            })
         } else if (el.innerText === 'Projects' ) {
            el.addEventListener('click', () => {
               window.scrollTo(0, 1000)
            })
         } else if (el.innerText === 'Games' ) {
            el.addEventListener('click', () => {
               window.scrollTo(0, 1600)
            })
         }  else if (el.innerText === 'Home' ) {
            el.addEventListener('click', () => {
               window.scrollTo(0, 0)
            })
          
         } 
                      
   })
}








