const sideFlwr = document.querySelector('#sideFlowr path');
console.log(sideFlwr.getTotalLength());

var loading = gsap.timeline({})
  .fromTo(loadFlwr,{strokeDashoffset: 26100, fill: 'transparent'},{ strokeDashoffset: 23100, repeat: -1, yoyo: true, duration: 5 })
  .to($('.preload p'),{autoAlpha: .5, yoyo: true, duration: .7, repeat: -1},"<")
  .to($('.preload'),{autoAlpha: 0, duration: 1.5, ease:"circ.easeOut", delay: 10},"<");

// loading.pause()
// function slideIn() {
//   gsap.from($('svg, .text'),{xPercent: '-10', ease: 'SlowMo.easeOut', duration: 2})
// };

$(window).on('load', () => {
  this.scrollTo(0, 0)

  const audio = new Howl({
    src: ['./static/audio/Butterfly.mp3'],
    loop: true,
    volume: 0.4,
    autoplay: true,
  });
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.text',
      start: '-5% top',
      scrub: 1.5,
      ease: 'sine.easeIn',
    }, ease:Linear.easeNone
  })
    .to($('.text'),{yPercent: '-80', duration: 9, ease: 'power4.easeOut'})
    .to(sideFlwr, {strokeDashoffset: 0, duration: 80, ease: 'power4.easeOut'},"<")
    .fromTo(sideFlwr,{ fill: 'transparent' }, { duration: 2, fill: "#d2e3ed", ease:"power4.easeOut"},"<5")

  var soundwavr = gsap.timeline({defaults: {yoyo: true, stagger: {each: 0.1, repeat: -1}}, paused:true})
    .to($('#sound-waves path'),{yPercent: '25', ease:Linear.easeNone, duration: .6, scaleY: .4, fill: '#66695c', reversed: 'true'})
  var clickr = 1;
  soundwavr.play();
  document.querySelector('#wave').addEventListener('click', function() {
    if (clickr == true) {
      soundwavr.pause();
      audio.pause()
      clickr = 0
    } else {
      soundwavr.play()
      audio.play()
      clickr = 1;
    }
  });

})
