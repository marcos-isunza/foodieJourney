  function runScroll() {
    scrollTo(document.body, 1000, 600);
  }
  var scrollme;
  scrollme = document.getElementById("scrollme1");
  scrollme.addEventListener("click",runScroll,false)
  
  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
  
    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop == to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }
