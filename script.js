const endDate = "10 March 2024  12:00:00 AM"

document.getElementById("end-date").innerHTML =endDate;
const inputs = document.querySelectorAll("input")

function clock()
{
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end -now)/1000;

    // if(diff<0)return;
    // convert into days;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff) % 60;
//console.log(clock);
}
// init call
clock()


/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () =>{
        clock()
    },
    1000
)

const startDate = "10 March 2000"
document.getElementById("start-date").innerHTML =startDate;
 const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")


function time()
{
    const start = new Date(startDate)
    const now = new Date()
    const diff = (now-start);
    const days = 1000*60*60*24;

     if(diff<0)return;
    // convert into days;
    input1.value = Math.floor(diff/days);
    input2.value = Math.floor(input1.value/30);
    input3.value = Math.floor(input2.value/12);
   
    console.log(" Days:  "+input1.value);
console.log(" Months: "+input2.value);
console.log(" Years: "+input3.value);
}
time()
