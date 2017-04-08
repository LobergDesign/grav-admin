
$(window).load(function () {
    $(".load-overlay, .second-layer, .main-container, #loader").addClass('hide-overlay');
});

$(document).ready(function () {
//burger menu
    var classlist = $('header .logo, .menu-icon, .main-navigation');
    var clickDelay = 0,
            clickDelayTimer = null;

    $('#nav-icon4').on('click', function () {
        if (clickDelayTimer === null) {
            var $burger = $(this);
            $burger.toggleClass('active');
            $burger.parent().toggleClass('is-open');
            classlist.toggleClass('active');
            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
                classlist.removeClass('active');

            }

            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    });

//smooth scroll to anchor 
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


// slide in
var win = $(window);
var allMods = $(".reveal");

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});
$.fn.visible = function (partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom + 150 <= viewBottom) && (compareTop >= viewTop));

};
$(window).scroll(function (event) {
    slideIn();
});

function slideIn() {
    $(".show-content").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("reveal");
        }
    });
}

    // footer
    $(window).on("scroll touchmove", function () {
        if ($(window).scrollTop() + $(window).height() === $(document).height()) {
            $('footer').addClass('active');
        } else {
            $('footer').removeClass('active');
        }
    });
});


