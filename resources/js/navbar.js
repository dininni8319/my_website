
let button = document.querySelector("#nav-li-icon")

let a = document.querySelectorAll('.nav-link')

let navlink = document.querySelectorAll('.nav-link')

let ul = document.querySelector('.row')

let nav = document.querySelector('.container');

document.addEventListener('scroll', () => {
   let scrolled = window.scrollY;

   if (scrolled > 30) {
      nav.style.background = 'rgb(159,159,150)'
      nav.style.background = 'linear-gradient(0deg, rgba(159,159,150,0.018644957983193322) 5%, rgba(255,255,255,0.938813025210084) 12%, rgba(246,245,242,0.639093137254902) 63%)'
      

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
               // console.log(el.textContent = `${el.innerText.split('').reverse().join('')}`, 'test words');
               return el.textContent = `${el.innerText.split(' ').reverse().join('')}`; 

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
            return el.textContent = `${el.innerText.split(' ').reverse().join('')}`;
       })
   })

      return mouseIn ? mouseOut : mouseIn
      // return mouseOut
}

let active = document.querySelector('ul')

function rotate() {
   if (!active.classList.contains("active")) {

      return button.style.transform = 'rotate(45deg)'
   } else {

      return button.style.transform = 'rotate(-360deg)'
   }
}

function dropDown(func) {
   if (active.classList.contains("active")) {
      
      document.body.classList.add('lock-scroll')
       
      return active.classList.remove("active")
   }
   document.body.classList.remove('lock-scroll')
   return active.classList.add("active"); 
}

button.addEventListener('click', dropDown)
button.addEventListener('click', rotate)

function scrollDown() {
      document.body.classList.remove('lock-scroll')
      if (window.matchMedia("(min-width:700px)").matches){
            navlink.forEach(el => {
               
                  if (el.innerText === 'Experiences') {
                     el.addEventListener('click', () => {
                        window.scrollTo(0, 650)
                     })
                  }  else if (el.innerText === 'Contact' ) {
                     el.addEventListener('click', () => {
                        window.scrollTo(0, 2500)
                     })
                  } else if (el.innerText === 'Projects' ) {
                     el.addEventListener('click', () => {
                        window.scrollTo(0, 1200)
                     })
                  } else if (el.innerText === 'Games' ) {
                     el.addEventListener('click', () => {
                        window.scrollTo(0, 1800)
                     })
                  }  else if (el.innerText === 'Home' ) {
                     el.addEventListener('click', () => {
                        window.scrollTo(0, 0)
                     })
                  
                  } 
                              
            })

      }else {
         navlink.forEach(el => {
               
            if (el.innerText === 'Experiences') {
               el.addEventListener('click', () => {
                  window.scrollTo(0, 1500)
               })
            }  else if (el.innerText === 'Contact' ) {
               el.addEventListener('click', () => {
                  window.scrollTo(0, 4000)
               })
            } else if (el.innerText === 'Projects' ) {
               el.addEventListener('click', () => {
                  window.scrollTo(0, 2300)
               })
            } else if (el.innerText === 'Games' ) {
               el.addEventListener('click', () => {
                  window.scrollTo(0, 2900)
               })
            }  else if (el.innerText === 'Home' ) {
               el.addEventListener('click', () => {
                  window.scrollTo(0, 0)
               })
            
           } 

         })
      }
   } 









