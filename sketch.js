const sideFlwr = document.querySelector('#sideFlowr path');
console.log(sideFlwr.getTotalLength())

$(window).on('load', () => {
  var timeline = gsap.timeline({defaults: {
    scrollTrigger: {
      trigger: '.text',
      scrub: 2,
    }
  }})
    .to($('.text'),{yPercent: '-80', duration: 100, ease: 'power4.easeOut'})
    .to(sideFlwr, {strokeDashoffset: 0, duration: 50, ease: 'power4.easeOut'},"<")

    // .to(sideFlwr, { scrollTrigger: {
    //   trigger: sideFlwr,
    //   markers: true,
    //   pin: true,
    //   start: "top top",
    // }, strokeDashoffset: 0, duration: 10, ease: 'circ.easeIn' })

    // .fromTo(sideFlwr,{ fill: 'transparent' }, { duration: 2, fill: "#d2e3ed", ease:"power1"})

    // .to($('.text'), {
    //   scrollTrigger: {
    //     scrub: 2,
    //   },yPercent: '-60', duration: 20, ease: 'circ.easeOut', autoPlay: 'true'}, "<")
})
