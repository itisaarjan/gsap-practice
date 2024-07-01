let t1 = gsap.timeline();

t1.from(".header", {
  x: -20,
  duration: 1,
  opacity: 0,
  delay: 0.1
});

t1.from(".page-1-b img",{
    x:500,
    duration: 3,
    scrollTrigger: {
    trigger: ".page-1-b",
    start: "top 50px", // when the top of the box hits the center of the viewport
    end: "top ", // when the top of the box hits 100px from the top of the viewport
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true // enables markers to visualize start/end positions
  }


})

