const sideFlwr = document.querySelector('#sideFlowr path');
console.log(sideFlwr.getTotalLength())

$(window).on('load', () => {
  var timeline = gsap.timeline()
    .to(sideFlwr, {
      strokeDashoffset: 0, duration: 4000, ease: 'circ.easeIn'
    })
    .fromTo(sideFlwr,{fill: 'none'}, {fill: "#355070"})
})
