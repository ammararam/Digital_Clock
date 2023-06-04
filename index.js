const hourE1= document.getElementById("Hours");
const minutes= document.getElementById("Minutes");
const seconds= document.getElementById("Seconds");
const ampm1= document.getElementById("AM");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h> 12){
        h=h-12;
        ampm="PM";
    }

    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;

    hourE1.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm=(innerText=ampm);
    setTimeout(()=>{
    updateClock()
    }, 1000);

}

updateClock()