
/*alert("!!!");
$(document).ready(function(){


  $(".clr").click(function() {
      alert("fml");
  });

    });
    
    
*/

document.addEventListener("DOMContentLoaded", function (event) {
    
    $(".clearentry").click(function(){
        $(".output").val("BOOM");
        alert("derp");    
    });
    
    $(".zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine").click(function(){
        var yoink = $(this).val();
        $('.output').val($('.output').val() + yoink)
        
    });
    
    $("add").click(function(){
        var a = $(output).val();
        
        var b = $(output).val();
        var result = add(a, b);
         $(".output").val(result);
        
        
        
        
    });
    
    $("subtract").click(function(){
        
    });
    
     $("multiply").click(function(){
        
    });
    
    $("divide").click(function(){
        
    });
    
});

function add(a,b){
    return a + b;
    
}
    
 