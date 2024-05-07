const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duraton: 0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    duraton: 1
})
tl.to("#page1",{
    y:"0vh",
    rotate:-720,
    scale:1,
    duration:0.8
})