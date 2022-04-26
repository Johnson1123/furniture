const close = document.getElementById("close");
const bars = document.getElementById("bars");
const smNav =  document.getElementById('smNav');

// google Zoom effect variable
const zoomPlus = document.getElementById("zoomPlus");
const zoomMinus = document.getElementById("zoomMinus");
const googleImage = document.images["googleImage"];

// DFYCon variable
const DFYCon = document.getElementsByClassName("DFYCon");

close.addEventListener('click', function(){
     smNav.style.display = "none";
     if(bars.style.display = "none"){
          bars.style.display = "block";
     }
});
bars.addEventListener("click", function(e){
     smNav.style.display = "block";
     bars.style.display = "none";
});

// accordion open and close
let i;
for(i = 0; i < DFYCon.length; i++){
     DFYCon[i].addEventListener("click",  function(){
          this.classList.toggle("active-list");
          const nextDFYCon = this.nextElementSibling;
          nextDFYCon.classList.toggle("DFY-display");
     });
    
}

// slide script
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// google Zoom in And Zoom Out
zoomPlus.addEventListener("click", function(){
     googleImage.classList.add("scale-up");
});
zoomMinus.addEventListener("click", function(){
     googleImage.classList.remove("scale-up");
})
