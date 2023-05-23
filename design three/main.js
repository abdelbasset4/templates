  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    startDelay:4000
  });

TweenMax.to(['.color-body-1','.color-body-2','.color-body-3'],1,{width:"100%"})

TweenMax.from(".logo",2,{
  delay:1.2,
  opacity:0,
  x:-50,
  ease:Expo.easeInOut
})

TweenMax.from("nav ul",2,{
  delay:2,
  opacity:0,
  y:20,
  ease:Expo.easeInOut
})

TweenMax.from("nav div .search",2,{
  delay:2,
  opacity:0,
  y:-20,
  ease:Expo.easeInOut
})

TweenMax.from("nav div .icons",2,{
  delay:2,
  opacity:0,
  y:20,
  ease:Expo.easeInOut
})


TweenMax.from(".content p",2,{
  delay:3,
  opacity:0,
  y:50,
  ease:Expo.easeInOut
})

TweenMax.from(".btn",2,{
  delay:3.5,
  opacity:0,
  y:-50,
  ease:Expo.easeInOut
})

TweenMax.from("main .container img",2,{
  delay:4.2,
  scale:0,
  y:-50,
  ease:Expo.easeInOut,
})

