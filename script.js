let t1 = gsap.timeline();

t1.from(".header", {
  x: -20,
  duration: 1,
  opacity: 0,
  delay: 0.1
});
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".button-arounder");

    // GSAP animation
    buttons.forEach((button)=>{
        t1.from(button,{
            y:"20%",
            duration:1,
            opacity:0,
            delay:0.1,
        })
    })
});


t1.from(".page-1-b img",{
    x:"500%",
    duration: 3,
    scrollTrigger: {
    trigger: ".page-1-b",
    start: "top 50px", // when the top of the box hits the center of the viewport
    end: "top ", // when the top of the box hits 100px from the top of the viewport
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers: true // enables markers to visualize start/end positions
  }
})
t1.from(".type--A",{
    x:"-300%",
    duration:1,
    scrollTrigger:{
        trigger:".type--A",
        start:"top 60%",
        end:"top",
        scrub:true,
        markers:true
    }
})
t1.to(".page-2 h1",{
    x:"-75%",
    duration:10,
    delay:3,
    scrollTrigger:{
        trigger:".page-2 h1",
        start:"top 10%",
        end:"top",
        scrub:true,
        // markers:true
    }
})

