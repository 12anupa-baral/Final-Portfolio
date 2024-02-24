function myFunction() {
  var x = document.getElementsByClassName("mobile__nav")[0];
  if (x.style.display === "block" || x.style.display === "") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
