
let button = document.querySelector("#nav-li-icon")

let a = document.querySelectorAll('.nav-link')

let ul = document.querySelector('.row')

let nav = document.querySelector('.container');

document.addEventListener('scroll', () => {
   let scrolled = window.scrollY;

   if (scrolled > 30) {
      nav.style.background = 'rgb(159,159,150)'
      nav.style.background = 'linear-gradient(0deg, rgba(159,159,150,0.018644957983193322) 11%, rgba(255,255,255,0.938813025210084) 13%, rgba(246,245,242,0.639093137254902) 68%)'
      
   } else {
      nav.style.backgroundColor = 'var(--backgroundColor)'
   }
})

document.addEventListener('DOMContentLoaded', initMouseOver)

function initMouseOver() {
      
      if (window.matchMedia("(max-width:700px)").matches){
          return;

      } else {
         
            let mouseIn =  a.forEach(el => {
               el.addEventListener('mouseover', () => { 
   
                  if (el.innerText == "") {
                     return;
                  } 
               
                  el.style.fontSize = '30px';
                  el.style.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 0.9)`;
                  el.style.transition = '2s';
                  return el.textContent = `${el.innerText.split(' ').reverse().join('') }`; 
               }) 
            });
         
            let mouseOut = a.forEach(el => {
                  el.addEventListener('mouseout', () => {
                     
                     if (el.innerText == "") {
                        return;
                     }

                     el.style.fontSize = ''
                     el.style.color = 'black'
                     el.style.transition = '2s'
                     return el.textContent = `${el.innerText.split(' ').reverse().join('')}`;
               })
            })
            return mouseIn ? mouseOut : mouseIn 
      }
} 
            
let active = document.querySelector('ul')

function rotate() {
      if (!active.classList.contains("active")) {

         return button.style.transform = 'rotate(45deg)'
      } 
      return button.style.transform = 'rotate(-360deg)'
   
}

function dropDown(e) {
      e.preventDefault()

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
   
      if (window.matchMedia("(min-width:700px)").matches){
            a.forEach(el => {
                  let inner = el.innerText

                  const navLinks = {
                     'Skills' : 650,
                     'Contact' : 2500,
                     'Projects' : 1200,
                     'Games' : 1800,
                     'Home' : 0
                  } 

                  el.addEventListener('click', () => {

                     window.scrollTo(0, navLinks[inner])
                  })                         
            })
      } 
       
      if (window.matchMedia("(max-width:700px)").matches){
      
         a.forEach(el => {
               let inner = el.innerText;

               const navLinks = {
                  'Skills' : 1400,
                  'Contact' : 4000,
                  'Projects' : 2300,
                  'Games' : 800,
                  'Home' : 0
               }

               el.addEventListener('touchend', () => {
               document.body.classList.remove('lock-scroll')
               active.classList.add("active");
               window.scrollTo(0, navLinks[inner])
               })
         })
      }
   } 

document.addEventListener('DOMContentLoaded', scrollDown)





