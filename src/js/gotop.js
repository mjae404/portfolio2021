var gotop = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    gotop.style.opacity = "1";
    gotop.style.zIndex = "1";
  } else {
    gotop.style.opacity = "0";
    gotop.style.zIndex = "-1";
  }
}

gotop.addEventListener('click',(e)=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})

