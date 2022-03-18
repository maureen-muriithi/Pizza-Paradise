$ (document).ready(function(){
    // toggle function on the 'What we do" section, to display description
    $("#pizza").click(function(){
        $("#pizzaInfo").toggle();
        $("#firstImage").toggle();
    });
    
    $("#toppings").click(function(){
        $("#toppingsInfo").toggle();
        $("#secondImage").toggle();
    });
    
    $("#crust").click(function(){
        $("#crustInfo").toggle();
        $("#thirdImage").toggle();
    });
    
})