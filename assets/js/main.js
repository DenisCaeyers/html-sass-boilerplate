//back to top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// FishBowl
var viewer       = document.querySelector('.viewer'),
    frame_count  = 9,
    offset_value = 100;

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky',
  duration: (frame_count * offset_value) + 'px',
  reverse: true
})
.setPin('#sticky')
//.addIndicators()
.addTo(controller);

// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky',
      offset: i * offset_value
    })
    .setClassToggle(viewer, 'frame' + i)
    //.addIndicators()
    .addTo(controller);
}



/////////////
// Counter //
/////////////
$(window).scroll(function() {
    if ($(window).scrollTop()>17000 && $(window).scrollTop()<21000) {
        $({countNum: $('#counter1').text()}).animate({countNum: 10}, {
            duration: 1700,
            easing:'linear',
            step: function() {
              $('#counter1').text(Math.floor(this.countNum));
            },
            complete: function() {
              $('#counter1').text("10");
            }
        });
        $({countNum: $('#counter2').text()}).animate({countNum: 50}, {
            duration: 2700,
            easing:'linear',
            step: function() {
              $('#counter2').text(Math.floor(this.countNum));
            },
            complete: function() {
              $('#counter2').text("50");
            }
        });
        $({countNum: $('#counter3').text()}).animate({countNum: 22}, {
            duration: 2700,
            easing:'linear',
            step: function() {
              $('#counter3').text(Math.floor(this.countNum));
            },
            complete: function() {
              $('#counter3').text("22");
            }
        });
        $({countNum: $('#counter4').text()}).animate({countNum: 25}, {
            duration: 2700,
            easing:'linear',
            step: function() {
              $('#counter4').text(Math.floor(this.countNum));
            },
            complete: function() {
              $('#counter4').text("25");
            }
        });
    }
 });
 $(window).scroll(function() {
    if ($(window).scrollTop()>20000 && $(window).scrollTop()<21000) {

        $({countNum: $('#counter5').text()}).animate({countNum: 300000}, {
            duration: 2700,
            easing:'linear',
            step: function() {
              $('#counter5').text(Math.floor(this.countNum));
            },
            complete: function() {
              $('#counter5').text("300000");
            }
        });

    }
 });

////////////
// Scroll //
////////////
$(document).ready(function() {
    $('.p5img').scrollToFixed({ marginTop: 250, limit: $($('div')[21]).offset().top });
    $('.p6img').scrollToFixed({ marginTop: 250, limit: $($('div')[21]).offset().top });
    $('.p7img').scrollToFixed({ marginTop: 250, limit: $($('div')[21]).offset().top });
    $('.p5info').scrollToFixed({ marginTop: 100, limit: $($('p')[10]).offset().top });
    $('.p6info').scrollToFixed({ marginTop: 100, limit: $($('p')[10]).offset().top });
    $('.p7info').scrollToFixed({ marginTop: 100, limit: $($('p')[10]).offset().top });

    $('#p9img1').scrollToFixed({ marginTop: 190, limit: $($('div')[55]).offset().top });
    $('#p11img1').scrollToFixed({ marginTop: 190, limit: $($('div')[55]).offset().top });
    $('#p12img1').scrollToFixed({ marginTop: 190, limit: $($('div')[55]).offset().top });
    $('#p12img3').scrollToFixed({ marginTop: 190, limit: $($('div')[55]).offset().top });

    $('#p16img1').scrollToFixed({ marginTop: 190, limit: $($('div')[83]).offset().top });
    $('#p16wrapper').scrollToFixed({ marginTop: 0, limit: $($('div')[65]).offset().top });

    $('#p20img1').scrollToFixed({ marginTop: 190, limit: $($('div')[77]).offset().top });
});

/////////////////////
// P5 FadeIn / Out //
/////////////////////
// p5info
$(window).scroll(function() {
    if ($(window).scrollTop()>3800 && $(window).scrollTop()<4800) {
        $('#p5info').fadeIn();
    }
    else {
        $('#p5info').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5info').stop(true).fadeOut();
    }
 });

 // p5imgMap
 $(window).scroll(function() {
    if ($(window).scrollTop()>2700 && $(window).scrollTop()<5000) {
        $('#p5imgMap').fadeIn(1);
    }
    else {
        $('#p5imgMap').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgMap').stop(true).fadeOut();
    }
 });

 // p5imgNode
 $(window).scroll(function() {
     //NODE1
    if ($(window).scrollTop()>4100 && $(window).scrollTop()<4600) {
        $('#p5imgNode1').fadeIn();
    }
    else {
        $('#p5imgNode1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode1').stop(true).fadeOut();
    }
    //NODE2
    if ($(window).scrollTop()>4150 && $(window).scrollTop()<4600) {
        $('#p5imgNode2').fadeIn();
    }
    else {
        $('#p5imgNode2').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode2').stop(true).fadeOut();
    }
    //NODE3
    if ($(window).scrollTop()>4200 && $(window).scrollTop()<4600) {
        $('#p5imgNode3').fadeIn();
    }
    else {
        $('#p5imgNode3').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode3').stop(true).fadeOut();
    }
    //NODE4
    if ($(window).scrollTop()>4250 && $(window).scrollTop()<4600) {
        $('#p5imgNode4').fadeIn();
    }
    else {
        $('#p5imgNode4').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode4').stop(true).fadeOut();
    }
    //NODE5
    if ($(window).scrollTop()>4300 && $(window).scrollTop()<4600) {
        $('#p5imgNode5').fadeIn();
    }
    else {
        $('#p5imgNode5').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode5').stop(true).fadeOut();
    }
    //NODE6
    if ($(window).scrollTop()>4350 && $(window).scrollTop()<4600) {
        $('#p5imgNode6').fadeIn();
    }
    else {
        $('#p5imgNode6').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode6').stop(true).fadeOut();
    }
    //NODE7
    if ($(window).scrollTop()>4400 && $(window).scrollTop()<4600) {
        $('#p5imgNode7').fadeIn();
    }
    else {
        $('#p5imgNode7').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p5imgNode7').stop(true).fadeOut();
    }
 });

 /////////////////////
 // P6 FadeIn / Out //
 /////////////////////
 // p6info
 $(window).scroll(function() {
    if ($(window).scrollTop()>4800 && $(window).scrollTop()<5400) {
        $('#p6info').fadeIn();
    }
    else {
        $('#p6info').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6info').stop(true).fadeOut();
    }
 });

 // p6imgMap
 $(window).scroll(function() {
    if ($(window).scrollTop()>4800 && $(window).scrollTop()<5750) {
        $('#p6imgMap').fadeIn(1);
    }
    else {
        $('#p6imgMap').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgMap').stop(true).fadeOut();
    }
}); 

$(window).scroll(function() {
    //NODE1
    if ($(window).scrollTop()>4800 && $(window).scrollTop()<5750) {
        $('#p6imgNode1').fadeIn();
    }
    else {
        $('#p6imgNode1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode1').stop(true).fadeOut();
    }

    //NODE2
    if ($(window).scrollTop()>4850 && $(window).scrollTop()<5750) {
        $('#p6imgNode2').fadeIn();
    }
    else {
        $('#p6imgNode2').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode2').stop(true).fadeOut();
    }

    //NODE3
    if ($(window).scrollTop()>4900 && $(window).scrollTop()<5750) {
        $('#p6imgNode3').fadeIn();
    }
    else {
        $('#p6imgNode3').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode3').stop(true).fadeOut();
    }

    //NODE4
    if ($(window).scrollTop()>4950 && $(window).scrollTop()<5750) {
        $('#p6imgNode4').fadeIn();
    }
    else {
        $('#p6imgNode4').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode4').stop(true).fadeOut();
    }

    //NODE5
    if ($(window).scrollTop()>5000 && $(window).scrollTop()<5750) {
        $('#p6imgNode5').fadeIn();
    }
    else {
        $('#p6imgNode5').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode5').stop(true).fadeOut();
    }

    //NODE6
    if ($(window).scrollTop()>5050 && $(window).scrollTop()<5750) {
        $('#p6imgNode6').fadeIn();
    }
    else {
        $('#p6imgNode6').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode6').stop(true).fadeOut();
    }

    //NODE7
    if ($(window).scrollTop()>5100 && $(window).scrollTop()<5750) {
        $('#p6imgNode7').fadeIn();
    }
    else {
        $('#p6imgNode7').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode7').stop(true).fadeOut();
    }

    //NODE8
    if ($(window).scrollTop()>5150 && $(window).scrollTop()<5750) {
        $('#p6imgNode8').fadeIn();
    }
    else {
        $('#p6imgNode8').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p6imgNode8').stop(true).fadeOut();
    }
 });


 /////////////////////
 // P7 FadeIn / Out //
 /////////////////////
 // p7info
 $(window).scroll(function() {
    if ($(window).scrollTop()>5700 && $(window).scrollTop()<6500) {
        $('#p7info').fadeIn();
    }
    else {
        $('#p7info').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p7info').stop(true).fadeOut();
    }
 });

 // p7img
 $(window).scroll(function() {
    if ($(window).scrollTop()>5700 && $(window).scrollTop()<6500) {
        $('#p7img').fadeIn(1);
    }
    else {
        $('#p7img').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p7img').stop(true).fadeOut();
    }
 });

 // p7img2
 $(window).scroll(function() {
    if ($(window).scrollTop()>5700 && $(window).scrollTop()<6500) {
        $('#p7img2').fadeIn();
    }
    else {
        $('#p7img2').stop(true).fadeOut();
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p7img2').stop(true).fadeOut();
    }
 });

 /////////////////////
 // P9 FadeIn / Out //
 /////////////////////
 // p9img1
$(window).scroll(function() {
    if ($(window).scrollTop()>5150 && $(window).scrollTop()<13250) {
        $('#p9img1').fadeIn();
    }
    else {
        $('#p9img1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p9img1').stop(true).fadeOut();
    }
 });

 //////////////////////
 // P11 FadeIn / Out //
 //////////////////////
 // p11img1
$(window).scroll(function() {
    if ($(window).scrollTop()>9150 && $(window).scrollTop()<13250) {
        $('#p11img1').fadeIn();
    }
    else {
        $('#p11img1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p11img1').stop(true).fadeOut();
    }
 });

 //////////////////////
 // P12 FadeIn / Out //
 //////////////////////
 // p12img1
 $(window).scroll(function() {
    if ($(window).scrollTop()>10000 && $(window).scrollTop()<13250) {
        $('#p12img1').fadeIn();
    }
    else {
        $('#p12img1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p12img1').stop(true).fadeOut();
    }
 });

 // p12img3
 $(window).scroll(function() {
    if ($(window).scrollTop()>10700 && $(window).scrollTop()<13250) {
        $('#p12img3').fadeIn();
    }
    else {
        $('#p12img3').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p12img3').stop(true).fadeOut();
    }
 });

 //////////////////////
 // P16 FadeIn / Out //
 //////////////////////
 // p16img1
 $(window).scroll(function() {
    if ($(window).scrollTop()>12700 && $(window).scrollTop()<21700) {
        $('#p16img1').fadeIn();
    }
    else {
        $('#p16img1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p16img1').stop(true).fadeOut();
    }
 });

 // p16img2
 $(window).scroll(function() {
    if ($(window).scrollTop()>15000 && $(window).scrollTop()<16700) {
        $('#p16img2').fadeIn();
    }
    else {
        $('#p16img2').stop(true).fadeOut();
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p16img2').stop(true).fadeOut();
    }
 });

 //////////////////////
 // P20 FadeIn / Out //
 //////////////////////
 // p20img1
 $(window).scroll(function() {
    if ($(window).scrollTop()>21350 && $(window).scrollTop()<22450) {
        $('#p20img1').fadeIn();
    }
    else {
        $('#p20img1').stop(true).fadeOut(1);
    }
    if ($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
        $('#p20img1').stop(true).fadeOut(1);
    }
 });


//Bottle auto scroll
var is_scrollDown  = true,
    scrollSpeed    = 15;
$(window).scroll(function() {
    if ($(window).scrollTop()>24000 && $(window).scrollTop()<41300) {
      /*if ( is_scrollDown ) {
        window.scrollBy(0,scrollSpeed++);
      } else {
        window.scrollBy(0,-scrollSpeed);
      }*/
      window.scrollBy(0,scrollSpeed);
      $(window).on('mousewheel', function(event) {
        if(event.deltaY > 0)
            is_scrollDown  = false;
        else
          is_scrollDown  = true;
      })
    } else {
        scrollSpeed = 15;
    }
 });

//////////////////
// Image Buffer //
//////////////////
(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}