var _layout = $.extend({


    showtabs: function showtabs() {

        $("#tabSelector").removeClass("displayNone");
        $("#tabs").removeClass("displayNone");
    },
    hidetabs: function hidetabs() {

        $("#tabSelector").addClass("displayNone");
        $("#tabs").addClass("displayNone");
    },
    accordian: function accordian() {
        $("#accordion").accordion();

    },
    desktopButtonClicks: function desktopButtonClicks() {
        $("#btnMenu1").click(function () {
            $("#id1").attr("value", "Menu1 1");
            $("#id2").attr("value", "Menu1 2");
            $("#id3").attr("value", "Menu1 3");
            $("#id4").attr("value", "Menu1 4");
            $("#id5").attr("value", "Blank Space");
        });
        $("#btnMenu2").click(function () {
            $("#id1").attr("value", "Menu2 1");
            $("#id2").attr("value", "Menu2 2");
            $("#id3").attr("value", "Menu2 3");
            $("#id4").attr("value", "Menu2 4");
            $("#id5").attr("value", "Blank Space");
        });
        $("#btnMenu3").click(function () {
            $("#id1").attr("value", "Menu3 1");
            $("#id2").attr("value", "Menu3 2");
            $("#id3").attr("value", "Menu3 3");
            $("#id4").attr("value", "Menu3 4");
            $("#id5").attr("value", "Blank Space");

        });
        $("#btnMenu4").click(function () {
            $("#id1").attr("value", "Menu4 1");
            $("#id2").attr("value", "Menu4 2");
            $("#id3").attr("value", "Menu4 3");
            $("#id4").attr("value", "Menu4 4");
            $("#id5").attr("value", "Blank Space");

        });
        $("#btnMenu5").click(function () {
            $("#id1").attr("value", "Menu5 1");
            $("#id2").attr("value", "Menu5 2");
            $("#id3").attr("value", "Menu5 3");
            $("#id4").attr("value", "Menu5 4");
            $("#id5").attr("value", "Blank Space");

        });
    },
    buttonClicks: function buttonClicks() {
        $("#btnMenu1").click(function () {

            $("#mobilesubMenuHeader").attr("value", "Menu 1");

            $("#subMenuBtn1").attr("value", "Menu1 1");
            $("#subMenuBtn2").attr("value", "Menu1 2");
            $("#subMenuBtn3").attr("value", "Menu1 3");
            $("#subMenuBtn4").attr("value", "Menu1 4");
            $("#subMenuBtn5").attr("value", "Menu1 5");


        });
        $("#btnMenu2").click(function () {

            $("#mobilesubMenuHeader").attr("value", "Menu 2");

            $("#subMenuBtn1").attr("value", "Menu2 1");
            $("#subMenuBtn2").attr("value", "Menu2 2");
            $("#subMenuBtn3").attr("value", "Menu2 3");
            $("#subMenuBtn4").attr("value", "Menu2 4");
            $("#subMenuBtn5").attr("value", "Menu2 5");


        });
        $("#btnMenu3").click(function () {

            $("#mobilesubMenuHeader").attr("value", "Menu 3");

            $("#subMenuBtn1").attr("value", "Menu3 1");
            $("#subMenuBtn2").attr("value", "Menu3 2");
            $("#subMenuBtn3").attr("value", "Menu3 3");
            $("#subMenuBtn4").attr("value", "Menu3 4");
            $("#subMenuBtn5").attr("value", "Menu3 5");

        });
        $("#btnMenu4").click(function () {

            $("#mobilesubMenuHeader").attr("value", "Menu 4");

            $("#subMenuBtn1").attr("value", "Menu4 1");
            $("#subMenuBtn2").attr("value", "Menu4 2");
            $("#subMenuBtn3").attr("value", "Menu4 3");
            $("#subMenuBtn4").attr("value", "Menu4 4");
            $("#subMenuBtn5").attr("value", "Menu4 5");


        });
        $("#btnMenu5").click(function () {

            $("#mobilesubMenuHeader").attr("value", "Menu 5");

            $("#subMenuBtn1").attr("value", "Menu5 1");
            $("#subMenuBtn2").attr("value", "Menu5 2");
            $("#subMenuBtn3").attr("value", "Menu5 3");
            $("#subMenuBtn4").attr("value", "Menu5 4");
            $("#subMenuBtn5").attr("value", "Menu5 5");


        });
    }

});

$(window).load(function () {
    "use strict";

    $(window).resize();
    $('#mobileMenuHeader').addClass('SlideClass');
    $('#mobilesubMenuHeader').addClass('SubMenuSlideClass');
    $("#menuBar").addClass("displayNone");
    $(".SlideClass").unbind().bind().click(function () {

        $("#menuBar").removeClass("displayNone");
        $("#menuBar").slideToggle('slow');
        $('#menuBar').css("left", "-10px");
        $('#menuBar').css("top", "116px");
    });

    $(".SubMenuSlideClass").unbind().bind().click(function () {

        $("#SubmenuBar").removeClass("displayNone");
        $("#SubmenuBar").slideToggle('slow');
        $('#SubmenuBar').css("left", "0%");
        $('#SubmenuBar').css("top", "116px");
        $('#SubmenuBar').css("margin-right", "2%");

    });

    $('body').click(function (e) {
        // alert('jhj');

        var className = $(e)[0].target.attributes.class.nodeValue;
        var idName = $(e)[0].target.attributes.id.nodeValue;
        //alert(className);
        if ($(window).width() < 639) {
            if (idName === "mobileMenuHeader") {
                $('#SubmenuBar').css("display", "none");
//                if ($('#menuBar').css('display') === 'none') {
//                    $('#menuBar').css("display", "block");
//                }
            }
            else if (idName === "mobilesubMenuHeader") {
                $('#menuBar').css("display", "none");
            }
           else  if (className.indexOf('SlideClass') > 0) {
                e.preventDefault();
            }
            else {
                $("#menuBar").css("display", "none");
                $("#SubmenuBar").css("display", "none");
            }
        }

        //        if (className.indexOf('SlideClass') < 0 && className.indexOf('imgStatus') < 0) {

        //        }

    });

    if ($(window).width() < 639) {

        _layout.accordian();
        _layout.hidetabs();
        _layout.buttonClicks();

        $('#menuBar').css("top", "108px");
        $('#SubmenuBar').css("top", "108px");
        $("#mobileSubMenuHeader").css("background-color", "#ffaec9");




    }
    else {
        _layout.desktopButtonClicks();
        $('input:button').click(function () {
            if ($(this).val() === 'Tab 1') {
                $(this).css("background-color", "#dd9cb1");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());

            } else if ($(this).val() === 'Tab 2') {
                $("#btn1").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 3') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 4') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 5') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 6') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#tabs").html("selected " + $(this).val());
            }

        });
    }
});


$(window).resize(function () {
    "use strict";

//    if ($(window).width() < 394) {
//        _layout.hidetabs();
//        $("#menuBar").css("display", "none");
//        $("#SubmenuBar").css("display", "none");
//        $('#menuBar').css("top", "108px");
//        $('#SubmenuBar').css("top", "108px");
//    }

//    else
     if ($(window).width() < 639) {

        $('#mobileMenuHeader').addClass('SlideClass').removeClass('SlideClass');
        $('#mobilesubMenuHeader').addClass('SubMenuSlideClass').removeClass('SubMenuSlideClass');
        $("#menuBar").css("display", "none");
        $("#SubmenuBar").css("display", "none");
        _layout.accordian();

        _layout.hidetabs();
        _layout.buttonClicks();

        $("#mobileSubMenuHeader").css("background-color", "#ffaec9");
        $("#menuBar").addClass("displayNone");
        $(".SlideClass").unbind().bind().click(function () {

            $("#menuBar").removeClass("displayNone");
            $("#menuBar").slideToggle('slow');
            $('#menuBar').css("left", "-10px");
            $('#menuBar').css("top", "116px");
        });

        $(".SubMenuSlideClass").unbind().bind().click(function () {

            $("#SubmenuBar").removeClass("displayNone"); //.addClass("displayBlock");
            $("#SubmenuBar").slideToggle('slow');
            $('#SubmenuBar').css("left", "0%");
            $('#SubmenuBar').css("top", "116px");
            $('#SubmenuBar').css("margin-right", "2%");

        });

        //        _layout.hidetabs();
        //        _layout.accordian();
        //        _layout.buttonClicks();

    } else {

        $("#menuBar").css('display', 'block');

        $('#mobileMenuHeader').removeClass('SlideClass').addClass('SlideClass');
        $('#mobilesubMenuHeader').removeClass('SubMenuSlideClass').addClass('SubMenuSlideClass');
        _layout.showtabs();
        _layout.desktopButtonClicks();
        _layout.desktopButtonClicks();
        $('input:button').click(function () {
            if ($(this).val() === 'Tab 1') {
                $(this).css("background-color", "#dd9cb1");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());

            } else if ($(this).val() === 'Tab 2') {
                $("#btn1").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 3') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 4') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn5").css("background-color", "#e17a34");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 5') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#btn6").css("background-color", "#e17a34");
                $("#tabs").html("selected " + $(this).val());
            }
            else if ($(this).val() === 'Tab 6') {
                $("#btn1").css("background-color", "#e17a34");
                $("#btn2").css("background-color", "#e17a34");
                $("#btn3").css("background-color", "#e17a34");
                $("#btn4").css("background-color", "#e17a34");
                $("#btn5").css("background-color", "#e17a34");
                $(this).css("background-color", "#dd9cb1");
                $("#tabs").html("selected " + $(this).val());
            }

        });
    }


});