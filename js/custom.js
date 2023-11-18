$('.menu-Bar').click(function () {
    $(this).toggleClass('open'),
        $('.menuWrap').toggleClass('open'),
        $('body').toggleClass('ovr-hiddn')
}),
    $('.dropdown-mm').mouseover(function () {
        $(this).find('a').addClass('is-active'),
            $(this).find('.dropdown-menu').addClass('is-active')
    }),
    $('.dropdown-mm').mouseleave(function () {
        $(this).find('a').removeClass('is-active'),
            $(this).find('.dropdown-menu').removeClass('is-active')
    })
const submenu = $('.submenu_sec .navbar-nav').html(),
        topNav = $('.talk_list').html()

$('.menuWrap ul.menu').append( submenu + topNav ),
    $('.dropdown-mm a.dropdown-toggle').on('click', function (e) {
        e.preventDefault()
        var t = $(this).parent().hasClass('active')
        $(this).parent().attr('class'), $(this).attr('href')
        $(this).parent().siblings().children('ul,div').slideUp(),
            $(this).next().slideToggle(),
            w('alreadyActive: ' + t),
            t
                ? $(this).parent().removeClass('active')
                : $(this).parent().toggleClass('active')
    })
var currentTab = 0

function showTab(e) {
    var t = document.getElementsByClassName('tab')
    ;(t[e].style.display = 'block'),
        0 == e
            ? ((document.getElementById('prevBtn').style.display = 'none'),
                (document.getElementById('signupBtn2').style.display = 'none'),
                (document.getElementById('nextBtn').style.display = 'inline'))
            : (document.getElementById('prevBtn').style.display = 'inline'),
        e == t.length - 1
            ? ((document.getElementById('nextBtn').style.display = 'none'),
                (document.getElementById('signupBtn2').style.display = 'inline'))
            : (document.getElementById('nextBtn').innerHTML = 'Next')
}

function nextPrev(e) {
    var t = document.getElementsByClassName('tab')
    if (1 == e && !validateForm()) return !1
        ;
    (t[currentTab].style.display = 'none'), showTab((currentTab += e))
}

function validateForm() {
    var e,
        t,
        i = !0
    for (
        e = document
            .getElementsByClassName('tab')
            [currentTab].getElementsByTagName('input'),
            t = 0;
        t < e.length;
        t++
    )
        '' == e[t].value && ((e[t].className += ' invalid'), (i = !1))
    return i
}

function openNav() {
    document.getElementById('mySidenav').style.width = '100%'
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0'
}

var packageSwiper = new Swiper('.packageCarousel', {
    speed: 1e3,
    spaceBetween: 0,
    loop: !1,
    breakpoints: {
        0: {slidesPerView: 1},
        768: {slidesPerView: 2},
        1200: {slidesPerView: 3},
    },
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
})
let packageInner = new Swiper('.packageInnerSwiper', {
    speed: 1e3,
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: !1,
    grid: {rows: 2},
    pagination: {el: '.swiper-pagination', clickable: !0},
})
$(function () {
    AOS.init({
        once: !0,
        disable: function () {
            return window.innerWidth < 800
        },
    })
}),
    $('[data-targetit]').on('click', function (e) {
        $(this).addClass('active'), $(this).siblings().removeClass('active')
        var t = $(this).data('targetit')
        $('.' + t)
            .siblings('[class^="box-"]')
            .hide(),
            $('.' + t).fadeIn(),
            $('.package_slider .row').slick('setPosition'),
            $('.books_slides .row').slick('setPosition')
    })
var number_slider = new Swiper('.number_slider', {
    loop: !1,
    autoplay: !1,
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: !1,
    pagination: {el: '.swiper-pagination', type: 'bullets', clickable: !0},
    breakpoints: {
        1024: {slidesPerView: 4, spaceBetween: 10},
        640: {slidesPerView: 2, spaceBetween: 10},
        576: {slidesPerView: 1, spaceBetween: 10},
        375: {slidesPerView: 1, spaceBetween: 10},
        360: {slidesPerView: 1, spaceBetween: 10},
    },
    scrollbar: {el: '.swiper-scrollbar'},
    navigation: {nextEl: '.count-num span'},
})
$('.service-ltr')
    .not('.slick-initialized')
    .slick({
        dots: !1,
        arrows: !1,
        centerMode: !0,
        rtl: !1,
        autoplay: !0,
        autoplayspeed: 4e3,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1,
                },
            },
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: !1,
                    slidesToScroll: 1,
                    infinite: !0,
                    adaptiveHeight: !0,
                },
            },
        ],
    }),
    $('.service-rtl')
        .not('.slick-initialized')
        .slick({
            dots: !1,
            arrows: !1,
            rtl: !0,
            autoplay: !0,
            autoplayspeed: 4e3,
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: !0,
                        dots: !1,
                    },
                },
                {
                    breakpoint: 1101,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: !0,
                        dots: !1,
                    },
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !0,
                        adaptiveHeight: !0,
                    },
                },
            ],
        }),
    $('.testi-slider').slick({
        dots: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        arrows: !1,
    }),
    $('.packag-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        arrows: !0,
        prevArrow:
            '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow:
            '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {breakpoint: 999, settings: {arrows: !1, slidesToShow: 2}},
            {breakpoint: 768, settings: {arrows: !1, slidesToShow: 1}},
        ],
    }),
    $('.sitelogo_slide')
        .not('.slick-initialized')
        .slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 3e3,
            arrows: !1,
            responsive: [
                {breakpoint: 999, settings: {arrows: !1, slidesToShow: 2}},
                {breakpoint: 768, settings: {arrows: !0, slidesToShow: 1}},
            ],
        }),
    $('.bannerbottom_slide ul')
        .not('.slick-initialized')
        .slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 3e3,
            arrows: !1,
            responsive: [
                {breakpoint: 999, settings: {arrows: !1, slidesToShow: 4}},
                {
                    breakpoint: 768,
                    settings: {dots: !0, arrows: !1, slidesToShow: 1},
                },
            ],
        }),
$(window).width() <= 991 &&
$('.bannerbottom_slide ul').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !1,
    autoplay: !1,
    autoplaySpeed: 3e3,
    arrows: !1,
    adaptiveHeight: !0,
}),
$(window).width() <= 768 &&
($('.responsive-slider').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    arrows: !1,
    adaptiveHeight: !0,
}),
    $('.process_steps .row').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        arrows: !1,
        adaptiveHeight: !0,
    }))
var clinet_slider = new Swiper('.clinet_slider', {
    loop: !0,
    autoplay: !0,
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: !1,
    pagination: {el: '.swiper-pagination', type: 'bullets', clickable: !0},
    breakpoints: {
        1024: {slidesPerView: 4, loop: !1, spaceBetween: 10},
        768: {slidesPerView: 3, loop: !0, spaceBetween: 20},
        640: {slidesPerView: 2, spaceBetween: 10},
        576: {slidesPerView: 1, spaceBetween: 10},
        375: {slidesPerView: 1, spaceBetween: 10},
        360: {slidesPerView: 1, spaceBetween: 10},
    },
    scrollbar: {el: '.swiper-scrollbar'},
})
$('.books_slides .row').slick({
    slidesToShow: 3,
    autoplay: !1,
    dots: !0,
    slidesToScroll: 3,
    adaptiveHeight: !0,
    arrows: !1,
    responsive: [
        {
            breakpoint: 1370,
            settings: {arrows: !1, slidesToShow: 3, slidesToScroll: 3},
        },
        {
            breakpoint: 999,
            settings: {arrows: !1, slidesToShow: 2, slidesToScroll: 2},
        },
        {
            breakpoint: 768,
            settings: {arrows: !1, slidesToShow: 2, slidesToScroll: 2},
        },
        {
            breakpoint: 450,
            settings: {arrows: !1, slidesToShow: 1, slidesToScroll: 1},
        },
    ],
}),
    $('.slides_bookplatform')
        .not('.slick-initialized')
        .slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 3e3,
            arrows: !1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {arrows: !1, slidesToShow: 3, slidesToScroll: 1},
                },
                {
                    breakpoint: 540,
                    settings: {arrows: !1, slidesToShow: 2, slidesToScroll: 1},
                },
            ],
        }),
    (function (e) {
        function t(t, s) {
            ;(function (t, s) {
                e.extend(
                    this,
                    (function (e, t) {
                        var s = i(e, t)
                        return {
                            digits: [
                                {currentValue: e % 10, nextValue: s[0]},
                                {currentValue: Math.floor(e / 10), nextValue: s[1]},
                            ],
                        }
                    })(t, s)
                )
            }).call(this, t, s),
                (this.render = function () {
                    return document
                        .createRange()
                        .createContextualFragment(
                            `\n        <div class="flip-digit">\n          <span class="flip-digit-next" data-digit="${this.digits[0].nextValue}"></span>\n          <span class="flip-digit-current" data-digit="${this.digits[0].currentValue}"></span>\n        </div>\n        <div class="flip-digit">\n          <span class="flip-digit-next" data-digit="${this.digits[1].nextValue}"></span>\n          <span class="flip-digit-current" data-digit="${this.digits[1].currentValue}"></span>\n        </div>\n      `
                        )
                })
        }

        function i(e, t) {
            var i = e - 1
            return e || (i = 'hours' === t ? 23 : 59), [i % 10, Math.floor(i / 10)]
        }

        function s(e) {
            return {digits: [e % 10, Math.floor(e / 10)]}
        }

        e(document).ready(function () {
            e('.flip-clock-container').each(function () {
                var n = (function (i) {
                    var s = {},
                        n = 0,
                        l = 0
                    return (
                        i.children().each(function () {
                            var i = e(this),
                                a = parseInt(i.text()),
                                o = (function (i, s) {
                                    return function (n) {
                                        var a = new t(s, n)
                                        i.html(a.render())
                                        for (var o = 0; o < 2; o++)
                                            e.extend(a.digits[o], {
                                                element: e(i.children()[o]),
                                                flipping: !1,
                                            })
                                        return l++, {parentElement: i, digits: a.digits}
                                    }
                                })(i, a)
                            i.hasClass('flip-item-seconds')
                                ? ((n += a), (s.seconds = o('seconds')))
                                : i.hasClass('flip-item-minutes')
                                    ? ((n += 60 * a), (s.minutes = o('minutes')))
                                    : i.hasClass('flip-item-hours')
                                        ? ((n += 60 * a * 60), (s.hours = o('hours')))
                                        : i.hasClass('flip-item-days') &&
                                        ((n += 24 * a * 60 * 60), (s.days = o('days')))
                        }),
                            i[0].style.setProperty('--item-count', l),
                            {flipElements: s, timestamp: n}
                    )
                })(e(this))
                !(function (e, t, n) {
                    var l = setInterval(function () {
                        if (
                            ((function (e, t, n) {
                                var l = {},
                                    a = {}
                                for (var o in ((l.seconds = t % 60),
                                    (l.minutes = Math.floor((t / 60) % 60)),
                                    (l.hours = Math.floor((t / 60 / 60) % 24)),
                                    (l.days = Math.floor(t / 60 / 60 / 24)),
                                    (a.seconds = s(l.seconds)),
                                    (a.minutes = s(l.minutes)),
                                    (a.hours = s(l.hours)),
                                    (a.days = s(l.days)),
                                    e))
                                    for (var r = 0; r < 2; r++)
                                        a[o].digits[r] != e[o].digits[r].currentValue &&
                                        ((e[o].digits[r].flipping = !0),
                                            e[o].digits[r].element.addClass('flipping'))
                                n.trigger('beforeFlipping', l),
                                    (function (e, t, s) {
                                        setTimeout(function () {
                                            for (var n in e)
                                                for (var l = 0; l < 2; l++)
                                                    if (e[n].digits[l].flipping) {
                                                        ;(e[n].digits[l].currentValue =
                                                            e[n].digits[l].nextValue),
                                                            e[n].digits[l].element
                                                                .children('.flip-digit-current')
                                                                .attr('data-digit', e[n].digits[l].currentValue)
                                                        for (
                                                            var a = i(
                                                                    10 * e[n].digits[1].nextValue +
                                                                    e[n].digits[0].nextValue,
                                                                    n
                                                                ),
                                                                o = l;
                                                            o < 2;
                                                            o++
                                                        )
                                                            e[n].digits[o].nextValue != a[o] &&
                                                            ((e[n].digits[o].nextValue = a[o]),
                                                                e[n].digits[o].element
                                                                    .children('.flip-digit-next')
                                                                    .attr('data-digit', e[n].digits[o].nextValue))
                                                            ;
                                                        (e[n].digits[l].flipping = !1),
                                                            e[n].digits[l].element.removeClass('flipping')
                                                    }
                                            s.trigger('afterFlipping', t)
                                        }, 900)
                                    })(e, l, n)
                            })(e, --t, n),
                                !t)
                        )
                            return n.trigger('done'), clearInterval(l)
                    }, 1e3)
                })(n.flipElements, n.timestamp, e(this))
            })
        })
    })(jQuery)
var swiper = new Swiper('.mySwiper-blog', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
})
$('#evoCalendar').evoCalendar({
    todayHighlight: !0,
    sidebarToggler: !0,
    eventListToggler: !0,
    canAddEvent: !1,
    onSelectDate: function () {
    },
    onAddEvent: function () {
        console.log('onAddEvent!')
    },
})
