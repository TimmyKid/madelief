const sideFlwr = document.querySelector('#sideFlowr path');
console.log(sideFlwr.getTotalLength())

$(window).on('load', () => {
  var timeline = gsap.timeline({scrollTrigger : {
    scrub: 2,
    markers: true,
    trigger: sideFlwr,
    start: 'top top',
    end: 'bottom top'
    // scroller: ".text",
  }})
    .to(sideFlwr, {
      strokeDashoffset: 0, duration: 40000, ease: 'circ.easeIn'
    })
    .fromTo(sideFlwr,{fill: 'transparent'}, { duration: 2, fill: "#355070", ease: "power1"})
    gsap.to($('.text'), {
      scrollTrigger: {
        scrub: 2,
        autoPlay: true
      },yPercent: '-50', duration: 20, ease: 'circ.easeOut'}, "<")
})
