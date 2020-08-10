

    var containerEl = document.querySelector('.container-filter');
    var mixer = mixitup(containerEl);
    
    $('.burger').click(function(){
        $('.mobile-menu').fadeIn().toggle();
    });

    $('.scroll-to').click(function(){
        $('.mobile-menu').css('display','none');
        $('.mobile-menu').hide();
    });
    
    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('#burger1').prop('checked', false);
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 50
        }, 800);
    });
    