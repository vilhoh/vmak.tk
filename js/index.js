var pagesl = document.getElementById('pagesl');
var pagesbut = document.getElementById('pagesButton');

pagesbut.addEventListener("click", function() {
  if (pagesl.style.display === ("block")) {
    pagesl.style.display="none"
    pagesbut.style.borderBottomLeftRadius="10px"
    pagesbut.style.borderBottomRightRadius="10px"
    pagesbut.style.filter="drop-shadow(30px 10px 4px black)"
  } else {
    pagesl.style.display="block";
    pagesbut.style.borderBottomLeftRadius="0px"
    pagesbut.style.borderBottomRightRadius="0px"
    pagesbut.style.filter="none"
  }
});


if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("please, for the love of god, don't fucking inspect element.");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("You've tried to open context menu");
    window.event.returnValue = false;
  });
}