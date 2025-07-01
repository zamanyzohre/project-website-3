$(document).ready(function () {

 $(window).scroll(() =>{
  let scroll = $(document).scrollTop();
  if (scroll >10) {
    $("nav").addClass("shownav");
  }else{
    $("nav").removeClass("shownav");
  }
})
});
