const days = document.getElementById("days");
const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");
var resetbtn=document.getElementById("reset");
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
var CurrentYear = new Date().getFullYear();
var today= new Date().getDate()
var hours_now = new Date().getHours()
var mins_now = new Date().getMinutes()
var secs_now = new Date().getSeconds()
var month=new Date().getMonth()
var month_now = months[month]
var newYearday = new Date(`${month_now} ${today} ${CurrentYear+1} ${hours_now}:${mins_now}:${secs_now}`);
console.log(newYearday);
const currentTime = new Date();
console.log(`current time is: ${currentTime}`);
const diff = newYearday - currentTime;

const d = Math.floor(diff/1000/60/60/24);
const h = Math.floor(diff/1000/60/60)%24;
const min = Math.floor(diff/1000/60)%60;
const secs=Math.floor(diff/1000)%60;
days.innerHTML = d<10 ? '0' +d :d;
hours.innerHTML=h<10 ? '0' +h :h;
minutes.innerHTML=min<10 ? '0' + min :min;
seconds.innerHTML = secs <10 ? '0' +secs :secs;
console.log(seconds.innerHTML);
function updateTimer(){
    if (seconds.innerHTML>0){
        seconds.innerHTML--;
        seconds.innerHTML = seconds.innerHTML <10 ? '0' +seconds.innerHTML:seconds.innerHTML;
    }
    else if(seconds.innerHTML <=0){
        
        if(minutes.innerHTML>0){
            seconds.innerHTML=59;
            minutes.innerHTML--;
            minutes.innerHTML = minutes.innerHTML <10 ? '0' +minutes.innerHTML:minutes.innerHTML;
        }
        else if (minutes.innerHTML<=0){
            
            if (hours.innerHTML>0){
                minutes.innerHTML=59;
                hours.innerHTML--;
                hours.innerHTML = hours.innerHTML <10 ? '0' +hours.innerHTML:hours.innerHTML;
            }
            else if (hours.innerHTML<=0){
                
                if (days.innerHTML>0){
                    hours.innerHTML=23;
                    days.innerHTML--;
                    days.innerHTML = days.innerHTML <10 ? '0' +days.innerHTML:days.innerHTML;
                }
                else if(days.innerHTML<=0){
                    console.log("done");
                }
            }
        }
    }
}

function startCounting(){
    countdownInterval = setInterval(updateTimer,1000);
}

function stop(){
    clearInterval(countdownInterval);
}


    



resetbtn.addEventListener('click',function(){
    var CurrentYear = new Date().getFullYear();
    days.innerHTML=CurrentYear%4==0 ? '365' :'364';
    hours.innerHTML='23';
    minutes.innerHTML='59';
    seconds.innerHTML='59';
    stop();
})

