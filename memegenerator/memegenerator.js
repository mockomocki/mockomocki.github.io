const inputelement = document.querySelector('#inputvalue');
const inputelement2 = document.querySelector('#inputvalue2');
let font = 10;
let imagesource = "";




 function drawImage(){
     var ctx = $("canvas")[0].getContext("2d"),
         img = new Image();

     img.onload = function(){
         ctx.drawImage(img, 0, 0, 500, 500);
         ctx.font = font+"px Arial";
         ctx.fillText(inputelement.value,275,125);
         ctx.fillText(inputelement2.value,275,375);
     };
     img.src = imagesource;
 }


 $("button").click(drawImage);

 function DownloadCanvasAsImage(){
     const nameoffile = inputelement.value + Math.floor(Math.random() * 10000) + '.png';
     let downloadLink = document.createElement('a');
     downloadLink.setAttribute('download', nameoffile);
     let canvas = document.getElementById('canvas1');
     let dataURL = canvas.toDataURL('image/png');
     let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
     downloadLink.setAttribute('href', url);
     downloadLink.click();
 }

 function IncreaeFontSize() {
    font += 5;
    console.log("hello")
}

function DecreaeFontSize() {
    font -= 5;
}

function SelecteDrake() {
    imagesource = "meme11.png";
    drawImage()
}

function SelecteHonung() {
    imagesource = "meme12.png";
    drawImage()
}