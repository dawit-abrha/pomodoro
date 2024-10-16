const start = document.getElementById('start');
const stop  = document.getElementById('stop');
const reset = document.getElementById('reset');

const wm = document.getElementById('w_minutes');
const ws = document.getElementById('w_seconds');

const bm = document.getElementById('b_minutes');
const bs = document.getElementById('b-seconds');

const counter  = document.getElementById('counter');



var starTimer;

start.addEventListener('click',()  => {
    if(starTimer ===  undefined){
        starTimer = setInterval(timer, 1000)
    }
    else{
        alert("Timer is already running")
    }
})
reset.addEventListener('click',()  =>{
       wm.innerText = 25;
        ws.innerText ='00'
        bm.innerText =5;
        bs.innerText ='00';
        counter.innerText = 0;
        starTimer = undefined;
});
stop.addEventListener('click',()  =>{
    resetTimer()
    starTimer = undefined;
});


function timer(){
    if(ws.innerText != 0){
        ws.innerText--;
    }else if(wm.innerText != 0 &&  ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }
    if(wm.innerText ==0 &&  ws.innerText == 0){
        if(bs.innerText !=0){
            bs.innerText--;
        }else if(bm.innerText  != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }
    if(wm.innerText == 0  && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText ='00'
        bm.innerText = 5;
        bs.innerText = '00';
        counter.innerText++;
    }
   
}
function resetTimer(){
    clearInterval(starTimer);
}






