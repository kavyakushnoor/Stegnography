function clearbits(pixval){
	var x = Math.floor(pixval/16);
	return x;
}

function chop2hide(image){
	for (var px of image.values()){
		px.setRed(clearbits(px.getRed()));
		px.setGreen(clearbits(px.getGreen()));
		px.setBlue(clearbits(px.getBlue()));
	}
	return image;
}

function change(image){	
	for (var px of image.values()){		
		px.setRed(px.getRed()/16);		
		px.setGreen(px.getGreen()/16);		
		px.setBlue(px.getBlue()/16);
}
	return image;
}

function composite(show, hide){	
	var answer = new SimpleImage(show.getWidth(), show.getHeight());
	for (var px of answer.values()){
		var x = px.getX();
		var y = px.getY();
		var showPixel = show.getPixel(x,y);
		var hidePixel = hide.getPixel(x,y);
		px.setRed(showPixel.getRed() + hidePixel.getRed());
		px.setGreen(showPixel.getGreen() + hidePixel.getGreen());
		px.setBlue(showPixel.getBlue() + hidePixel.getBlue());
	}
	return answer;
}

function extract(envelope, image){	
	for (var px of envelope.values()){		
		px.setRed((px.getRed()/16)*16);		
		px.setGreen((px.getGreen()/16)*16);		
		px.setBlue((px.getBlue()/16)*16);
}
	return image;
}

function setSize(image, width, height){
	//In order to match sizes for the images to be used for steganography
	var newImage = new SimpleImage(image);
	newImage.setSize(width, height);
	return newImage;
}

var outer = new SimpleImage("usain.jpg");
var inner = new SimpleImage("skyline.jpg");
outer = chop2hide(outer);
//inner = change(inner);
var stego = composite(outer,inner);
var extraction = extract(stego, inner);
print(extraction);
print(stego);