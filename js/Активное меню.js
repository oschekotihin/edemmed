 var cookieEq="sd1";
 var cookieOptions = {expires: 7, path: '/'};
 $(".table-strel td").eq($.cookie(cookieEq)).addClass("second-active");  

 $.cookie(cookieEq,"32", {path:&apos;/&apos;});   

 $(".table-strel a").click(function (){

      $.cookie(cookieEq,null, {path:'/'});     
 	  $.cookie(cookieEq,$(this).parent().index(),cookieOptions);  
 	     
 	});                 




 взял с gb71.ru