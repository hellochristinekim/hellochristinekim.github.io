var oldHeight = 0;
$(window).scroll(function() {
  var height = $(window).scrollTop();

  if(oldHeight < height && height > 0) {
    $("header").slideUp("fast");
  }else{
    $("header").slideDown("fast");
  }

  oldHeight = height;
});

$(document).ready(function(){
  
  $("#mygrid").gridacord({width: 350, height: 350, item_desc_pct: 0.9, item_margin: 3});

  var previousFunction = function(){

    var currentProject = $(".project.active");

    $(".project").removeClass("active").fadeOut({duration: 1000});

    if(currentProject.prev(".project").length){
      currentProject.prev().eq(0).addClass("active").fadeIn({duration: 1000});
    }else{
      $(".project:last").eq(0).addClass("active").fadeIn({duration: 1000});
    }
    
    $('html, body').animate({scrollTop: 0}, 'slow');
  };

  var nextFunction = function(){
    var currentProject = $(".project.active");

    $(".project").removeClass("active").fadeOut({duration: 1000});

    if(currentProject.next(".project").length){
      currentProject.next().eq(0).addClass("active").fadeIn({duration: 1000});
    }else{
      $(".project:first").eq(0).addClass("active").fadeIn({duration: 1000});
    }
    
    $('html, body').animate({scrollTop: 0}, 'slow');
  };
  
  var goHome = function(){
    if(!$("#main").is(":visible")){
      $(".content").fadeOut(1000);
      $("#main").fadeIn(1000);
    }
  };
  
  $(".item").click(function(){
    $("#main").fadeOut(1000);
    $("#projects .project").removeClass("active");
    $("#projects .project").css("display", "none");
    $("#projects").fadeIn(1000);
    $("#projects .project").eq($(".item").index(this)).addClass("active").fadeIn(1000);
    $("#control").fadeIn(1000);
  });
  
  $("#home").click(goHome);

  $("#left").click(previousFunction);
  $("#right").click(nextFunction);

  $(document).keydown(function(e) {
    switch(e.which){
      case 27:
        goHome();
        break;
      case 37: 
        previousFunction();
        break;
      case 39: 
        nextFunction();
        break;

      default: return;
    }
  });

  $(".item,#left,#right,#back a").click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
  });

});