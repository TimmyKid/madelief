const sideFlwr = document.querySelector('#sideFlowr path');
console.log(sideFlwr.getTotalLength());


//Mouse-client position
cursor = document.querySelector('.cuSor')
document.addEventListener("mousemove", e => {
  xPos = e.clientX;
  yPos = e.clientY;
  $img = $('.shadow')
  //cursorAction
  cursor.setAttribute( "style", "left: "+(xPos- 17.5)+"px; top:"+(yPos- 17.5)+"px;");

  //Shadow effect
  mauseX = (xPos/$(window).width()-0.5);
  mauseY = (yPos/$(window).width()-0.5);
  gsap.to($('#shadow'),{rotationY: mauseX * 1.2, rotationX: mauseY* 0.4, skewX: mauseX* 0.1, skewY: mauseY * -2.2 , ease: 'power1.easeOut', transformPerspective: 450, transformOrigin: 'center'})
});

// loading.pause()
function slideIn() {
  gsap.from($('svg, .text'),{xPercent: '-10', ease: 'SlowMo.easeOut', duration: 2})
};

$(window).on('load', () => {
  this.scrollTo(0, 0)

  const audio = new Howl({
    src: ['./static/audio/Butterfly.mp3'],
    loop: true,
    volume: 0.4,
    autoplay: true,
  });

  var loading = gsap.timeline({ paused: false})
    .fromTo(loadFlwr,{strokeDashoffset: 26100, fill: 'transparent'},{ strokeDashoffset: 23100, repeat: -1, yoyo: true, duration: 5 })
    .to($('.preload p'),{autoAlpha: .5, yoyo: true, duration: .7, repeat: -1},"<")
    .to($('.preload'),{autoAlpha: 0, duration: 1.5, ease:"circ.easeOut", delay: 10},"<");

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
  let cicket = ["🥚","🐓"]
  console.log(cicket)
  console.log(cicket.sort())
})
