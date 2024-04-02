let birdTL = gsap.timeline({paused:true})  
  .from('.body', {duration:1.7, drawSVG:'0 0', ease:'sine.in'}, 0)
  .from('.inner', {drawSVG:'0 0', ease:'power1.inOut', stagger:0.3}, 0.4)
  .from('.tail', {duration:0.8, drawSVG:'100% 100%', stagger:0.9}, 0.8)
  .from('.legs', {duration:1.2, drawSVG:'0 0', ease:'power2'}, 1.5)

  .from('.bird', {duration:2.3, y:-150, ease:'back'}, 0)
  .from('.bird', {duration:2.3, rotation:-4}, 0)
  .from('.wingGroup', {svgOrigin:'172px 177px', duration:2.5, rotation:30, ease:'back.out(3)'}, 0.25)

  .from('.wing', {duration:1, drawSVG:'0 0', ease:'power2.inOut'}, 0.58)
  .from('.featherEdge', {duration:0.8, drawSVG:'0 0', ease:'power3.inOut'}, 0.93)
  .from('.feather', {drawSVG:'0 0', ease:'power3.inOut', stagger:0.06}, 1.1)
  
gsap.timeline({ scrollTrigger:{ scrub:1 } })
  .to(birdTL, {progress:1, ease:'none'}, 0)
  .to('.bg', {duration:1, y:'-100vh', ease:'power2.in'}, 0.3)
  .to('.downArrow circle', {attr:{r:0}, duration:0.05}, 0)
  .to('.downArrow path', {opacity:0, duration:0.04, ease:'sine.inOut'}, 0)
  .from('h1', {opacity:0, duration:0.2, ease:'sine.inOut'}, 0.4)
  .to(new SplitText('h1').words, {color:'#cacbaf', duration:0.1, stagger:0.07}, 0.65)

let downArrow = document.querySelector('.downArrow');
downArrow.onclick =()=> gsap.to(window, {duration:4, scrollTo:innerHeight*2, ease:'sine.in'})
downArrow.onmouseover =()=> gsap.to(downArrow, {ease:'expo', attr:{stroke:'#002e2e'}})
downArrow.onmouseout =()=> gsap.to(downArrow, {ease:'power1.inOut', attr:{stroke:'#cacbaf'}})

gsap.set('html, body', {opacity:1});