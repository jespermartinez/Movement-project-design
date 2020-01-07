

        var big_slides = document.querySelector(".top_left_img").children;
        var small_slides = document.querySelector(".bottom_left_img").children;
        var dot = document.querySelector(".bottom_left_dot").children;


        var dot_1 = document.getElementById("dot_1");
        var dot_2 = document.getElementById("dot_2");
        var dot_3 = document.getElementById("dot_3");


        dot_1.onclick = function(){

            var val="0"; 
            click_function(val);
            // alert("pasok 1");
        }

        dot_2.onclick = function(){

            var val="1"; 
            click_function(val);
            // alert("pasok 2");
        }

        dot_3.onclick = function(){

            var val="2"; 
            click_function(val);
            // alert("pasok 3");
        }

        function click_function($val){
            
            for(var x=0;x<small_slides.length;x++){
                small_slides[x].classList.remove("active");
                dot[x].classList.remove("active");
                big_slides[x].classList.remove("active");
            }
       
            small_slides[$val].classList.add("active");
            dot[$val].classList.add("active");
            big_slides[$val].classList.add("active");

        }


        var val=0;

        setInterval(function(){

            if(val == 0){
                click_function(val);
                val = 1;
            }else if(val == 1){
                click_function(val);
                val = 2;
            }else if(val == 2){
                click_function(val);
                val = 0;
            }

        }, 2000);




        AOS.init({
            offset:300
        });

