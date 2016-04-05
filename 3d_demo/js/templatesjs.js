$(document).ready(function() {
							
							var host = "http://localhost/3d_demo/templates/lib"							
							
							var test = function(){
							
							$.get("templates/index.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							};
							 
							 test();
							 
							
						
						
							$(document).on('click', "#skip_login1" ,function() {
							
							$.get("templates/upload.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
							});
							}); 
							$(document).on('click', ".upload_photo1" ,function() {
							
									$.get("templates/2DWalkthrough.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							$(document).on('click', ".walkthrough_cancel" ,function() {
							
									$.get("templates/index.html", function(value) {
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
							$(document).on('click', ".takeaphoto" ,function() {
							
							$.get("templates/3Dposition_your_face.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							$(document).on('click', ".reset_redirect" ,function() {
							
							$.get("templates/3Dposition_your_face.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							
							$(document).on('click', "#record_stop" ,function() {
							
							$.get("templates/3DTrail_room.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host,"ProductName":localStorage.getItem("ProductName"),"FrameShape":localStorage.getItem("FrameShape"),"FrameType":localStorage.getItem("FrameType"),"ProductType":localStorage.getItem("ProductType"),"EyeWearModel":localStorage.getItem("EyeWearModel"),"BrandName":localStorage.getItem("BrandName")});							
							$("#Tryon_eyewear").html(html);
							});
							
							$(".position_face").hide();
							$(".position_goodtry").show();
							$(".postion_vid_position").hide();
							$(".postion_vid_loader").show();
							
							setTimeout(function(){
								 addtocompare();
							},500);
							setTimeout(function(){
								 tryon3dtrail();
							},100);
							
							});
							
							
							$(document).on('click', ".3dpositionface_back" ,function() {
							  window.stream.getVideoTracks()[0].stop();
							$.get("templates/3DWalkthrough.html", function(value) {
							var temp = $.templates(value);
							var html = temp.render({"host":host});							
							$("#Tryon_eyewear").html(html);
        
							});
							
							}); 
							
							
							$(document).on('click', ".product-info-cust a" ,function() {
								
							var eyewearModel1 = $(this).data('model');
							$('p#EyeModel').text(eyewearModel1);
                            localStorage.setItem("EyeWearModel",eyewearModel1);
                            
							var brand = $(this).data('brand');
							$('p#Brandname').text(brand);
                            localStorage.setItem("BrandName",brand);
                           
                            var ptype = $(this).data('type');
							$('p#Protype').text(ptype);
                            localStorage.setItem("ProductType",ptype);
							
							var ftype = $(this).data('frame');
							$('p#Frmtype').text(ftype);
                            localStorage.setItem("FrameType",ftype);
							
							var shape = $(this).data('shape');
							$('p#Frmshape').text(shape);
                            localStorage.setItem("FrameShape",shape);
							
							var name = $(this).data('name');
                            $('p#ProName').text(name);
                            localStorage.setItem("ProductName",name);
							
							$("#Tryon_eyewear").show();
							$(".img-slider").hide();							
							$('html, body').animate({scrollTop: $("#Tryon_eyewear").offset().top-10}, 1200);
							}); 
								
							$(document).on('click', ".each_product_tryon" ,function() {
							$("#Tryon_eyewear").show();
							$(".img-slider").hide();							
							$('html, body').animate({scrollTop: $("#Tryon_eyewear").offset().top-10}, 1200);
							}); 
							
							
							$(document).on('click', ".close_btn" ,function() {
							test();
							  window.stream.getVideoTracks()[0].stop();
							$("#Tryon_eyewear").hide();
							$(".img-slider").show();		
							}); 
							
							
						//3DTrail_room
							var tryon3dtrail = function(){
															var loadImage = function(src) {
                     var image = new Image();
                     image.src = src;
                     return image;
                 };
                 var c = document.getElementById('canvas11');
                 var con = c.getContext('2d');
                 var canvas_width = 640;
                 var canvas_height = 480;
                 var fm = [], fr = [], tmp_img = [];
                
                 function displayResult() {
                                tempfr = Math.abs(Math.floor(fr.length/2));
                                tempfm = Math.abs(Math.floor(fm.length/2));
                                con = c.getContext('2d');
                                con.clearRect(0, 0, canvas_width, canvas_height);
                            };
                 
                 function moveFrames(e) {
                                 movLen = fr.length;
                                 movLen1 = fm.length;
                                 var rect = c.getBoundingClientRect();
                                 canvasX  = e.clientX - rect.left;
                                 canvasY = e.clientY - rect.top;
                                 d = Math.abs(Math.floor((canvasX/canvas_width) * movLen));
                                 d1 = Math.abs(Math.floor((canvasX/canvas_width) * movLen1));
                                 con.drawImage(tmp_img[d], 0, 0,canvas_width,canvas_height);
                                 con.drawImage(fm[d1], 0, 0,canvas_width,canvas_height);
                            }
                            
                 function loadglass() {
                    var tmp = [],frames='',faces='';
						var faceimages='';
						$.getJSON('js/compareJson.json',function(data) {
					 //console.warn(data.faces);
                     var FaceImage = data.frames;
                     var GlassImage = data.faces;
                    fl = FaceImage.length;
                    fm = [];
                    fr = [];
                    tmp_img = [];
                    for (j=0; j < fl; j++){
                      fr[j] = j;
                      tmp_img[j] = loadImage(FaceImage[j]);
                      fm[j] = loadImage(GlassImage[j]);
                    }
                    c.addEventListener("mousemove", moveFrames, false);
                    con.clearRect(0, 0, canvas_width, canvas_height);
                    displayResult();
						});
						}
						
						
						
					loadglass();
							
					//var canvas = document.getElementById("canvas11");
					//var img    = canvas.toDataURL("image/png");
					//alert(img);
							

							}
							
							
							//add to compare
							var addtocompare = function(){
							var loadImage = function(src) {
                     var image = new Image();
                     image.src = src;
                     return image;
                 };
                 var c = document.getElementById('canvas1');
                 var con = c.getContext('2d');
                 var canvas_width = 450;
                 var canvas_height = 450;
                 var fm = [], fr = [], tmp_img = [];
                
                 function displayResult() {
                                tempfr = Math.abs(Math.floor(fr.length/2));
                                tempfm = Math.abs(Math.floor(fm.length/2));
                                con = c.getContext('2d');
                                con.clearRect(0, 0, canvas_width, canvas_height);
                            };
                 
                 function moveFrames(e) {
                                 movLen = fr.length;
                                 movLen1 = fm.length;
                                 var rect = c.getBoundingClientRect();
                                 canvasX  = e.clientX - rect.left;
                                 canvasY = e.clientY - rect.top;
                                 d = Math.abs(Math.floor((canvasX/canvas_width) * movLen));
                                 d1 = Math.abs(Math.floor((canvasX/canvas_width) * movLen1));
                                 con.drawImage(tmp_img[d], 0, 0,canvas_width,canvas_height);
                                 con.drawImage(fm[d1], 0, 0,canvas_width,canvas_height);
                            }
                            
                 function loadglass() {
                    var tmp = [],frames='',faces='';
						var faceimages='';
						$.getJSON('js/compareJson.json',function(data) {
					 //console.warn(data.faces);
                     var FaceImage = data.frames;
                     var GlassImage = data.faces;
                    fl = FaceImage.length;
                    fm = [];
                    fr = [];
                    tmp_img = [];
                    for (j=0; j < fl; j++){
                      fr[j] = j;
                      tmp_img[j] = loadImage(FaceImage[j]);
                      fm[j] = loadImage(GlassImage[j]);
                    }
                    c.addEventListener("mousemove", moveFrames, false);
                    con.clearRect(0, 0, canvas_width, canvas_height);
                    displayResult();
						});
						}
					loadglass();
		
							}

							
							});
							
					