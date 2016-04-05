jQuery(document).ready(function($){
//3d walkthrough
		$('#myCarousel').carousel({
			interval: 3500,
			wrap: false
		});
		$('#myCarousel').on('slid.bs.carousel', function (e) {
			if ($('.carousel-inner .item:last').hasClass('active')) {
				$('#myCarousel').carousel('pause');
			}
			if ($('.carousel-inner .item:first').hasClass('active')) {
				$('#myCarousel').carousel('cycle');
			}		
		});

         $('.num').each(function(){
			var total = $(this).parents('#myCarousel').find('.carousel-inner .item').length;
			$(this).text('1 of '+total);
         }); 
         $('#myCarousel').bind('slid.bs.carousel', function () { 
			var carouselData = $(this).data('bs.carousel');
			currentIndex = $('#myCarousel div.active').index();
			var total = carouselData.$items.length;
			var txt = ' '+(currentIndex + 1)+' of '+total;
			$(this).find('.num').text(txt);
         });
});