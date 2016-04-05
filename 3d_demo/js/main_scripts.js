(function($){
//    $(document).ready(function() {
    var $ = window.jsviews || window.jQuery;
var host = "http://localhost/jsr/templates/lib";
var skip_login = document.getElementById('skip_login1');
							
							var init = function(){
							
							$.get("templates/index.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							};
							 
//							 init();
						
//							$(document).on('click', "#skip_login1" ,function() {
						
                        function callAjax(url, callback){
                            var xmlhttp;
                            // compatible with IE7+, Firefox, Chrome, Opera, Safari
                            xmlhttp = new XMLHttpRequest();
                            xmlhttp.onreadystatechange = function(){
                                if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                                    callback(xmlhttp.responseText);
                                }
                            }
                            xmlhttp.open("GET", url, true);
                            xmlhttp.send();
                    }
    
    
    
    
                            skip_login.onclick = function(){
                                $.get("templates/upload.html", function(value) {
                                var temp = $.templates(value);
                                var html = temp.render({"host":host});							
                                $("#Tryon_eyewear").html(html);
                                });
							};
    
    
    
    
    var  s = callAjax('templates/index.html');
    alert(s);
    /*
							$(document).on('click', ".upload_photo1" ,function() {
							
									$.get("templates/2DWalkthrough.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
								$(document).on('click', ".skip_login" ,function() {
							
									$.get("templates/3DWalkthrough.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							
                            $(document).on('click', ".uploadphoto" ,function() {
							
							$.get("templates/3Dposition_your_face.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							
							$(document).on('click', "#record_stop" ,function() {
							
							$.get("templates/3DTrail_room.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							$(document).on('click', ".3dpositionface_back" ,function() {
							
							$.get("templates/3DWalkthrough.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							
							$(document).on('click', ".product-info-cust a" ,function() {
							//alert('fa');
							$("#Tryon_eyewear").show();
							$(".img-slider").hide();
							$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
							
							}); 
    
    */
								
//							});
})(this.jsrender);