//  The script for our-services-list start
$('.tabs-title').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.img-service[data-tab="' + id + '"]');
    $('.tabs-title.active').removeClass('active');
    $(this).addClass('active');
    $('.img-service.active').removeClass('active');
    content.addClass('active');
});
//  Script for our-services-list end

//  Script for Our Amazing Work start
let tab ='';
function filterTab(event){
    if(tab!= event){
        $('.sort').filter('.'+ event).slideDown();
        $('.sort').filter(':not(.'+ event +')').slideUp();
        tab = event;}
}
$('.graphic-d').click(function(){filterTab('graphic');});
$('.web').click(function(){filterTab('web');});
$('.Landing').click(function(){filterTab('landing');});
$('.wordpress').click(function(){filterTab('wordpress');});
$('.all').click(function(){$('.sort').slideDown();
tab = 'sort';});

//  Script for Our Amazing Work End

//  Script for Our Amazing Work start button
let counter = 0;
$('#but1').on('click',function(){
    counter++;
    if (counter === 1){
        $('#but1').css('visibility','hidden');
        $('.loader').css('display','block');

        setTimeout(function(){
            $('.gallery-container').css('maxHeight','1200px');
            $('#but1').css('visibility','visible');
            $('.loader').css('display','none')
        },1000)
    } else{
        $('#but1').css('visibility','hidden');
        $('.loader').css('display','block');

        setTimeout(function(){
            $('.gallery-container').css('maxHeight','1800px');
            $('#but1').css('display','none');
            $('.loader').css('display','none')
        },1000)
    }
});
function filter(){
    function filterTarget(target){
        let fActive='all';
        if(counter == 0 && fActive!=target){
            $('.sort').hide().filter(':not(.'+target+')');
            $('.sort:lt(12)').filter('.'+target).fadeIn();
            fActive=target;
        }
    }
    $('.our-amazing-work div').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.graphic-d').click(function(){
        filterTarget('graphic');
        $('#but1').css('display','none');
        $('.gallery-container').css('overflow','hidden')
    });
    $('.web').click(function(){
        filterTarget('web');
        $('#but1').css('display','none')
    });
    $('.Landing').click(function(){
        filterTarget('landing');
        $('#but1').css('display','none')
    });
    $('.wordpress').click(function(){
        filterTarget('wordpress');
        $('#but1').css('display','none')
    });
    $('.all').click(function(){
        if(counter != 2){
            $('#but1').css('display','block')
        }
        filterTarget('all');
        $('.sort').fadeIn(400);
        fActive='all';
    });
}
filter();
//  Script for Our Amazing Work button end

//  KARUSEL START
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel-container'
});
$('.carousel-container').slick({
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect:true,
    asNavFor: '.slider-for',
    prevArrow: '<button class="prev-but"> < </button>',
    nextArrow:'<button class="next-but"> > </button>',
    variableWidth: true,
    draggable:false,
    cssEase: 'linear',
    speed: 550
});
//  KARUSEL END