countDown = setInterval(() => {
    const seconds = document.getElementById('timer');
    seconds.textContent --;
    if (seconds.textContent == 0) {  
        alert('Вы победили в конкурсе!');
        clearInterval(id);
    }   
}, 1000)

let id = countDown;