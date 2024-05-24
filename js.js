let mode=document.querySelector(".dark_white");
let current = "light";
mode.addEventListener("click",()=>
{
    if(current === "light"){
        current ="dark";
    document.querySelector("body").style.backgroundColor="black"
    document.querySelector("body").style.color="white"
    }else{
        current="light";
        document.querySelector("body").style.backgroundColor="#edf2f7"
        document.querySelector("body").style.color="black"
    }
})

// let a = document.querySelector("a").style.color="#db143c"

document.addEventListener('mousemove', function(event) {
    const outerCursor = document.getElementById('outerCursor');

    // Move the outer cursor to the mouse position
    outerCursor.style.transform = `translate(${event.clientX - outerCursor.offsetWidth / 2}px, ${event.clientY - outerCursor.offsetHeight / 2}px)`;
});

