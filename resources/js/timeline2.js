export function showTime(e) {
    e.setAttribute("done", "true")
    e.querySelector('.timeline-point').style.backgroud = 'black';
    e.querySelector('.date').style.opacity = '100%';
    e.querySelector('.li-timeline-p-text').style.opacity = '100%';
    e.querySelector('.li-timeline-p-text').style.transform = 'translateY(0px)';
}

export function hideTime(e) {
    e.removeAttribute("done", 'true')
    e.querySelector('.timeline-point').style.backgroud = 'rgb(228, 228, 228)';
    e.querySelector('.date').style.opacity = '0%';
    e.querySelector('.li-timeline-p-text').style.opacity = '0%';
    e.querySelector('.li-timeline-p-text').style.transform = 'translateY(-10px)';
}

