import { showTime, hideTime } from './timeline2.js'

const line = document.querySelector(".timeline-innerline")
const timeline_events = document.querySelectorAll(".li-timeline")

let observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            timeline_events.forEach(e => {
                showTime(e);
            })
            line.style.width = `100%`;
        }
    });
}, {});

let target = document.querySelector('.timeline ul')

observer.observe(target);

timeline_events.forEach((li, index) => {

    li.addEventListener('click', () => {

        if (li.getAttribute("done")) {
           line.style.width = `${(index / timeline_events.length) * 100}%`; 
           
           timeline_events.forEach((ev, idx) => {
               if (idx >= index) {
                   hideTime(ev)
               }
           });
        } else {
            
            line.style.width = `${((index + 1) / timeline_events.length) * 100 }%` 

            timeline_events.forEach((ev, idx) => {
                
                if (idx <= index) {
                    showTime(ev)
                } 
            }
        )};
    });
});
