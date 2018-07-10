
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
	 var look = $(this)
	 .parent(".qty")
	 .parent(".product")
	 .find("p");
	 $('.foodname').text(look["0"].innerText);

 });


function addFoodList(){
	var newLine = '<div class="orderBox">';
			newLine += '	<p class="nameOfFood">blach blch  </p>';
			newLine += '	<p class="orderNumber">2</p>';
			newLine += '	<i class="fa fa-times"></i>';
			newLine += '</div>';
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
