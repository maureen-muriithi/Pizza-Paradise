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
    $(".other-buttons").hide();
    $(".more-info").hide();
    $("#yes-button").hide();
    $("#no-button").hide();
    $(".more-info h4").hide();

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
        $(".other-buttons").show();
        $("#orderButton").hide();
        $("")
        
        $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
        $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
        $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
        $("#total").html(total);

    //     function Pizza(size, toppings, crust, total, orderNo) {
    //     this.size = size;
    //     this.toppings = toppings;
    //     this.crust = crust;
    //     this.total = total;
    //     this.orderNo = orderNo;
    // }
        
    

        
    })

    // let Cost = new cost()
    
})

