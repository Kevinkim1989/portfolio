$(".sliding-link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});
// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });

$(document).ready(function() {
    
    // On page load, any items that are 'on screen', make visible.
    fadeCheck();
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        // As items 'enter screen', make visible.
        fadeCheck();
    
    });

    function fadeCheck() {
    /* Check the location of each desired element */
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},1500);
                
        }
        
    }); 
    }
    
});