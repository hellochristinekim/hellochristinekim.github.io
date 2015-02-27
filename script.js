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
  
  $("#mygrid").gridacord({width: 350, height: 350, item_desc_pct: 0.9});

  $(".item").click(function(){
    $("#projects").fadeIn(1000);
    $("#projects .project").eq($(".item").index(this)).addClass("active").fadeIn(1000);
    $("#control").fadeIn(1000);
  });

  var cleanScreenFunction = function(){
    $("#projects").fadeOut(1000);
    $("#projects .project").removeClass("active");
    $("#projects .project").fadeOut(1000);
    $("#about").fadeOut(1000);
    $("#control").fadeOut(1000);    
  };

  var previousFunction = function(){

    var currentProject = $(".project.active");

    $(".project").removeClass("active").fadeOut({duration: 1000});

    if(currentProject.prev(".project").length){
      currentProject.prev().eq(0).addClass("active").fadeIn({duration: 1000});
    }else{
      $(".project:last").eq(0).addClass("active").fadeIn({duration: 1000});
    }
    
  };

  var nextFunction = function(){
    var currentProject = $(".project.active");

    $(".project").removeClass("active").fadeOut({duration: 1000});

    if(currentProject.next(".project").length){
      currentProject.next().eq(0).addClass("active").fadeIn({duration: 1000});
    }else{
      $(".project:first").eq(0).addClass("active").fadeIn({duration: 1000});
    }
  };
  
  $("#home").click(function(){
    cleanScreenFunction();
  });

  $("#about_contact").click(function(){
    cleanScreenFunction();
    $("#about").fadeIn(1000);
  });

  $("#left").click(previousFunction);
  $("#right").click(nextFunction);

  $(document).keydown(function(e) {
    switch(e.which){
      case 27:
        cleanScreenFunction();
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

  $(".item,#left,#right").click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
  });

});