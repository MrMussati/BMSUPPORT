var zero = 0;
$(document).ready(function(){
    $(window).on('scroll', function(){
        $('#topo').toggleClass('hide', $(window).scrollTop()
        > zero);
        zero = $(window).scrollTop();
    })
})

$('.intro').mousemove(function(e){
            var y = e.pageY;
            var x = e.pageX;                    
            $('.intro img').css({'top': y/-15}); 
            $('.intro img').css({'left': x/-15});

      });
      
$(window).on("scroll", function() {
  // La barre de progression
  var winTop = $(window).scrollTop();
  var docHeight = $("#full").height();
  var winHeight = $(window).height();
  var totalScroll = winTop / (docHeight - winHeight) * 100;
  $(".progress").css("width", totalScroll + "%");

  // Le paralax de l'hero image (à partir de 768px)
  if (window.matchMedia("(min-width:300px)").matches) {
    var scrollTop = $(this).scrollTop();
    $(".intro img").css("margin-top", -(scrollTop * 0.05) + "%");
  }
});

"use strict";
// Inspired By
// https://codepen.io/abeatrize/pen/LJqYey
var _a, _b;
// Bongo Cat originally created by @StrayRogue and @DitzyFlama
const ID = "bongo-cat";
const s = (selector) => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");
for (let note of notes) {
    (_a = note === null || note === void 0 ? void 0 : note.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(note.cloneNode(true));
    (_b = note === null || note === void 0 ? void 0 : note.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(note.cloneNode(true));
}
const music = { note: s(".music .note") };
const cat = {
    pawRight: {
        up: s(".paw-right .up"),
        down: s(".paw-right .down"),
    },
    pawLeft: {
        up: s(".paw-left .up"),
        down: s(".paw-left .down"),
    },
};
const style = getComputedStyle(document.documentElement);
const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");
gsap.set(music.note, { scale: 0, autoAlpha: 1 });
const animatePawState = (selector) => gsap.fromTo(selector, { autoAlpha: 0 }, {
    autoAlpha: 1,
    duration: 0.01,
    repeatDelay: 0.19,
    yoyo: true,
    repeat: -1,
});
const tl = gsap.timeline();
tl.add(animatePawState(cat.pawLeft.up), "start")
    .add(animatePawState(cat.pawRight.down), "start")
    .add(animatePawState(cat.pawLeft.down), "start+=0.19")
    .add(animatePawState(cat.pawRight.up), "start+=0.19")
    .timeScale(1.6);
gsap.from(".terminal-code line", {
    drawSVG: "0%",
    duration: 0.1,
    stagger: 0.1,
    ease: "none",
    repeat: -1,
});
// typing for pipe function doesn't seem to be working for usage when partially applied?
const noteElFn = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
const noteEls = noteElFn(music.note);
const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;
const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = (amt) => `${gsap.utils.random(["-", "+"])}=${amt}`;
const animateNotes = (els) => {
    els.forEach((el) => {
        gsap.set(el, {
            stroke: colorizer(),
            rotation: rotator(),
            x: gsap.utils.random(-25, 25, 1),
        });
    });
    return gsap.fromTo(els, {
        autoAlpha: 1,
        y: 0,
        scale: 0,
    }, {
        duration: 2,
        autoAlpha: 0,
        scale: 1,
        ease: "none",
        stagger: {
            from: "random",
            each: 0.5,
        },
        rotation: dir(gsap.utils.random(20, 30, 1)),
        x: dir(gsap.utils.random(40, 60, 1)),
        y: gsap.utils.random(-200, -220, 1),
        onComplete: () => animateNotes(els),
    });
};
tl.add(animateNotes(notesG1)).add(animateNotes(notesG2), ">0.05").add(animateNotes(notesG3), ">0.25");


// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 10));
})();



$('body a[href^="#"]').on("click",function(o){o.preventDefault();var e=$(this).attr("href"),t=$(e).offset().top;$("html, body").animate({scrollTop:t-100},500)});var zero=0;function toggle(){this.classList.add("animation"),this.classList.toggle("active");let o=this.cloneNode(!0);this.parentNode.replaceChild(o,this),o.addEventListener("click",toggle)};


$(window).load(function(){
    setTimeout(function(){
        $('#preloader').velocity({
            opacity : 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function(){
            $('#hola').velocity({
            translateY : "-100%"
        }, {
            duration: 1000,
            easing: [0.7,0,0.3,1],
            complete: function(){
                $('.home').addClass('animate-border divide');
            }
        })  
            }
        })
    },1000)
})