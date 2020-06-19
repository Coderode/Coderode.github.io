$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
        //$(".navbar").css("background-color", "black"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".navbar").removeClass('bg-transparent');
        $(".navbar").addClass('navbar-custom');
        $(".navbar-nav").addClass('navbar-text-color');
      } else {
        //$(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
        $(".navbar").removeClass('navbar-custom');
        $(".navbar").addClass('bg-transparent');
        $(".navbar-nav").removeClass('navbar-text-color');
      }
    });
  });