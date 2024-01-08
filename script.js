const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,         
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:0.2
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
circleMouseFollower()
firstPageAnim()