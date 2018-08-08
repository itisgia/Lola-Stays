$( document ).ready(function() {
    var look;
    var getValue;

    var Plus  = $(".plus");
    var Minus = $(".minus");
    var incrementPlus = Plus.click(function() {
        event.preventDefault();
        var $n = $(this)
            .parent(".controls-wrapper")
            .parent(".qty")
            .find(".quantity");
        var amount = Number($n.val());
        if (amount < 5 ) {
            $n.val(Number($n.val())+1 );
        }


    });

    var incrementMinus = Minus.click(function() {
        event.preventDefault();
        var $n = $(this)
            .parent(".controls-wrapper")
            .parent(".qty")
            .find(".quantity");
      var amount = Number($n.val());
      if (amount > 1) {
          $n.val(amount-1);
      }
    });


    // when the button is clicked, name and price are addded in the box
     var btns = document.getElementsByClassName('add-btn');

     $('.add-btn').click(function(e){
         look = $(this)
            .parent(".qty")
            .parent(".product")
            .find("p"); // targeting the name of e
         getValue = $(this)
             .parent(".qty")
             .parent(".product")
             .find(".quantity"); // targeting the value of e
        addFoodList(); // function happens in line 52
     });


  // adding food list to the right div box
    function addFoodList(){
        var newLine = '<div class="orderBox">';
            newLine += '	<p class="nameOfFood">';
            newLine +=  look["0"].textContent +'x '+ getValue["0"].value  ;
            newLine += '</p>'
            newLine += '	<p class="orderNumber">';
            newLine +-' </p>  '
            newLine += '</div>';
        $('.foodList').append(newLine);
    } // fires in line 41

    //call staff
    $(".right").click(function(){
        alert("One of our staff will be there soon!");
    });


    //mobile version footer(cart)
    $(document).ready(function(){
        $(".cart").click(function(){
            $(".footer-pop").toggle();
        });
    });

});
