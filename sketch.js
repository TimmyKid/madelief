const sideFlwr = document.querySelector('#sideFlowr path');
console.log(sideFlwr.getTotalLength())

$(window).on('load', () => {
  var timeline = gsap.timeline()
    .to($('.text'), { yPercent: '-40', duration: 10, ease: 'circ.easeOut'}, "<")
    .to(sideFlwr, { strokeDashoffset: 34855, duration: 7})
    .fromTo(sideFlwr,{fill: 'transparent'}, { duration: 2, fill: " #e56b6f", ease: "power1"})

})
