var c = gsap.timeline();
c
  .to("#ll",{
  y: 1080,
  duration: 4,
  ease: Expo.easeInOut,
})
.to("#lr",{
  y: -1080,
  Delay:4,
  duration: 4,
  ease: Expo.easeInOut,
},0)
.to("#wall",{
  y:-1080,
  duration:4,
  ease: Expo.easeInOut,
},+2)
.from("#name,#menu,#options",{
    y:10,
    duration:1,
    stagger:1,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-1
},)
.from("#o",{
    x:-10,
    duration:1,
    stagger:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-1
})
.from("#tpr",{
    x:-50,
    duration:1,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.5
})
.from("#bpr",{
    x:-50,
    duration:1,
    // stagger:1,
    ease:Expo.easeInOut,
    opacity:0,
    delay:0
})
.from("#bpl",{
    x:-50,
    duration:1,
    // stagger:1,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.5
})
.from("#click,#model",{
    x:-300,
    duration:1,
    stagger:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.5,
})
.from("#se,.options",{
    y:300,
    duration:1,
    stagger:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.5,
})
.from("#dp,.loine,.word",{
    x:-100,
    duration:1,
    stagger:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.5,
})