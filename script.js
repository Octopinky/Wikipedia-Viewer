var endpoint = "https://en.wikipedia.org/w/api.php"; //Base Url for making an API request. It's essentially the homepage of the API.
var searchUrl; //The final url before it is called in an ajax request.

function searchWiki() {
  $.ajax({

  });
}
document.getElementById("userInput").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;
  if (key == 13) {
    e.preventDefault();
  }
};

$.fn.extend({ //function that makes it easy to do animations
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault(); //Disables the form from being submitted
    $("#userInput").animate({ //animates the search box
      marginTop: "1.5%",
      height: "35px",
      fontSize: "18px",
    }, 1000);
    document.querySelector(".card").style.display = "block"; //makes the card not hidden
    $(".card").animateCss("fadeInLeft"); //makes the card fade in left
    setTimeout(function() {
      document.querySelector("#card2").style.display = "block";
      $("#card2").animateCss("fadeInLeft");
    }, 200);
    setTimeout(function() {
      document.querySelector("#card3").style.display = "block";
      $("#card3").animateCss("fadeInLeft");
    }, 300);
    setTimeout(function() {
      document.querySelector("#card4").style.display = "block";
      $("#card4").animateCss("fadeInLeft");
    }, 400);
    setTimeout(function() {
      document.querySelector("#card5").style.display = "block";
      $("#card5").animateCss("fadeInLeft");
    }, 500);

    setTimeout(function() {
      document.querySelector("#card6").style.display = "block";
      $("#card6").animateCss("fadeInLeft");
    }, 600);
    setTimeout(function() {
      document.querySelector("#card7").style.display = "block";
      $("#card7").animateCss("fadeInLeft");
    }, 600);
    setTimeout(function() {
      document.querySelector("#card8").style.display = "block";
      $("#card8").animateCss("fadeInLeft");
    }, 600);
    setTimeout(function() {
      document.querySelector("#card9").style.display = "block";
      $("#card9").animateCss("fadeInLeft");
    }, 600);
    setTimeout(function() {
      document.querySelector("#card10").style.display = "block";
      $("#card10").animateCss("fadeInLeft");
    }, 600);

  }
});
