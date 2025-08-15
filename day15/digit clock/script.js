const analog = document.querySelector('.analog');
setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    analog.innerHTML = currentTime;
}, 1000);