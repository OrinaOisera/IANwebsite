//All custom Javascripts

$(".card-hover").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

  $(".card-clickable").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });