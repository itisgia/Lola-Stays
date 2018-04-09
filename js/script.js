
//number incresemnt 

var incrementPlus;
var incrementMinus;
var Plus  = $(".plus");
var Minus = $(".minus");
var incrementPlus = Plus.click(function() {
	var $n = $(this)
		.parent(".controls-wrapper")
		.parent(".qty")
		.find(".quantity");
	 $n.val(Number($n.val())+1 );
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

//call staff

$(".right").click(function(){
    alert("One of our staff will be there soon!");
});