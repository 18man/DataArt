$(document).ready(function(){

  $('.ArtsAndSciences').hover(
  function(){
  
	$(".ArtsAndSciences").css("background","#ff7770");
    $(".keyAS").css("background","#ff7770");
  },
  function(){
  
	$(".ArtsAndSciences").css("background","#A8201A");
    $(".keyAS").css("background","#A8201A");
}
);

$('.VPA').hover(
    function(){
    
      $(".VPA").css("background","#ffcd88");
      $(".keyVPA").css("background","#ffcd88");
    },
    function(){
    
      $(".VPA").css("background","#EC9A29");
      $(".keyVPA").css("background","#EC9A29");
  }
  );

$('.ECS').hover(
    function(){
    
      $(".ECS").css("background","#eaffbd");
      $(".keyECS").css("background","#eaffbd");
    },
    function(){
    
      $(".ECS").css("background","#D0F582");
      $(".keyECS").css("background","#D0F582");
  }
  );

$('.Falk').hover(
    function(){
    
      $(".Falk").css("background","#88ffb5");
      $(".keyFalk").css("background","#88ffb5");
    },
    function(){
    
      $(".Falk").css("background","#3CCE74");
      $(".keyFalk").css("background","#3CCE74");
  }
  );

$('.Newhouse').hover(
    function(){
    
      $(".Newhouse").css("background","#98ffff");
      $(".keyNH").css("background","#98ffff");
    },
    function(){
    
      $(".Newhouse").css("background","#4DFFFF");
      $(".keyNH").css("background","#4DFFFF");
  }
  );

$('.Education').hover(
    function(){
    
      $(".Education").css("background","#8080ff");
      $(".keyEdu").css("background","#8080ff");
    },
    function(){
    
      $(".Education").css("background","#4646FF");
      $(".keyEdu").css("background","#4646FF");
  }
  );

$('.Whitman').hover(
    function(){
    
      $(".Whitman").css("background","#c8a8ff");
      $(".keyWhitman").css("background","#c8a8ff");
    },
    function(){
    
      $(".Whitman").css("background","#9A80C6");
      $(".keyWhitman").css("background","#9A80C6");
  }
  );

  $('.Other').hover(
    function(){
    
      $(".Other").css("background","#345663");
      $(".keyother").css("background","#345663");
      $(".Other").css("color","#FFFFFF");
      $(".keyother").css("color","#FFFFFF");
    },
    function(){
    
      $(".Other").css("background","#143642");
      $(".keyother").css("background","#143642");
      $(".Other").css("color","#FFFFFF");
      $(".keyother").css("color","#FFFFFF");
  }
  );

  $('.iSchool').hover(
    function(){
    
      $(".iSchool").css("background","#ffa6c2");
      $(".keyIS").css("background","#ffa6c2");
    },
    function(){
    
      $(".iSchool").css("background","#FF729F");
      $(".keyIS").css("background","#FF729F");
  }
  );


  $('.Architecture').hover(
    function(){
    
      $(".Architecture").css("background","#8d7e81");
      $(".keyArc").css("background","#8d7e81");
    },
    function(){
    
      $(".Architecture").css("background","#7A5C61");
      $(".keyArc").css("background","#7A5C61");
  }
  );



$("p").click(function(){
    $(this).hide();
  });

});