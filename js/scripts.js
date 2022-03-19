$ (document).ready(function(){
    // toggle function on the 'What we do" section, to display description
    $("#pizzaInfo, #toppingsInfo, #crustInfo").hide();

    $(".first-option").click(function(){
        $("#pizzaInfo").toggle();
        $("#firstImage").toggle();
    });
    
    $(".second-option").click(function(){
        $("#toppingsInfo").toggle();
        $("#secondImage").toggle();
    });
    
    $(".third-option").click(function(){
        $("#crustInfo").toggle();
        $("#thirdImage").toggle();
    });

    $(".table").hide();
    $("#addButton").hide();

    $("#orderButton").click(function(e){
        e.preventDefault();
        console.log("Submitted")
        let sizeOfPizza = $("#pizza-size").find(":selected").val();
        let toppingsOfPizza = $("#toppings").find(":selected").val();
        let crustOfPizza = $("#crust").find(":selected").val();
        console.log("My pizza should be ", sizeOfPizza, "," , crustOfPizza, "and with", toppingsOfPizza)

        let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        let order = 1;
        let grandTotal = 0;

        $(".table").show();
        $("#addButton").show();
        $("#orderButton").hide();
        
    })

    // let Cost = new cost()
    
})

