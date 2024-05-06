jQuery(document).ready(function(){


    //https://eunne.tistory.com/103
    //header의 스크롤링 좌표를 알아낸 후 배경유무를 만드는 것.
    const navbar = document.querySelector("header"); //from HTML
    const navbarHeight = navbar.getBoundingClientRect().height; //클라이언트의 값을 받아내는데, 높이 값을 추출한다.
    
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY; //사용자가 수직으로 스크롤한 값을 받는다.
    
      //navbar의 높이가 현재까지 스크롤 된 Y값보다 작다면 navbar에 fixed라는 클래스를 넣어라.
      //1) 삼항연산자 사용
      navbarHeight < scrollY ? navbar.classList.add("fixed") : navbar.classList.remove("fixed");
      
      //2) if문 사용
      //if (window.scrollY > navbarHeight) {
        //navbar.classList.add("fixed");
      //} else {
        //navbar.classList.remove("fixed");
      //}
    });
    
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


   /*
    $('.menu0').click(function(){
        $('.menu0').addClass('active');
        $('.menu1').removeClass('active');
        $('.menu2').removeClass('active');
        $('.menu4').removeClass('active');
    });
    $('.menu1').click(function(){
        $('.menu0').removeClass('active');
        $('.menu1').addClass('active');
        $('.menu2').removeClass('active');
        $('.menu4').removeClass('active');
    });
    $('.menu2').click(function(){
        $('.menu0').removeClass('active');
        $('.menu1').removeClass('active');
        $('.menu2').addClass('active');
        $('.menu4').removeClass('active');
    });
    $('.menu4').click(function(){
        $('.menu0').removeClass('active');
        $('.menu1').removeClass('active');
        $('.menu2').removeClass('active');
        $('.menu4').addClass('active');
    });
    */
    
    
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