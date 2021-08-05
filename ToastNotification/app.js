const btn = document.getElementById('btn');
const container = document.getElementById('container');



btn.addEventListener('click',createNotification);
function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add("toast");

    container.appendChild(notif);
    notif.innerText ="Today is the best day ever!"
    
    setTimeout(() => {
        notif.remove();
    
    },3000)


}

