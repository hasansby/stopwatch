let[second,minutes,hours]=[0,0,0]
let time = document.querySelector("#main")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let timer = null

function stopwatch(){
    second++
    if(second==60){
        second=0
        minutes++
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    let h = hours<10 ? "0"+hours: hours
    let m= minutes<10 ? "0"+minutes: minutes
    let s = second<10 ? "0"+second: second
    time.innerHTML = h + ":" +m+ ":" +s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}
function watchStop(){
    clearInterval(timer)

}
function watchReset(){
    [second,minutes,hours]=[0,0,0]
    time.innerHTML = "00:00:00";
}

start.addEventListener("click",()=>{
    watchStart()
})
stop.addEventListener("click",()=>{
    watchStop()
})
reset.addEventListener("click",()=>{
    watchReset()
})