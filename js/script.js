$(document).ready(function () {

    // on load set first element center
    var containerMargin = (window.innerHeight / 2) - ($('.wrapper:first').innerHeight() / 2)
    $('.main-wrapper').css('margin-top', containerMargin);
    $('.main-wrapper').css('margin-bottom', containerMargin);

    $('.buttonok').click(function () {
        var tabToScroll = $(this).closest('.wrapper');
        $(tabToScroll).removeClass('active')
        $(tabToScroll).next().addClass('active');
        $('html,body').animate({ scrollTop: ($(tabToScroll).offset().top - $(tabToScroll).innerHeight() / 2) }, 'slow');
    })


    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop() + 400;
        var tags = $('.wrapper');
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]

            if ($(tag).position().top <= pageTop) {
                $(tag).addClass("active")
                $(tag).siblings().removeClass("active")
            }
            else {
                $(tag).removeClass("active")
            }
        }
    })

    function nxt(el) {
        $(el).parent().siblings('.confirm-container').show();

    }

    $('input').keypress(function () {
        nxt($(this));
    })

    $('input').click(function () {
        nxt($(this));
    })
    $("input[type='radio']").change(function () {
        if ($(this).val() == "other") {
            $("#area").show();
        }
        else {
            $("#area").hide();
        }
    });

    $('input').click(function () {
        $(this).parent().parent().siblings('.confirm-container').show();
    })

    $('select').click(function () {
        nxt($(this));
    })

});