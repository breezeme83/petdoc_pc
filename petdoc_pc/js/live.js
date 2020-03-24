$(document).ready(function () {
    //form_condition_01_weight.html
    if ($('.weight-input').length > 0) {
        var inputElement = document.getElementById('weight-input');
        var suffixElement = document.getElementById('weight-suffix');

        inputElement.addEventListener('input', updateSuffix);
        updateSuffix();
        function updateSuffix() {
            var textWidth = getTextWidth(inputElement.value, '15px Roboto');
            console.log(textWidth);
            textWidth == 0 ? suffixElement.style.color = "#bcc1c8" : suffixElement.style.color = "#4e5263";
            suffixElement.style.left = textWidth + 'px';
        }

        function getTextWidth(text, font) {
            var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        }
    }
    //dropkick
    //form_register_04_age.html
    //form_condition_08_pregnancy.html
    if ($('.custom-select').length > 0) {
        $('.custom-select').dropkick();
    }
    //active toggle list
    //form_register_02_animaltype.html
    //form_register_06_vaccination.html
    $(function () {
        $('.activeToggle li').click(function () {
            $('.activeToggle li').removeClass('active');
            $(this).addClass('active');
            $('#value-hidden').val($(this).text()).trigger('change');
        });
    })
    //form_condition_06_feed.html
    //form_edit_condition_06_feed.html
    $(function () {
        $('.toggle-trigger-e').change(function () {
            var triggerIndex = $(this).attr('data-toggle-index');
            var visibleBlock = $(this).parents('.wrap-radio-label').siblings('.toggle-block').eq(triggerIndex);
            $(this).prop('checked') ? visibleBlock.show() : visibleBlock.hide();
        });
    });
    //toggleblock
    //form_register_04_age.html
    //edit_petinfo.html
    //form_condition_08_pregnancy.html
    //form_register_04_age.html
    $('input.toggle-trigger').change(function () {
        var triggerIndex = $(this).attr('data-toggle-index');
        console.log(triggerIndex);
        if (triggerIndex !== 'no-block') {
            $(this).parents('.wrap-radio-label').siblings('.toggle-block').removeClass('active').eq(triggerIndex).addClass('active');
        } else {
            $(this).parents('.wrap-radio-label').siblings('.toggle-block').removeClass('active');
        }
    });
    //secession.html
    $('input.toggle-detail').change(function () {
        var index = $(this).data("toggle-index");
        var checked = $(this).is(":checked");

        if(checked) {
            $('.service-detail-block').show();
            $('.detail-list').eq(index).addClass('active');
        } else {
            $('.detail-list').eq(index).removeClass('active');
            var isUncheckedAll = $('input.toggle-detail:checked').length == 0;
            if(isUncheckedAll) {
                $('.service-detail-block').hide();
            }
        }
    });
    //secession.html
    //entrance.html
    //center
    var contentHeight = $(window).height() - $('.header').height();
    $('.center-column').css('height', contentHeight);
    //form_condition_02_bodytype.html
    //form_edit_condition_02_bodytype.html
    $('.wrap-radio-label.list-type li').on('click', function (e) {
        $('.wrap-radio-label.list-type li').removeClass('on');
        $(this).addClass('on');
    });
    //form_condition_03_exercise.html
    //form_edit_condition_03_exercise.html
    //exerciseHours_form
    function countHours(hour) {
        currentNumber = parseInt($('.input-exercise-block .input-exercise').val()) + hour;
        if (isNaN(currentNumber)) {
            currentNumber = 0;
        }
        else if (currentNumber < 0) {
            return;
        }
        if (currentNumber <= 0) {
            $('.subtract-numbers').removeClass('active');
        } else {
            $('.subtract-numbers').addClass('active');
        }

        $('.input-exercise-block .input-exercise').val(currentNumber);
    }
    $('.add-numbers').on('click', function (e) {
        countHours(1);
        e.preventDefault();
    });
    $('.subtract-numbers').on('click', function (e) {
        countHours(-1);
        e.preventDefault();
    });
    //real-time-loading.html
    $('#percent').on('change', function () {
        //서버전송량
        var val = parseInt($(this).val());

        var $circle = $('svg.loading .loading-bar ');
        if (isNaN(val)) {
            val = 1;
        }
        else {
            var r = $circle.attr('r');
            var c = Math.PI * (r * 2);
            if (val < 0) { val = 0; }
            if (val > 100) { val = 100; }
            var pct = ((100 - val) / 100) * c;
            $circle.css({ strokeDashoffset: pct });
        }
    });
    //edit_myinfo.html
    //edit_petinfo.html
    //result.html
    //secession.html
    //팝업화면중앙
    $('.trigger-pop-center').click(function () {
        $('.pop-center').each(function () {
            var caculatedTop = ($(window).height() - $(this).height()) / 2;
            var caculatedleft = ($(window).width() - $(this).width()) / 2;
            $(this).css({ 'top': caculatedTop, 'left': caculatedleft });
        });
    });
    //edit_myinfo.html
    //탭 라디오
    if($('.wrap-tab-label input[name="term"]').length > 0){
        var tabIndex= $('input[name="term"]:checked').attr('data-toggle-index')-1;
        $('.wrap-tab-label li').eq(tabIndex).addClass('no-line');
        $('.wrap-tab-label input[name="term"]').on('change', function () {
            var selectIndex = ($(this).attr('data-toggle-index')) - 1;
            $('.wrap-tab-label li').removeClass('no-line');
            $(this).parents('.wrap-tab-label').find('li').eq(selectIndex).addClass('no-line');
        });
    }
    //result.html
    //동물생애주기&체중분석플러그인
    if ($('#cycle_age').length > 0) {
        var petMonth = 120;
        $('#cycle_age').petCycle({
            petCurrent: petMonth,
            levels: [{ name: '성장기', min: 0, max: 11 }, { name: '성년기', min: 12, max: 95 }, { name: '노년기', min: 96, max: 150 }],
            title: '<span class="txt-roboto">'+parseInt((petMonth / 12)) +'</span>'+ '세 ' + '<span class="txt-roboto">' + (petMonth % 12) +'</span>'+ '개월'
        });
        $('#cycle_weight').petCycle({
            petCurrent: 8.8,
            levels: [{ name: '외소', min: 0, max: 7 }, { name: '표준', min: 7.1, max: 9 }, { name: '비만', min: 10, max: 30 }],
            title: '<span class="txt-roboto">'+ '8.8kg'+'</span>'
        });
    }
    //result.html
    //탭과탭내슬라이드플러그인
    var currentTab = 1;
    var swiper;
    var summaryBlockHeight = $('.summary-block').outerHeight() + $('.top-block').outerHeight();
    var topOtherTap = summaryBlockHeight;
    $('.result-tab a').on('click', function (event) {
        var selectedTab = parseInt($(this).attr('data-toggle-index'));
        $('.result-tab a').removeClass('active');
        $(this).addClass('active');

        showBlock(selectedTab);

        if (selectedTab === 2 && $('.swiper-container').length > 0) {
            swiper = new Swiper('.swiper-container', {
                effect: 'fade',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',

                },
            });
        } else if (swiper) {
            swiper.destroy();
        }
        currentTab = selectedTab;
        event.preventDefault();

    });

    function showBlock(e) {
        $('.toggle').addClass('hidden').eq(parseInt(e - 1)).removeClass('hidden');
        if ($(".swiper-slide").length === 1) {
            $(".swiper-pagination").css("display", "none");
        }
    }
});

//캘린더/////////////////////////////////////////////////////////
//point.html
$(function(){
    if(window.Pikaday === undefined) {
        return;
    }    
    function addDays(date, days) {
        var d = new Date(date.valueOf());
        d.setDate(d.getDate() + days);
        return d;
    }
    var pickadayConfig = {
        toString: function(date) {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return year + (month < 10 ? '.0' : '.') + month + (day < 10 ? '.0' : '.') + day;
        },
        i18n: {
            previousMonth : '',
            nextMonth     : '',
            months        : ['1','2','3','4','5','6','7','8','9','10','11','12'],
            weekdays      : ['일','월','화','수','목','금','토'],
            weekdaysShort : ['일','월','화','수','목','금','토']
        },
        yearSuffix: '.',
        setDefaultDate: true,
        position: 'bottom center',
        showMonthAfterYear: true
    };
    $('#sdate').text(pickadayConfig.toString(addDays(new Date(), -30)));
    $('#edate').text(pickadayConfig.toString(new Date(), -30));
    var sDatePicker = new Pikaday($.extend(
        {
            field: $('#sdate')[0],
            defaultDate: addDays(new Date(), -30),
            onSelect: function(date) {
                $('#sdate').text(pickadayConfig.toString(date));
                console.log('start date selected', date);

            }
        }, 
        pickadayConfig
    ));
    var eDatePicker = new Pikaday($.extend(
        {
            field: $('#edate')[0],
            defaultDate: new Date(),
            onSelect: function(date) {
                $('#edate').text(pickadayConfig.toString(date));
                console.log('end date selected', date);
            }
        }, 
        pickadayConfig
    ));
});

