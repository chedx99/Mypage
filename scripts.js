window.onload = function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("imgHD");
    c.style.width = "850px";
    c.style.height = "470px";
    c.style.alignSelf = "Center";
    ctx.drawImage(img, 0, 0, 1080, 961, 0, 0, 850, 470);

    //
    
    
  };

function msgON(){
   var canvas = document.getElementById("myCanvas");
   canvas.style.width = "500px";
   canvas.style.height = "500px";

 };

 function outC(){
   var canvas = document.getElementById("myCanvas");
   canvas.style.width = "850px";
   canvas.style.height = "470px";
 };