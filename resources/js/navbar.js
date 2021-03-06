let button = document.querySelector("#nav-li-icon")

document.addEventListener('scroll', () => {
   
   let nav = document.querySelector('.container');
   let scrolled = window.scrollY;
   
   // if (scrolled > 30) {
   //    nav.style.background = 'rgb(2,0,36)'
   //    nav.style.background = 'linear-gradient(76deg, rgba(2,0,36,1) 0%, rgba(242,241,235,0.228836745358585) 0%)'
      
   // } else {
      nav.style.backgroundColor = 'var(--backgroundColor)'
   // }
})

document.addEventListener('DOMContentLoaded', initMouseOver)

function initMouseOver() {
      let a = document.querySelectorAll('.nav-link')
      
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
            

function rotate() {
      let active = document.querySelector('ul')
      
      if (!active.classList.contains("active")) {

         return button.style.transform = 'rotate(45deg)'
      } 
      return button.style.transform = 'rotate(-360deg)'
   
}

function dropDown(e) {
   
   let active = document.querySelector('ul')
   
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
      let a = document.querySelectorAll('.nav-link')
      
      let active = document.querySelector('ul')
      
      if (window.matchMedia("(min-width:700px)").matches){
            a.forEach(el => {
                  let inner = el.innerText

                  const navLinks = {
                     'Skills' : 580,
                     'Contact' : 2800,
                     'Projects' : 850,
                     'Games' : 1350,
                     'Home' : 0
                  } 

                  el.addEventListener('click', () => {

                     window.scrollTo(0, navLinks[inner])
                  })                         
            })
      } 
       
      if (window.matchMedia("(max-width:700px)").matches){
      
         a.forEach(el => {
               //inner will get you the key of the object
               let inner = el.innerText;

               const navLinks = {
                  'Skills' : 1400,
                  'Contact' : 4000,
                  'Projects' : 2300,
                  'Games' : 2800,
                  'Home' : 0
               }

               el.addEventListener('touchend', () => {
               document.body.classList.remove('lock-scroll')
               active.classList.add("active");
               // console.log(navLinks[inner], 'test');
               window.scrollTo(0, navLinks[inner])

               rotate();
               })
         })
      }
   } 

document.addEventListener('DOMContentLoaded', scrollDown)





