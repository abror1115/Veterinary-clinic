var askButton = document.querySelector("#ask-question");
var overlay = document.querySelector("#overlay");
var modalWindows = document.querySelector("#modal");
var modalClose = document.querySelector("#modal-close");
 
askButton.addEventListener("click",function() {
  overlay.classList.toggle("visible");
  modalWindows.classList.toggle("opened");

});

overlay.addEventListener("click", function(){
  overlay.classList.remove("visible");
  modalWindows.classList.remove("opened")
});

modalClose.addEventListener("click", function(){
 modalWindows.classList.remove("opened");
 overlay.classList.remove("visible");
});