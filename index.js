var originalImage = null;
var redImage = null;
var grayImage = null;
var greenImage = null;
var imageCanvas;
var file;
 


function loadImage(){
file = document.getElementById('imgfile');
  
  originalImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  greenImage = new SimpleImage(file);
  
  imageCanvas = document.getElementById('uploadcanvas');
 
originalImage.drawTo(imageCanvas);  
}

function imageIsLoaded(inputimage){
 //var testimage = inputimage;
    if (inputimage == null  || ! inputimage.complete()) {
    return false;
    }
     else {
       return true;
     } 
    
}

function makeRed(){
   if (imageIsLoaded(redImage)){
    filterRed();
   
    redImage.drawTo(imageCanvas);
  }
  else {
    alert("Did not work");
  }
}

function filterRed(){
  for (var pixel of redImage.values()){
   pixel.setRed(255);
  }
}


function makeGray(){
  //if (grayImage == null  || ! grayImage.complete()) {
    //alert("Gray Filter Failed");
    //
     //else {
       //alert("Gray Filter");
     //} 
  if (imageIsLoaded(grayImage)){
    filterGray();
    grayImage.drawTo(imageCanvas);
  }
  else {
    alert("Did not work");
  }
}
  
function filterGray(){
  
  
 
  for (var pixel of grayImage.values()){
    var  avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
 
  
}  
  


function makeGreen(){
  if (imageIsLoaded(greenImage)){
    filterGreen();
    greenImage.drawTo(imageCanvas);
  }
  else {
    alert("Did not work");
  }
}

function filterGreen(){
  for (var pixel of greenImage.values()){
   pixel.setGreen(255);
  }
}

function resetImage(){
  if (imageIsLoaded(originalImage)){
  
  //grayImage = originalImage;
    clearCanvas();
    
  
    //grayImage = originalImage;
  //redImage = originalImage;
  
  //greenImage = originalImage;
}
  else {
    alert("Reset not working");
  }
}  

function clearCanvas() {
  doClear(imageCanvas);
 originalImage.drawTo(imageCanvas);
  
  
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  greenImage = new SimpleImage(file);
  
  
}

function doClear(canvas) {
  
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  
}