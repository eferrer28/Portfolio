
document.addEventListener("DOMContentLoaded", function (event) {
    
    var operation1;
    var convert;
    var num1;
    var num2;
    
    $(".clearentry").click(function(){
        $(".output").val(""); 
    });
    
    $(".clearall").click(function(){
        $(".output").val(""); 
        num1 = 0;
        num2 = 0;
    });
    
    
    $(".zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine").click(function(){      
        $('.output').val($('.output').val() + $(this).val());        
    });
    
    $(".posneg").click(function(){  
        convert = $(".output").val();
        var newb = parseFloat(convert) * -1;
        $('.output').val(newb);      
        
    });   
    
    $(".operation").click(function() {
        num1 = $(".output").val();
        $(".output").val("");
        operation1 = $(this).attr(`name`);               
    });
        
    $(".calculate").click(function(){
        num2 = $(".output").val();
        if(operation1 === 'add')
            {   
               result = add(num1, num2);
               $(".output").val(result);
            }
        if(operation1 === 'subtract')
            {   
               result = subtract(num1, num2);
               $(".output").val(result);
            }
        if(operation1 === 'multiply')
            {   
               result = multiply(num1, num2);
               $(".output").val(result);
            }
            if(operation1 === 'divide')
            {   
               result = divide(num1, num2);
               $(".output").val(result);
            }
        
    });
    

    
});


function add(a, b){
   return parseInt(a) + parseInt(b);
   // return a + b;
    
}

function subtract(a, b){
   return parseInt(a) - parseInt(b);
   // return a + b;
    
}

 function multiply(a, b){
   return parseInt(a) * parseInt(b);
   // return a + b;
    
}

function divide(a, b){
   return parseInt(a) / parseInt(b);
   // return a + b;
    
}