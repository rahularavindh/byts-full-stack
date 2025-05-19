let time = parseInt(document.getElementById("ss").innerText);
let x;
let flag=0;
function start(){
    if(flag==0){
        flag=1;
        x = setInterval(()=>{
            time++;
            let seconds = time % 60;
            let minutes = Math.floor(time / 60)%60;
            let hours = Math.floor(time / 3600);
            document.getElementById("ss").innerText = seconds < 10 ? '0'+seconds : seconds;
            document.getElementById("mm").innerText = minutes < 10 ? '0'+minutes : minutes; 
            document.getElementById("hh").innerText = hours < 10 ? '0'+hours : hours;
        },1000);
    }
}
function stop(){
    clearInterval(x);
    flag=0;
}
function reset(){
    time=0;
    flag=0;
    clearInterval(x);
    document.getElementById('ss').innerText='00';
    document.getElementById('mm').innerText='00';
    document.getElementById('hh').innerText='00';
}