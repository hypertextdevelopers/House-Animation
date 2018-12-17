window.addEventListener('load', function(){

    var con = document.getElementById('container');
    con.style.height = window.innerHeight + 'px';
    con.style.marginTop = -(window.innerHeight/2) + 'px';

    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    var img7 = document.getElementById('img7');
    var img8 = document.getElementById('img8');
    var img9 = document.getElementById('img9');
    var img10 = document.getElementById('img10');
    var img11 = document.getElementById('img11');
    var img12 = document.getElementById('img12');
    var img13 = document.getElementById('img13');
    var img14 = document.getElementById('img14');
    var img15 = document.getElementById('img15');
    var img16 = document.getElementById('img16');
    var img17 = document.getElementById('img17');
    var img18 = document.getElementById('img18');
    var img19 = document.getElementById('img19');
    var img20 = document.getElementById('img20');
    var img21 = document.getElementById('img21');
    var img22 = document.getElementById('img22');
    var img23 = document.getElementById('img23');
    var img24 = document.getElementById('img24');
    var img25 = document.getElementById('img25');
    var img26 = document.getElementById('img26');
    var img27 = document.getElementById('img27');
    var img28 = document.getElementById('img28');
    var img29 = document.getElementById('img29');
    var img30 = document.getElementById('img30');
    var img31 = document.getElementById('img31');
    var img32 = document.getElementById('img32');
    var img33 = document.getElementById('img33');
    var img34 = document.getElementById('img34');
    var img35 = document.getElementById('img35');


    var house = document.getElementById('fallen-house');
    var logo = document.getElementById('logo');
    var container_bottom = document.getElementById('container-bottom');
    var w1 = document.getElementById('w1');
    var w2 = document.getElementById('w2');
    var w3 = document.getElementById('w3');
    var w4 = document.getElementById('w4');
    var w5 = document.getElementById('w5');

    var starTime = 5;

    var interval_img = setInterval(function(){

        if(starTime <= 0){

            img_1();
            img_2();
            img_3();
            img_4();
            img_5();
            img_6();
            img_7();
            img_8();
            img_9();
            img_10();
            img_11();
            img_12();
            img_13();
            img_14();
            img_15();
            img_16();
            img_17();
            img_18();
            img_19();
            img_20();
            img_21();
            img_22();
            img_23();
            img_24();
            img_25();
            img_26();
            img_27();
            img_28();
            img_29();
            img_30();
            img_31();
            img_32();
            img_33();
            img_34();
            img_35();

            clearInterval(interval_img);

        }else{

            starTime--;

        }

    }, 100);

    var full = 55;

    var final_interval = window.setInterval(function(){

        if(full <= 5){

            house.style.opacity = 0;
            house.style.zIndex = 1;
            house.style.visibility = 'hidden';

            logo.style.opacity = 1;
            logo.style.visibility = 'visible';
            logo.style.zIndex = 2;
            
        }

        if(full <= 0){

            container_bottom.style.opacity = 1;
            clearInterval(final_interval);

        }else{

            full--;
        
        }

    },100);


    var q1 = 110;

    var timer1 = window.setInterval(function(){

        if(q1 <= 52){
            w1.style.opacity = 1;
            clearInterval(timer1);
        }else q1--;

    },100);

    var q2 = 110;

    var timer2 = window.setInterval(function(){

        if(q2 <= 49){
            w2.style.opacity = 1;
            clearInterval(timer2);
        }else q2--;

    },100);

    var q3 = 110;

    var timer3 = window.setInterval(function(){

        if(q3 <= 46){
            w3.style.opacity = 1;
            clearInterval(timer3);
        }else q3--;

    },100);

    var q4 = 110;

    var timer4 = window.setInterval(function(){

        if(q4 <= 43){
            w4.style.opacity = 1;
            clearInterval(timer4);
        }else q4--;

    },100);

    var q5 = 110;

    var timer5 = window.setInterval(function(){

        if(q5 <= 40){
            w5.style.opacity = 1;
            clearInterval(timer5);
        }else q5--;

    },100);
    


    function img_1(){

        img2.style.transform = 'translateY(308px)';

    }

    //-------------------------------------------

    function img_2(){

        let s = 1;

        window.setInterval(function(){

            if(s <= 0){

                img1.style.transform = 'translateY(469px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_3(){

        let s = 2;

        window.setInterval(function(){

            if(s <= 0){

                img3.style.transform = 'translateY(470px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_4(){

        let s = 3;

        window.setInterval(function(){

            if(s <= 0){

                img4.style.transform = 'translateY(487px)';

            }else{

                s--;

            }

        }, 100);

    }

     //-------------------------------------------

     function img_5(){

        let s = 4;

        window.setInterval(function(){

            if(s <= 0){

                img7.style.transform = 'translateY(314px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_6(){

        let s = 5;

        window.setInterval(function(){

            if(s <= 0){

                img9.style.transform = 'translateY(426px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_7(){

        let s = 6;

        window.setInterval(function(){

            if(s <= 0){

                img10.style.transform = 'translateY(396px)';
               

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_8(){

        let s = 7;

        window.setInterval(function(){

            if(s <= 0){

                img11.style.transform = 'translateY(369px)';
                

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_9(){

        let s = 8;

        window.setInterval(function(){

            if(s <= 0){

                img12.style.transform = 'translateY(344px)';

            }else{

                s--;

            }

        }, 100);

    }

     //-------------------------------------------

     function img_10(){

        let s = 9;

        window.setInterval(function(){

            if(s <= 0){

                img8.style.transform = 'translateY(320px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_11(){

        let s = 10;

        window.setInterval(function(){

            if(s <= 0){

                img6.style.transform = 'translateY(326px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_12(){

        let s = 11;

        window.setInterval(function(){

            if(s <= 0){

                img31.style.transform = 'translateY(328px)';
               

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_13(){

        let s = 12;

        window.setInterval(function(){

            if(s <= 0){

                img29.style.transform = 'translateY(307px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_14(){

        let s = 13;

        window.setInterval(function(){

            if(s <= 0){

                img33.style.transform = 'translateY(332px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_15(){

        let s = 14;

        window.setInterval(function(){

            if(s <= 0){

                img34.style.transform = 'translateY(353px)';
                

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_16(){

        let s = 15;

        window.setInterval(function(){

            if(s <= 0){

                img23.style.transform = 'translateY(318px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_17(){

        let s = 16;

        window.setInterval(function(){

            if(s <= 0){

                img35.style.transform = 'translateY(331px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_18(){

        let s = 17;

        window.setInterval(function(){

            if(s <= 0){

                img32.style.transform = 'translateY(298px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_19(){

        let s = 18;

        window.setInterval(function(){

            if(s <= 0){

                img30.style.transform = 'translateY(308px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_20(){

        let s = 19;

        window.setInterval(function(){

            if(s <= 0){

                img5.style.transform = 'translateY(286px)';
                
            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_21(){

        let s = 20;

        window.setInterval(function(){

            if(s <= 0){

                img24.style.transform = 'translateY(273px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_22(){

        let s = 21;

        window.setInterval(function(){

            if(s <= 0){

                img26.style.transform = 'translateY(177px)';
                

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_23(){

        let s = 22;

        window.setInterval(function(){

            if(s <= 0){

                img27.style.transform = 'translateY(151px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_24(){

        let s = 23;

        window.setInterval(function(){

            if(s <= 0){

                img25.style.transform = 'translateY(178px)';
               

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_25(){

        let s = 24;

        window.setInterval(function(){

            if(s <= 0){

                img13.style.transform = 'translateY(261px)';
              

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_26(){

        let s = 25;

        window.setInterval(function(){

            if(s <= 0){

                img14.style.transform = 'translateY(228px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_27(){

        let s = 26;

        window.setInterval(function(){

            if(s <= 0){

                img15.style.transform = 'translateY(248px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_28(){

        let s = 27;

        window.setInterval(function(){

            if(s <= 0){

                img16.style.transform = 'translateY(234px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_29(){

        let s = 28;

        window.setInterval(function(){

            if(s <= 0){

                img17.style.transform = 'translateY(235px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_30(){

        let s = 29;

        window.setInterval(function(){

            if(s <= 0){

                img20.style.transform = 'translateY(257px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_31(){

        let s = 30;

        window.setInterval(function(){

            if(s <= 0){

                img19.style.transform = 'translateY(235px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_32(){

        let s = 31;

        window.setInterval(function(){

            if(s <= 0){

                img18.style.transform = 'translateY(224px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_33(){

        let s = 32;

        window.setInterval(function(){

            if(s <= 0){

                img21.style.transform = 'translateY(226px)';

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_34(){

        let s = 33;

        window.setInterval(function(){

            if(s <= 0){

                img22.style.transform = 'translateY(53px)';
               

            }else{

                s--;

            }

        }, 100);

    }

    //-------------------------------------------

    function img_35(){

        let s = 34;

        window.setInterval(function(){

            if(s <= 0){

                img28.style.transform = 'translateY(53px)';
                

            }else{

                s--;

            }

        }, 100);

    }

}, false);