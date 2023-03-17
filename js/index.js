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
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert("Right-clicking is not allowed on this website. Click OK to be redirected to vmak.tk.");
  window.location.href = "https://vmak.tk/";
});
