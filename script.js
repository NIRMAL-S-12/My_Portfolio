$(document).ready(function() {
    $('#btn-2').click(function() {
      $('html, body').animate({
        scrollTop: $('#projects').offset().top
      }, 0);
    });
  });
  
  // portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    }
});

