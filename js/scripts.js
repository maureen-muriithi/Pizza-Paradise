$ (document).ready(function(){
    // toggle function on the 'What we do" section, to display description
    $("#pizzaInfo, #toppingsInfo, #crustInfo").hide();

    $("#pizza-size").click(function(){
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

    $("#orderbutton").click(function(e){
        e.preventDefault();
        console.log("Submitted")
        let sizeOfPizza = $("#pizza-size").find(":selected").val()
        let toppingsOfPizza = $("#toppings").find(":selected").val()
        let crustOfPizza = $("#crust").find(":selected").val()
        console.log("My pizza should be ", sizeOfPizza, "," , crustOfPizza, "and with", toppingsOfPizza)

        let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        let order = 1;
        let grandTotal = 0;
        
    })

    // let Cost = new cost()
    
})

