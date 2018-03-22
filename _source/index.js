$(function(){
  $(".left").hover(function(){
    $(".medako").addClass("medaL");
    $(".medako").removeClass("medaR");
  });
  
  $(".right").hover(function(){
    $(".medako").addClass("medaR");
    $(".medako").removeClass("medaL");
    
  });

  $(window).mousemove(function(e){
    $(".medahouse").css("transform", "translate(" + (e.clientX - $(window).width() / 2) / 30 + "px, " + (e.clientY - $(window).height() / 2) / 30 + "px)")
    $(".banner").css("transform", "translate(" + (e.clientX - $(window).width() / 2) / 20 + "px, " + (e.clientY - $(window).height() / 2) / 20 + "px)")
    $(".nearback").css("transform", "translate(" + (e.clientX - $(window).width() / 2) / -5 + "px, " + (e.clientY - $(window).height() / 2) / -5 + "px)")
    $(".farback").css("transform", "translate(" + (e.clientX - $(window).width() / 2) / -15 + "px, " + (e.clientY - $(window).height() / 2) / -15 + "px)")
  })
});