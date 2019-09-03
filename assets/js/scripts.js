//All custom Javascripts

$(".card-hover-approach").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

$(".card-clickable").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });


//Load more fxn for chacon gallery
$(function(){
  $(".row-gallery").slice(0, 2).show(); // select the first two divs
  $("#load").click(function(e){ // click event for load more
      e.preventDefault();
      $(".row-gallery:hidden").slice(0, 1).show(); // select next 2 hidden divs and show them
      if($(".row-gallery:hidden").length == 0){ // check if any hidden divs still exist
        $("#load").hide() //hide button
      }
  });
});


//Load more fxn for Sameer gallery
$(function(){
  $(".row-gallery2").slice(0, 2).show(); // select the first two divs
  $("#load2").click(function(e){ // click event for load more
      e.preventDefault();
      $(".row-gallery2:hidden").slice(0, 1).show(); // select next 2 hidden divs and show them
      if($(".row-gallery2:hidden").length == 0){ // check if any hidden divs still exist
        $("#load2").hide() //hide button
      }
  });
});


//Load more fxn for product videos
$(function(){
  $(".product-video").slice(0, 2).show(); // select the first two divs
  $("#loadvideo").click(function(e){ // click event for load more
      e.preventDefault();
      $(".product-video:hidden").slice(0, 1).show(); // select next 2 hidden divs and show them
      if($(".product-video:hidden").length == 0){ // check if any hidden divs still exist
        $("#loadvideo").hide() //hide button
      }
  });
});