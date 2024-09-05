var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"]; // Array of image file names
var currentIndex = 0; // Current image index

function changeImage() {
  var sliderImage = document.getElementById("slider-image");
  sliderImage.src = images[currentIndex]; // Change the source of the image

  // Increment the index or reset to 0
  currentIndex = (currentIndex + 1) % images.length;
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);
