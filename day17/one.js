startBtn = document.querySelector('#start');
stopBtn = document.querySelector('#stop');
let printMe;
startBtn.addEventListener('click' , function(e) {
    printMe = setInterval(() =>{
        console.log("Hatim");
    } , 1000)
} , false)
stopBtn.addEventListener('click' , function(e) {
 clearInterval(printMe);
} , false)