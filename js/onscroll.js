
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop <830) {
   
    document.getElementById("header").style.backgroundColor = "#fff";


  } else {
  
    document.getElementById("header").style.backgroundColor = "#ffffff6f";
  }
}