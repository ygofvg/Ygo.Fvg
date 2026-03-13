//jquery-click-scroll
//by syamsul'isul' Arifin


// Nuova gestione dinamica delle sezioni per menu e scrollspy
$(document).ready(function(){
    var $navLinks = $('#sidebarMenu .nav-link.click-scroll');
    var sectionIds = $navLinks.map(function(){
        var href = $(this).attr('href');
        return href && href.startsWith('#') ? href.substring(1) : null;
    }).get();

    function onScroll() {
        var scrollPos = $(document).scrollTop();
        var found = false;
        for (var i = sectionIds.length - 1; i >= 0; i--) {
            var section = $('#' + sectionIds[i]);
            if (section.length) {
                var offset = section.offset().top - 50; // 50px tolerance for header
                if (scrollPos >= offset) {
                    $navLinks.removeClass('active').addClass('inactive');
                    $navLinks.eq(i).addClass('active').removeClass('inactive');
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            $navLinks.removeClass('active').addClass('inactive');
            $navLinks.eq(0).addClass('active').removeClass('inactive');
        }
    }

    $(document).on('scroll', onScroll);

    $navLinks.each(function(i){
        $(this).on('click', function(e){
            var targetId = sectionIds[i];
            var $target = $('#' + targetId);
            if ($target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $target.offset().top - 20 // scroll with small offset
                }, 300);
            }
        });
    });

    // Stato iniziale
    $navLinks.addClass('inactive');
    $navLinks.eq(0).addClass('active').removeClass('inactive');
    onScroll();
});

$(document).ready(function(){
    $('#sidebarMenu .nav-item .nav-link:link').addClass('inactive');    
    $('#sidebarMenu .nav-item .nav-link').eq(0).addClass('active');
    $('#sidebarMenu .nav-item .nav-link:link').eq(0).removeClass('inactive');
});