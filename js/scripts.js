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

    // Hide and show elements required to display order items
    $(".table").hide();
    $(".other-buttons").hide();
    $(".more-info").hide();
    $("#yes-button").hide();
    $("#no-button").hide();
    $(".more-info h4").hide();

    // define and validate the order button
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
        
        // Gather order information in a table
        $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
        $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
        $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
        $("#total").html(total);

        function Pizza(size, toppings, crust, total, orderNo) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.total = total;
        this.orderNo = orderNo;
    }
        // Pizza.prototype.calculatePrice = function(){

        // }

        // Enable additional orders
        $('.btn.add-pizza').click(function() {
            var sizeOfPizza = $(".size option:selected").val();
            var toppingsOfPizza = $(".toppings option:selected").val();
            var crustOfPizza = $(".crust option:selected").val();
            var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
            order = order + 1;
            grandTotal = grandTotal + total;
      
            // Create new rows for additional orders
            var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);
      
            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
      
            $("#pizza").append(newRow);
            });
        
        // Hide and show elements for user to request delivery
        $(".btn.check-out").click(function() {
            $(".btn.add-pizza").hide();
            $(".btn.check-out").hide();
            $(".more-info").show();
            $("#yes-button").show();
            $("#no-button").show();
            $(".more-info .location").hide();
            $(".more-info #feedback").hide();
            grandTotal = grandTotal + total;
      
            $(".more-info h3 span").html(grandTotal);
          });
          
        // If delivery is needed, add 200(discounted delivery fee) to the grandtotal  
        $("#yes-button").click(function() {
            $(".more-info h5").hide();
            $("#yes-button").hide();
            $("#no-button").hide();
            $(".more-info #feedback").hide();
            $(".more-info .location").show();
            $(".more-info h3 span").html(grandTotal + 200);
          });
          
        // If delivery is not needed, just display the grandtotal
        $("#no-button").click(function() {
            $(".more-info h5").hide();
            $("#yes-button").hide();
            $("#no-button").hide();
            $(".more-info .location").hide();
            $(".more-info #feedback").show();
          });
      
        // For delivery user inputs location then completes order
        $(".btn.complete").click(function() {
            var location = $(".more-info .location input").val();
            $(".more-info h4").show();
            $(".more-info .location").hide();
            $(".more-info h4 span").html(location);
        });
      
    });
      
});

        


