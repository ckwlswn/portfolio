$(function(){


    // 탭 버튼 이벤트
    $('#works nav a').on('click', function(){
      // 카테고리명(hash값) 확인
      var cat_name = $(this).attr('href');
      console.log(cat_name)
      
      // 해당 아이디의 목록을 표시
      if(cat_name !== '#work_list_all'){
        // 일반 카테고리
        $('#work_list_all > ul').hide(200);
        $(cat_name).show(200);
      } else {
        // all 버튼을 누른 경우
        $('#work_list_all > ul').show(200);
      }

      return false; // 하이퍼링크 기본이벤트 금지

    })

    // 내부링크(#)시 부드러운 스크롤 이동
    $("#navbar-content > ul > li a").on('click', function(event){

      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 600, function(){

              window.location.hash = hash;
          });
      } // End if
    });

    
      // 능력치 그래프 
	var yoffset = 200;	// 스크로 보정값
	var about_top = $('#skill').offset().top - yoffset;
	var header_height = parseInt($('#main_header').css('height'));
	console.log(header_height);

	$(window).on('scroll', function(){
		var win_scroll_top = $(window).scrollTop();
		var point = [90, 70, 60, 60, 30];
		
		// #skill 섹션에 도달하면 그래프 애니메이션 시작
		if(win_scroll_top >= about_top){
			for(var i = 0; i < 6; i++){
				$('#skill .skill_list span')
					.eq(i)
					.animate({width: point[i]+'%'});
			}	
		}
		console.log(win_scroll_top);
		if(win_scroll_top >= header_height){
			$('#navbar-content ul').addClass('fixed');
		} else{
			$('#navbar-content ul').removeClass('fixed');
		}
	});
	
     

  });