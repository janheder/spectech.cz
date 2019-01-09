// =============================================================================
// LAZY LOAD
// =============================================================================

var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

// =============================================================================
// SCROLL NAV
// =============================================================================

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    header.addClass("no-scroll");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 0) {
            header.removeClass("no-scroll").addClass("scroll");
        }
        if (scroll <= 0) {
            header.removeClass("scroll").addClass("no-scroll");
        }
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header2 = $(".no-scroll");
    var scroll2 = $(window).scrollTop();
    if (scroll2 > 0) {
        header2.removeClass('no-scroll').addClass("scroll");
    }
    if (scroll < 0) {
        header2.removeClass("scroll").addClass('no-scroll');
    }
});

// =============================================================================
// PRINT STYLING
// =============================================================================

if ($(".print-area").length) {
    $("<style>")
    .prop("type", "text/css")
    .html("\
    @media print {\
        body {\
            position: relative;\
        }\
        body * {\
            visibility: hidden;\
            position: absolute;\
            left: 0px;\
            right: 0px;\
            top: 0px;\
            width: 100%;\
        }\
        .print-area, .print-area *{\
            visibility: visible;\
            position: relative;\
            width: 100%;\
        }\
        @page {size: 100%;  margin: 0mm;}\
    }")
    .appendTo("body");
}

// =============================================================================
// EU COOKIE POLICY
// =============================================================================

$(document).ready(function(){
    $.cookieBar({
        message: 'Tato stránka používá cookies za účelem optimalizace efektivního poskytování služeb.',
        acceptText: 'Rozumím',
        fixed: true,
        bottom: true,
        policyButton: true,
        policyText: 'Více informací',
        policyURL: 'http://www.google.com/intl/en/policies/technologies/cookies/',
    });
});

// =============================================================================
// OBJECT FIT FALLBACK
// =============================================================================

var styletotest = "object-fit";
if (styletotest in document.body.style){
    /*alert("The " + styletotest + " property is supported");*/
}
else {
    $('.post__image-container').each(function () {
        var $container = $(this),
        imgUrl = $container.find('img').attr('data-src');
        if (imgUrl) {
            $(this).css('backgroundImage', 'url(' + imgUrl + ')')
            $('.post__featured-image').css('display','none');
        }  
    });
}

// =============================================================================
// HERO CAROUSEL CONTROL
// =============================================================================


// =============================================================================
// VARIOUS TOGGLES AND CONTROLS
// =============================================================================

$(".navbar-toggler").click(function() { 
    $("body").toggleClass("active");
    $(".navbar-toggler").toggleClass("collapsed");
    $("#dark-overlay").toggleClass("active");
});

$("#dark-overlay").click(function() { 
    $("body").toggleClass("active");
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-toggler").attr("aria-expanded","false");
    $("#dark-overlay").toggleClass("active");
});

$(".navbar-cart__toggle").click(function() { 
    $("body").toggleClass("active-right");
    $("#dark-overlay-cart").toggleClass("active");
});

$("#dark-overlay-cart").click(function() { 
    $("body").toggleClass("active-right");
    $("#dark-overlay-cart").toggleClass("active");
});

$("#search-toggler-responsive").click(function() { 
    $(".navbar-search").fadeToggle(200);
    $("body").toggleClass("stop-scroll");
});

$("#search-toggler-responsive-close").click(function() { 
    $(".navbar-search").fadeToggle(200);
    $("body").toggleClass("stop-scroll");
});

$("#search-toggler-responsive").click(function() {
    $("#searchbox").focus();
});

// =============================================================================
// PARALAX HEAD
// =============================================================================

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    $(".hero__bg-symbols").css("top", (scrollTop / 2) + "px");
});

// =============================================================================
// SEARCH AUTOCOMPLETE
// =============================================================================


// =============================================================================
// ANCHOR LINK SETUP
// =============================================================================

$('a[href*="#anchor"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length && $(window).width() > 991) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { 
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); 
                    $target.focus(); 
                };
            });
        }

        if (target.length && $(window).width() <= 991) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 1000, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { 
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); 
                    $target.focus(); 
                };
            });
        }

    }
});

// =============================================================================
// TOOLTIP SETUP
// =============================================================================

$(function () {
    $("[data-toggle='tooltip']").tooltip()
})

// ============================================================================
 // NUMBER SPINNER 
 // ============================================================================


// =============================================================================
// MODAL AUTO DISPLAY
// =============================================================================


// =============================================================================
// HTML5 Speech Recognition API 
// =============================================================================


// =============================================================================
// SWIPER SETUP
// =============================================================================


// =============================================================================
// BOTTOM NAV SETUP
// =============================================================================


// =============================================================================
// GALLERY SETUP
// =============================================================================
