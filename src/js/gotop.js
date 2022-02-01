var gotop = document.getElementById("goTop");

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