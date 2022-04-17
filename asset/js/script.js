const close = document.getElementById("close");
const bars = document.getElementById('bars');
const smNav =  document.getElementById('smNav');

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