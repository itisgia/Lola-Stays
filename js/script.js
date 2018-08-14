$( document ).ready(function() {
    var look;
    var getValue;
    var getPrice;
    var price = 0;
    var checkout = 0;
    var Plus  = $(".plus");
    var Minus = $(".minus");
    var close = document.getElementsByClassName('fa-times');

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
     $('.add-btn').click(function(){
         look = $(this)
            .parent(".qty")
            .parent(".product")
            .find(".name"); // targeting the name of its food name
         getValue = $(this)
             .parent(".qty")
             .parent(".product")
             .find(".quantity"); // targeting the value of its food
          getPrice = $(this)
              .parent(".qty")
              .parent(".product")
              .find(".price");
        addFoodList(); // function happens in line 48
        calculatePrice();
         //line 54
     });
  // adding food list to the right div box
    function addFoodList(){
        var newLine = '<div class="orderBox">';
            newLine += '	 <p class="nameOfFood">';
            newLine +=          look["0"].outerText +' x '+ getValue["0"].value  ;
            newLine += '    </p>';
            newLine += '<button class= "closeBtn">';
            newLine += '    <i class="fa fa-times closing"></i>'
            newLine += '</button>'
            newLine += '</div>';
        $('.foodList').append(newLine);
        deleteItem ();
    } // fires in line 44


    function deleteItem () {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener("click", closingDiv, false);
        }
    }

    //remove food
    function closingDiv(el) {
        var findBox = el.target.parentNode.parentNode;
        var toString = getPrice["0"].innerHTML;
        var toNumber = toString.replace(/[^0-9.]/g, "");
        var pricecal = ( toNumber * getValue["0"].value );
            findBox.remove();
            price -= pricecal;
            $('.totalPrice').html("$ " + price + " NZD");
            console.log($('.totalPrice').html());
    }

    function calculatePrice() {
        var toString = getPrice["0"].innerHTML;
        var toNumber = toString.replace(/[^0-9.]/g, "");
        var pricecal = ( toNumber * getValue["0"].value );
            price += pricecal;
            $('.totalPrice').html("$ " + price + " NZD");

    }

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
});//////// ENDS
