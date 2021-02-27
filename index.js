function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#trail_img')
          .attr('src', e.target.result)
          .width(200)
          .height(400);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
console.log("Image Editor")


// GrayScale

var grayscale_slider = document.getElementById('grayscale_slider');
var grayscale_output = document.getElementById('grayscale_output');
grayscale_output.innerHTML = grayscale_slider.value;

grayscale_slider.oninput =  function() {
    grayscale_output.innerHTML = this.value;
    document.getElementById('trail_img').style.filter = `grayscale(${this.value}%)`; 
}


//Blur 

var blur_slider = document.getElementById('blur_slider');
var blur_output = document.getElementById('blur_output');
blur_output.innerHTML = blur_slider.value;

blur_slider.oninput =  function() {
    blur_output.innerHTML = this.value; 
    document.getElementById('trail_img').style.filter = `blur(${this.value/10}px)`;
}


// Brightness

var bright_slider = document.getElementById('bright_slider');
var brightness_output = document.getElementById('brightness_output');
brightness_output.innerHTML = bright_slider.value;

bright_slider.oninput =  function() {
    brightness_output.innerHTML = this.value;
    document.getElementById('trail_img').style.filter = `brightness(${this.value*3}%)`; 
}

// Opacity

var opacity_slider = document.getElementById('opacity_slider');
var opacity_output = document.getElementById('opacity_output');
opacity_output.innerHTML = opacity_slider.value;

opacity_slider.oninput =  function() {
    opacity_output.innerHTML = this.value;
    document.getElementById('trail_img').style.filter = `opacity(${this.value}%)`; 
}


// Sepia

var sepia_slider = document.getElementById('sepia_slider');
var sepia_output = document.getElementById('sepia_output');
sepia_output.innerHTML = sepia_slider.value;

sepia_slider.oninput =  function() {
    sepia_output.innerHTML = this.value;
    document.getElementById('trail_img').style.filter = `sepia(${this.value*2}%)`; 
}
