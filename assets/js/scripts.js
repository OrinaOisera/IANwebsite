//All custom Javascripts

$(".card-hover").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

  $(".card-clickable").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });


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