//Add interactivity to this page 



//create overlay, image and caption

var $overlay = $('<div id = "overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');



//append overlay to body and imge,caption to overlay
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//use anchor href as image value when image is clicked and use img alt value as caption
$("#imageGallery a").click(function(event){
	event.preventDefault();

	var imageValue = $(this).attr("href");
	$image.attr("src",imageValue);
	
	$overlay.show();

	var labelValue = $(this).children("img").attr("alt");
	$caption.text(labelValue);
});



//hide overlay when clicked on it

$overlay.click(function(){

$overlay.hide();

});
