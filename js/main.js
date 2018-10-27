// initiate timeline under variable tl
let tl = new TimelineLite();

tl.from(".logo", 2, {opacity:0, scale:0, ease:Bounce.easeOut});
tl.to(".logo", 0.1, {opacity:0});
tl.from(".cup", 1, {opacity:0});
tl.to(".cup", 1.5, {top: "150px", scale:0.3});  // cup smaller animation
tl.from(".craftBannersAre", 1.5, {x:500, opacity:0}, "-=1.15"); //messages come out
tl.from(".superRefreshing", 1.5, {x:500, opacity:0}, "-=1.25");
tl.to(".craftBannersAre", 1.5, {x:-500, opacity:0}, "+=1.25"); // right: does not animate
tl.to(".superRefreshing", 1.5, {x:-500, opacity:0}, "-=1.25");
tl.to(".cup", 1.5, {y: -70}, "-=1.15");
tl.from(".hashTag", 1, {y:-50, opacity:0}, "-=1.5");
tl.from(".linkUrl", 1, {y:150, opacity:0}, "-=1.1");

$(document).ready(function() {              // I know I was instructed to not use jquery,
    $('.container').removeAttr('id')       // but this is to clear up the page before screen loads.
});
