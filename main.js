setInterval(() => {
    let eventDate = new Date("Dec 31, 2024 23:59:59").getTime();
    let currentTime = new Date().getTime();
    
    let difDate = eventDate - currentTime;

    let days = Math.trunc(difDate / (1000 * 60 * 60 * 24));
    document.querySelector(".events .info-box .info .unit .days").innerHTML = days;
    
    let hours = Math.trunc(difDate % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    document.querySelector(".events .info-box .info .unit .hours").innerHTML = hours;
    
    let minutes = Math.trunc(difDate % (1000 * 60 * 60 *24) % (1000 * 60 * 60) / (1000 * 60));
    document.querySelector(".events .info-box .info .unit .minutes").innerHTML = minutes;
    
    let seconds = Math.trunc(difDate % (1000 * 60 * 60 *24) % (1000 * 60 * 60) % (1000 * 60) / (1000));
    document.querySelector(".events .info-box .info .unit .seconds").innerHTML = seconds;
    

}, 1000);

// skill & progress 
let progressSection = document.querySelector("#skills")
function progress(){
    
    let spanProgres = document.querySelectorAll(".skills .content .progress span");

    spanProgres.forEach((span)=>{
        let width = span.dataset.width;
        span.style.width = `${width}%`
    });

}

// counter 
let counterSection = document.querySelector("#stats");
let nums = document.querySelectorAll("#stats .content .box span");

let counter = false;

function startCount(ele){
    let goal = ele.dataset.goal;
    console.log(goal)
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal){
            clearInterval(count)
        }
    }, 2000/goal);
}



window.onscroll = function() {
    // if section == counter section
    if (window.scrollY >= counterSection.offsetTop) {
        if (!counter){
            nums.forEach((num) => {startCount(num)})
        }
        counter = true;
    }    

    // if section == progress section
    if (window.scrollY >= progressSection.offsetTop){
        progress();
    }
}