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

	

			$(document).ready(function(){
				$(".inline").colorbox({inline:true, width:"100%", transition:"fade"});
				$(".inline1").colorbox({inline:true, width:"100%", transition:"fade"});
				$( "#cboxClose" ).click(function() {
					$( ".tooltip").hide();
				});
				$( ".compare1" ).click(function() {
					$( ".fileimage").show();
					//$( "p" ).show();
				});
				
				$( ".align_hover" ).hover(
				
				function() {
					
					$( ".mayknow_list").show();
				}, 
				function() {
					
					$( ".mayknow_list").hide();
				}
				);
				
				$(".mayknow_list li a").click(function(){
					$( ".list_1").hide();
					$( ".list_2").show();
				});
				$(".mayknow_list .list_2 .back_arrowlist").click(function(){
					$( ".list_1").show();
					$( ".list_2").hide();
				});
				
		      $("#owl-demo").owlCarousel({
		        items : 3,
		        lazyLoad : true,
		        autoPlay : false,
		        navigation : true,
			    //navigationText : ["",""],
				navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"],
			    rewindNav : false,
			    scrollPerPage : false,
			    pagination : false,
    			paginationNumbers: false,
				//itemsDesktop : [1199,3],
				//itemsDesktopSmall : [979,3]
		      });
			});

		
								(function($){
								setTimeout(function(){
									//$(window).load(function(){
										
										$("#Tryon_eyewear #content-1").mCustomScrollbar({
											//theme:"minimal"
										});
										$("#Tryon_eyewear #content-2").mCustomScrollbar({
											//theme:"minimal"
										});
									//});
									},100);
								})(jQuery);
								//$(function () { $("[data-toggle = 'tooltip']").tooltip(); });
								//$(".in_line").popover({placement:'left',trigger:'hover',delay:{show:500,hide:0}});
								
								$('#popoverData').popover();
								$('#popoverOption').popover({ trigger: "hover" });
								$('#popoverData1').popover();
								$('#popoverOption1').popover({ trigger: "hover" });
								
							
 window.onload = function() {
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      var tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      tracking.track('#video', tracker, { camera: true });

      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
		  if((rect.x >90 && rect.x < 110) && (rect.y > 55 && rect.y < 70 ) ){
		// alert("Face detected");
		//messagep.innerHTML = "Face detected"
		document.getElementById("headtrackerMessage").innerHTML = "Hello Face detected";
		//document.getElementById("overlay_v").style.borderColor = "green";
		document.getElementById("headtrackerMessage").style.color = "green";
		document.getElementById("fa").style.color = "green";
		  }
		  else if (rect.x >150){
		//alert ("Move Right");
		document.getElementById("headtrackerMessage").innerHTML = "Move Right";
		document.getElementById("headtrackerMessage").style.color = "red";
		//document.getElementById("overlay_v").style.borderColor = "red";
		  }
		  
		  else if ( rect.x < 30){
		 // alert("Move Left");
		 document.getElementById("headtrackerMessage").innerHTML = "Move Left";
		 document.getElementById("headtrackerMessage").style.color = "red";
		// document.getElementById("overlay_v").style.borderColor = "red";
		  }
		  
		  
        });
      });

      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };