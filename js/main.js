$('.count').each(function () {
	var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	}, {
		duration: 5000,
		step: function (func) {
			$(this).text(parseFloat(func).toFixed(size));
		}
	});
});


$(".mouse").click(function(e){
	
	$("html, body").animate({ scrollTop:670 }, "slow");
})

$(".owl-carousel").owlCarousel({
	loop: true,
	navigationText : ["prev","next"],
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
	
});

var selector = $('.owl-carousel');

$('.my-next-button').click(function() {
	selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
	selector.trigger('prev.owl.carousel');
});
$(document).ready(function(){
	$("#nav_button").click(function(){
		$(".nav_bar").slideToggle("slow");
	});
});

