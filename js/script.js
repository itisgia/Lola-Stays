$( document ).ready(function() {
    var look;
    var getValue;
    var getPrice;
    var Plus  = $(".plus");
    var Minus = $(".minus");
    var close = document.getElementsByClassName('fa-times');

    var incrementPlus = Plus.click(function() {
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
            .find(".name"); // targeting food names
         getValue = $(this)
             .parent(".qty")
             .parent(".product")
             .find(".quantity").val(); // targeting each values
          getPrice = $(this)
              .parent(".qty")
              .parent(".product")
              .find(".price");
        addFoodList(); //
        calculatePrice();
         //line 54
     });

  // adding food lists into the right div box
    function addFoodList(){
        console.log('click 1 line 52');
        var pricing = getPrice[0].innerHTML;
        var priceVal = pricing.replace(/[^0-9.]/g, "");
        var getting = priceVal * getValue;
        var newLine = '<div class="orderBox">';
            newLine += '	 <p class="nameOfFood">';
            newLine +=          look["0"].outerText +' x '+ getValue  ;
            newLine +='             $ '
            newLine += '            <span class = subtotal>'
            newLine +=                  parseFloat(getting);
            newLine += '            </span>'
            newLine += '    </p>';
            newLine += '    <button class= "closeBtn">';
            newLine += '        <i class="fa fa-times closing"></i>'
            newLine += '    </button>'
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
            findBox.remove();
            calculatePrice();
    }
// calculating price
    function calculatePrice() {
        var price = 0;
        $('.subtotal').each(function (){
            console.log($('.subtotal' + 'each function'));
            var calEach = parseFloat($(this).text());
            price += calEach;
        });
        $('.totalPrice').html("$ " + price + " NZD");

    }

    //call staff
    $(".right").click(function(){
        alert("One of our staff will be there soon!");
    });


    //mobile version footer(cart)

    $(".right-wrap").one('click', function () {
        $(this).height( 370 );
    })

});//////// ENDS
