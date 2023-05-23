TweenMax.to('.div1',2,{top:0 ,left:0})
TweenMax.to('.div5',2,{top:0 ,right:0})
TweenMax.to('.div16',2,{bottom:0 ,left:0})
TweenMax.to('.div20',2,{bottom:0 ,right:0})
TweenMax.to(['.div2','.div3','.div4'],2,{top:0,delay:1})
TweenMax.to(['.div6','.div11'],2,{left:0,delay:1})
TweenMax.to(['.div10','.div15'],2,{right:0,delay:1})
TweenMax.to(['.div17','.div18','.div19'],2,{bottom:0,delay:1})
TweenMax.to(['.div7','.div8','.div9','.div12','.div13','.div14'],2,{opacity:1,delay:2})


TweenMax.from("nav",2,{
    delay:4,
    opacity:0,
    y:-10,
    ease:Expo.easeInOut,
})

TweenMax.from(".main",2,{
    delay:4.5,
    scale:0,
    y:-50,
    ease:Expo.easeInOut,
})