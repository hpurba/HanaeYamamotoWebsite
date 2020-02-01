! function() {
  "use strict";

  function i(i, e) {
    if (null == e) return null;
    null == e.__id__ && (e.__id__ = l++);
    var t;
    return null == i.hx__closures__ ? i.hx__closures__ = {} : t = i.hx__closures__[e.__id__], null == t && (t = function() {
      return t.method.apply(t.scope, arguments)
    }, t.scope = i, t.method = e, i.hx__closures__[e.__id__] = t), t
  }

  
  var e = function() {
    $(window).bind("load", i(this, this.init))
  };


  e.main = function() {
    new e
  }, e.prototype = {
    init: function(i) {
      var e = this;
      $(".frame").mCustomScrollbar({
        axis: "y",
        theme: "minimal-dark"
      });
      var t = $("section.menu-bg");
      $(".menu-switch").bind("click", function() {
        $("section.menu").addClass("menu-on"), t.css({
          visibility: "visible"
        }), t.velocity({
          opacity: 1
        }, {
          duration: 500,
          easing: "linear"
        })
      }), $(".menu-close, section.menu-bg").bind("click", function() {
        $("section.menu").removeClass("menu-on"), t.velocity({
          opacity: 0
        }, {
          duration: 500,
          easing: "linear",
          complete: function() {
            t.css({
              visibility: "hidden"
            })
          }
        })
      }), $("body").hasClass("top") && new s, $("body").hasClass("about") && new o, $("body").hasClass("shoplist") && new n, $("body").hasClass("products-detail") && new a, this.otherLink(), $(window).bind("pageshow", function(i) {
        e.pageView()
      })
    },
    pageView: function() {
      $("body").velocity({
        opacity: 1
      }, {
        duration: 500
      })
    },
    otherLink: function() {
      $("a").bind("click", function(i) {
        var e = $(this).attr("href");
        if ("_blank" != $(this).attr("target") && "#" != e.charAt(0) && e.indexOf("mailto:") < 0) {
          return $("body").velocity({
            opacity: 0
          }, {
            duration: 500,
            complete: function() {
              window.location.href = e
            }
          }), $(".menu-close").trigger("click"), !1
        }
      })
    }
  };
  var t = function(i) {
    var e = this;
    this.id = setInterval(function() {
      e.run()
    }, i)
  };
  t.prototype = {
    run: function() {}
  };
  var o = function() {
      $(".about-movie-bg").bind("click", function() {
        $(".about-movie-wrapper").html(""), $(".about-movie").css({
          visibility: "hidden"
        })
      }), $("#movie").bind("click", function() {
        $(".about-movie-wrapper").html('<iframe src="https://player.vimeo.com/video/201698808" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\r\n<p><a href="https://vimeo.com/201698808">TAIYOU&amp;C. / Introduction Movie</a> from <a href="https://vimeo.com/mikiyakobayashi">Mikiya Kobayashi Inc.</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'), $(".about-movie").css({
          visibility: "visible"
        })
      })
    },
    a = function() {
      $(".products-detail-thumbnails img").bind("click", function() {
        var i = $(this).index(".products-detail-thumbnails img");
        $(".products-detail-imgs img").removeClass("on"), $(".products-detail-imgs img").addClass("off"), $(".products-detail-imgs img").eq(i).addClass("on"), $(".products-detail-imgs img").eq(i).removeClass("off")
      }), $(".products-detail-download a").each(function(i, e) {
        "" == $(this).attr("href") && $(this).css({
          display: "none"
        })
      }), $("#products-detail-detail-imgs").slick({
        speed: 1e3,
        centerMode: !0,
        variableWidth: !0,
        adaptiveHeight: !0,
        arrows: !1,
        draggable: !0,
        dots: !0,
        slide: "p",
        centerPadding: "0px",
        autoplay: !1,
        autoplaySpeed: 6e3,
        pauseOnHover: !1,
        touchThreshold: 30,
        swipe: !0
      })
    },
    n = function() {
      $(".shoplist-area a").bind("click", function() {
        var i = $(this).attr("data-area");
        return $(".shoplist-area a").removeClass("on"), $(this).addClass("on"), "all" == i ? $("div.shopdata").css({
          display: "block"
        }) : ($("div.shopdata").css({
          display: "none"
        }), $("div." + i).css({
          display: "block"
        })), !1
      })
    },
    s = function() {
      var i = $(".mv-top");
      i.slick({
        speed: 1e3,
        easing: "EaseInOutCubic",
        centerMode: !0,
        slidesToShow: 1,
        variableWidth: !1,
        adaptiveHeight: !0,
        arrows: !1,
        draggable: !1,
        dots: !1,
        slide: "div.mv-slide",
        centerPadding: "0px",
        autoplay: !1,
        autoplaySpeed: 5e3,
        pauseOnHover: !1,
        touchThreshold: 30,
        swipe: !1
      });
      var e = $(".mv-btm");
      e.slick({
        speed: 1e3,
        easing: "EaseInOutCubic",
        centerMode: !0,
        slidesToShow: 1,
        variableWidth: !1,
        adaptiveHeight: !0,
        arrows: !1,
        draggable: !1,
        dots: !1,
        slide: "div.mv-slide",
        centerPadding: "0px",
        autoplay: !1,
        autoplaySpeed: 5e3,
        pauseOnHover: !1,
        touchThreshold: 30,
        swipe: !1
      }), new t(5e3).run = function() {
        i.slick("slickNext"), e.slick("slickPrev")
      }
    };
  (function() {}).pagelink = function() {
    $('a[href^="#"]').bind("click", function(i) {
      return !1
    })
  };
  var l = 0;
  e.main()
}();
