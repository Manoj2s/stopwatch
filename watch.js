let startbtn = document.getElementById('start');
let resetbtn = document.getElementById('reset');
let display = document.getElementById('display');


let watchInterval;
let sec = 0;
let mins = 0;
let hrs = 0;
startbtn.addEventListener("click", () =>{
    const first_element=startbtn.firstElementChild
    const class_name=first_element.getAttribute("class")
    if(class_name==="fa-solid fa-play"){
        watchInterval =setInterval(() => {
            sec++;
            if (sec > 59){
                mins++
                sec=0
            }
            display.innerText = `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}:${sec < 10 ? "0" + sec : sec}`
            }, 1000)
        first_element.remove()
        startbtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }

    else{
        clearInterval(watchInterval);
        first_element.remove()
        startbtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    }

})

resetbtn.addEventListener('click',()=>{
    clearInterval(watchInterval);
    // display="00:00:00";
    sec=0;
    mins=0;
    hrs=0;
    display.innerText = `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}:${sec < 10 ? "0" + sec : sec}`

});









