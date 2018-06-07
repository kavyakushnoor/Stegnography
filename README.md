# Stegnography
The code uses stenography to hide one image inside the other.

The basic principle uses the RGB values of an image which serves as an envelope. For example, if the image has a pixel with R value of 250,
the code diminishes it to 240. The difference of 10 that arises due to this is where a new image is stored. Since the change in color is 
very mild and unnoticeable, the image appears same to an end user. The same principle is done for each pixel in the entire image.

Both the envelope and the hidden image must be of same size. To facilitate this, a function called setSize is provided.

Algorithm used for steganography:

1. Set size for 2 images to be considered for steganography so that they have equal value.

2. Get the pixel value of envelope image and divide it by 16. Rounding this result creates space in the pixel value where the image to be hidden can be stored. Create loop to perform function for each pixel.

3. Repeat step in 1 above for the pixels in 'hide' image which is to be hidden in the envelope.

4. Create a new image and store it in a variable 'answer'. For each pixel in this new image, change pixel value with a sum of R,G,B values of the envelope image called 'show' and the hidden image called 'hide'.

5. For extraction of images, divide each RGB value of the image pixels by 16 and multiply by 16. Return this new image that is generated.
