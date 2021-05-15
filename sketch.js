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
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.text',
      start: '-5% top',
      scrub: 2,
      ease: 'sine.easeIn',
    }, ease:Linear.easeNone
  })
    .to($('.text'),{yPercent: '-80', duration: 9, ease: 'power4.easeOut'})
    .to(sideFlwr, {strokeDashoffset: 0, duration: 80, ease: 'power4.easeOut'},"<")
    .fromTo(sideFlwr,{ fill: 'transparent' }, { duration: 2, fill: "#d2e3ed", ease:"power4.easeOut"},"<5")

  var clickr = 0
    soundwavr = gsap.timeline({defaults: {yoyo: true, stagger: {each: 0.1, repeat: -1}}, paused:true})
      .to($('#sound-waves path'),{yPercent: '25', ease:Linear.easeNone, duration: .6, scaleY: .5, fill: '#66695c', reversed: 'true'})

  document.querySelector('#wave').addEventListener('click', function() {
    var audio = document.getElementById('sound')

    if (clickr == true) {
      soundwavr.pause();
      gsap.timeline()
       .to(audio,{ volume: 0})
      audio.pause()
      clickr = 0
      console.log(clickr + ' paused')
    } else {
      soundwavr.play()
      gsap.to(audio,{ volume: 0.2})
      audio.play()
      clickr = 1
      console.log(clickr + ' playing')
    }
  })


})
