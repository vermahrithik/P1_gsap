var c = gsap.timeline();
c
  .to("#ll",{
  y: 1080,
  duration: 3,
  ease: Expo.easeInOut,
})
.to("#lr",{
  y: -1080,
  Delay:3,
  duration: 3,
  ease: Expo.easeInOut,
},0)
.to("#wall",{
  y:-1080,
  duration:2,
  ease: Expo.easeInOut,
},+2)
.from("#name,#menu,#options",{
    y:10,
    duration:1,
    stagger:0.25,
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
    duration:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.4
})
.from("#bpr",{
    x:-50,
    duration:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.2
})
.from("#bpl",{
    x:-50,
    duration:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.2
})
.from("#click,#model",{
    x:-300,
    duration:0.5,
    stagger:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.25
})
.from("#se,.options",{
    y:300,
    duration:0.25,
    stagger:0.25,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.25,
})
.from("#dp,.loine,.word",{
    x:-100,
    duration:1,
    stagger:0.5,
    ease:Expo.easeInOut,
    opacity:0,
    delay:-0.5,
})
