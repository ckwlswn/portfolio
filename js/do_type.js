var do_type = {

  replay: function(_el){
    var el = document.querySelector(_el)
    setTimeout(function(){ el.innerHTML = ''; do_type.type(_el);}, 3000);
  },

  type: function (_el) {
    var el = document.querySelector(_el)
    try {
     var el_txt = el.getAttribute('title');
      var count = el.getAttribute('title').length;   
    } catch(err){
      console.log('no attribute')
      return;
    }

    el.innerText = ''
    var duration = 150;
    var text_count = 0;
    var type = setInterval(function(){
        if(text_count >= count - 1) { 
          clearInterval(type);
          do_type.replay(_el);
        }
        if(el_txt[text_count] == '*') {
          el.innerHTML += '<br>';
          el_txt[text_count] = '';
        } else{
          el.innerHTML += '<span>' + el_txt[text_count] + '</span>';  
        }
          text_count++;   
      }, duration)
  }  
}
