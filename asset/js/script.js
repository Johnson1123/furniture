const close = document.getElementById("close");
const bars = document.getElementById("bars");
const smNav =  document.getElementById('smNav');

// google Zoom effect variable
const zoomPlus = document.getElementById("zoomPlus");
const zoomMinus = document.getElementById("zoomMinus");
const googleImage = document.images["googleImage"];

// google Zoom in And Zoom Out
zoomPlus.addEventListener("click", function(){
     googleImage.classList.add("scale-up");
})
zoomMinus.addEventListener("click", function(){
     googleImage.classList.remove("scale-up");
})

close.addEventListener('click', function(){
     smNav.style.display = "none";
     if(bars.style.display = "none"){
          bars.style.display = "block";
     }
});
bars.addEventListener("click", function(e){
     smNav.style.display = "block";
     bars.style.display = "none";
})

