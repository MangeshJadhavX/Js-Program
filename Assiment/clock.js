// const clock = new Date()
// console.log(clock.toLocaleString());
// console.log(clock.toTimeString());

 
function clockTime(){
    let clock = new Date()
    console.log(clock.toLocaleTimeString());
}


setInterval(clockTime,1000);