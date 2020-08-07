// flips card when clicked on
var card = document.querySelector('.card');
var flipper = document.querySelector('.flipper');

flipper.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

// this code makes the back of the card the same size as the front of the card -
// or the front as big as the back - whichever is bigger - just so theyre the same size
// it only takes the measurement when the page is rendered and there for does not adjust properly when window changes sizes
// only created one element with one image and no official content on the back - this code will become updated or obsolete once
// new tools are learned or content is more defined - potential use for media query with defined em/rem hights instead of %s.

var frontHeight = $('.card__face--front').outerHeight();
var backHeight = $('.card__face--back').outerHeight();

if (frontHeight > backHeight) {
    $('.card__face, .card__face--back').height(frontHeight);
    $('.card__face, .card__face--front').height(frontHeight);
      console.log('front height')
}
else if (frontHeight < backHeight) {
    $('.card__face, .card__face--front').height(backHeight);
      $("img").css('height', backHeight);
      console.log('back height')
      $("img").css('width', 'auto');
}
else {
    $('.card__face').height(backHeight);}


// changes between hollow heart and filled heart when clicked on 
$(".heart.fa").click(function() {
  $(this).toggleClass("fa-heart fa-heart-o");
});
