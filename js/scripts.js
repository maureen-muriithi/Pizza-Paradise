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
        $('.btn.add-pizza').click(function() {
            var sizeOfPizza = $(".size option:selected").val();
            var toppingsOfPizza = $(".toppings option:selected").val();
            var crustOfPizza = $(".crust option:selected").val();
            var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
            order = order + 1;
            grandTotal = grandTotal + total;
      
      
            var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);
      
            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
      
            $("#pizza").append(newRow);
            });
      
          $(".btn.check-out").click(function() {
            $(".btn.add-pizza").hide();
            $(".btn.check-out").hide();
            $(".more-info").show();
            $("#yes-button").show();
            $("#no-button").show();
            $(".more-info .location").hide();
            grandTotal = grandTotal + total;
      
            $(".more-info h3 span").html(grandTotal);
          });
      
          $("#yes-button").click(function() {
            $(".more-info h5").hide();
            $("#yes-button").hide();
            $("#no-button").hide();
            $(".more-info .location").show();
            $(".more-info h3 span").html(grandTotal + 200);
          });
      
          $("#no-button").click(function() {
            $(".more-info h5").hide();
            $("#yes-button").hide();
            $("#no-button").hide();
            $(".more-info .location").show();
          });
      
          $(".btn.complete").click(function() {
            var location = $(".more-info .location input").val();
            $(".more-info h4").show();
            $(".more-info .location").hide();
            $(".more-info h4 span").html(location);
        });
      
    });
      
});

        


