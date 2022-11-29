   
   $(function(){
        $('#couBtn').click(function(){
            alert("회원전용 쿠폰입니다.\n회원가입 화면으로 이동합니다.")
        });

        $('#mini1').click(function(){
            $('#mini1_1').show();
            $('#mini1 > div').show();
            $('#mini2_2').hide();
            $('#mini2 > div').hide();
            $('#mini3_3').hide();
            $('#mini3 > div').hide();
            $('#mini4_4').hide();
            $('#mini4 > div').hide();
        });

        $('#mini2').click(function(){
            $('#mini2_2').show();
            $('#mini2 > div').show();
            $('#mini1_1').hide();
            $('#mini1 > div').hide();
            $('#mini3_3').hide();
            $('#mini3 > div').hide();
            $('#mini4_4').hide();
            $('#mini4 > div').hide();
        });

        $('#mini3').click(function(){
            $('#mini3_3').show();
            $('#mini3 > div').show();
            $('#mini1_1').hide();
            $('#mini1 > div').hide();
            $('#mini2_2').hide();
            $('#mini2 > div').hide();
            $('#mini4_4').hide();
            $('#mini4 > div').hide();
        });

        $('#mini4').click(function(){
            $('#mini4_4').show();
            $('#mini4 > div').show();
            $('#mini1_1').hide();
            $('#mini1 > div').hide();
            $('#mini2_2').hide();
            $('#mini2 > div').hide();
            $('#mini3_3').hide();
            $('#mini3 > div').hide();
        });
        
    });
