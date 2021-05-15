const sideFlwr = document.querySelector('#sideFlowr path');
// const loadFlwr = document.querySelector('#loadFlwr path');
console.log(sideFlwr.getTotalLength())

// var loading = gsap.timeline()
//   .fromTo(loadFlwr,{strokeDashoffset: 26100, fill: 'transparent'},{ strokeDashoffset: 23100, repeat: -1, yoyo: true, duration: 5 })
//   .to($('.preload p'),{autoAlpha: .5, yoyo: true, duration: .7, repeat: -1},"<")
//   .to($('.preload'),{autoAlpha: 0, duration: 1.5, ease:"circ.easeOut", delay: 10},"<");

function slideIn() {
  gsap.from($('svg, .text'),{xPercent: '-10', ease: 'SlowMo.easeOut', duration: 3})
}
// loading.pause()
slideIn()

$(window).on('load', () => {
  var audio = document.getElementById('sound')
  // gsap.set(audio,{muted: false})
    audio.play()
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.text',
      start: '-5% top',
      // markers: true,
      scrub: 5
    }
  })
    .to($('.text'),{yPercent: '-80', duration: 9, ease: 'power4.easeOut'})
    .to(sideFlwr, {strokeDashoffset: 0, duration: 80, ease: 'power4.easeOut'},"<")
    .fromTo(sideFlwr,{ fill: 'transparent' }, { duration: 2, fill: "#d2e3ed", ease:"power4.easeOut"},"<5")

  var soundwavr = gsap.timeline({defaults: {stagger: {each: 0.6, repeat: -1}}})
    .to($('#sound-waves path'),{yPercent: '0', ease: 'sine.easeInOut', duration: 1,yoyo: true, autoAlpha: 0.6, fill: 'grey'})

})
