$(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }


        var d = a("body"),
            i = d.innerWidth();
        d.css("overflow", "hidden"),
            d.width(i),
            a("body").append(f),
            "left" === b.edge ? (f.css({ width: "50%", right: 0, left: "" }),
                e.velocity({ translateX: [0, -1 * b.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })) :
            (f.css({ width: "50%", right: "", left: 0 }),
                e.velocity({ translateX: [0, b.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" }));
        var j = a('<div id="sidenav-overlay"></div>');
        j.css("opacity", 0).click(function() {
                h = !1, g = !1, c(), j.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { a(this).remove() } })
            }),
            a("body").append(j), j.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { h = !0, g = !1 } })


    });
    $('#top').parallax("50%", 0.6);
    $('#prepare').parallax("50%", 0.3);
    $(".button-collapse").sideNav();



});
