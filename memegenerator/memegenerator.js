const inputelement = document.querySelector('#inputvalue');
const inputelement2 = document.querySelector('#inputvalue2');
let font = 25;
let imagesource = "";




 function drawImage(){
     var c = document.getElementById('canvas1');
     var ctx = c.getContext('2d');

     img = new Image();
    var text = inputelement.value;
    var text2 = inputelement2.value;
     var canvasTxt = window.canvasTxt.default;
    canvasTxt.fontSize = font;


     img.onload = function(){
         ctx.drawImage(img, 0, 0, 500, 500);
         canvasTxt.drawText(ctx, text, 250, 20, 250, 200);
         canvasTxt.drawText(ctx, text2, 250, 270, 250, 200);

     };
     img.src = imagesource;
 }

    function drawimageonclick(){
     drawImage()
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

function clearinputvalue(){
    document.getElementById('inputvalue').value = '';
    document.getElementById('inputvalue2').value = '';
}

function SelecteDrake() {
    imagesource = "meme11.png";
    clearinputvalue();
    drawImage()
}

function SelecteHonung() {
    imagesource = "meme12.png";
    clearinputvalue();
    drawImage()
}