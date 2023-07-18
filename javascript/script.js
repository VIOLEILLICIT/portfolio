jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $('.submenu').stop().slideUp(500);
    });

    var count = 1;
    $('.img2').hide();
    $('.img3').hide();

    setInterval(function(){
        if (count == 1) {
            $('.img1').animate({marginLeft:"-1200px"});
            $('.img2').css({marginLeft:"1200px"});
            $('.img2').show();
            $('.img2').animate({marginLeft:"0px"});
            count = 2;
        }
        else if (count == 2) {
            $('.img2').animate({marginLeft:"-1200px"});
            $('.img3').css({marginLeft:"1200px"});
            $('.img3').show();
            $('.img3').animate({marginLeft:"0px"});
            count = 3;
        }
        else if (count == 3) {
            $('.img3').animate({marginLeft:"-1200px"});
            $('.img1').css({marginLeft:"1200px"});
            $('.img1').show();
            $('.img1').animate({marginLeft:"0px"});
            count = 1;
        }
        
    },3000);

    $('.ntab').click(function(){
        $('.ntab').addClass('active');
        $('.gtab').removeClass('active');
        $('.notice').addClass('active');
        $('.gallery').removeClass('active');
    });

    $('.gtab').click(function(){
        $('.gtab').addClass('active');
        $('.ntab').removeClass('active');
        $('.gallery').addClass('active');
        $('.notice').removeClass('active');
    });

    $('.notice li:first').click(function(){
        $('.layer').show();
    })
    $('.btn').click(function(){
        $('.layer').hide();
    })
});