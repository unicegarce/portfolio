function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbanner") {
    x.className += " responsive";
  } else {
    x.className = "navbanner";
  }
}