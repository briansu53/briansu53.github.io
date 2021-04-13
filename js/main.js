$(function(){
  console.log('hello')
  $(".open").click(function(){
    // 展開section info
    $(this).parents('.section').next().removeClass("dis-none").addClass("dis-flx")
    // 修正section title樣式
    $(this).parents('.section').css("border-radius","25px 25px 0px 0px")
    //隱藏open
    $(this).addClass("dis-none")
  });

  $(".close").click(function(){
    // 收合section info
    $(this).parents('.section').removeClass("dis-flx").addClass("dis-none")
    // 修正section title樣式
    $(this).parents('.section').prev(".title").css("border-radius","25px")
    //顯示open
    $(this).parents('.section').prev(".title").find(".open").removeClass("dis-none")
    console.log($(this).parents('.section').prev(".title").find(".open"))
  })


});