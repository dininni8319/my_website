let message = document.querySelector("#message-sent")

if (message) {
    
    function messageSuccess(str) {

            let h4 = document.createElement('h4')
            h4.style.color = 'white'
            h4.style.backgroundColor = '#2FB986'
            h4.textContent = 'Thank you we will contact you as soon as possible'
            
            return message.appendChild(h4)       
    }

    document.addEventListener('DOMContentLoaded', messageSuccess)
        
    setTimeout(() => { 
        let message = document.querySelector("#message-sent")
        message.style.display = 'none'
    }, 3000)
}
    
    // function messageError(str) {
        
        //    let message = document.getElementById('message-error')
        //    console.log(about, 'test the error function');
        //    let h3 = document.createElement('h3')
//    h3.style.color = 'black'
//    h3.style.backgroundColor = 'red'
//    h3.textContent = 'Something went wrong'

//    return about.appendChild(h3)
// }
// console.log(messageError());