const inputelement = document.querySelector('#inputvalue');
const inputelement2 = document.querySelector('#inputvalue2');
const inputelement3 = document.querySelector('#inputvalue3');
const inputelement4 = document.querySelector('#inputvalue4');
let font = 25;
let imagesource = "";
let deafultfont1 = true

function deafultfont() {
    deafultfont1 = true;
}

function memefont() {
    deafultfont1 = false;
}




 function drawImage(){
     var c = document.getElementById('canvas1');
     var ctx = c.getContext('2d');

     img = new Image();
     var text = inputelement.value;
     var text2 = inputelement2.value;
     var text3 = inputelement3.value;
     var text4 = inputelement4.value;
     var canvasTxt = window.canvasTxt.default;
     if(deafultfont1 === false){
         canvasTxt.font = "impact";
         ctx.fillStyle = '#fafafa';
         canvasTxt.fontWeight = "bold";
         canvasTxt.fontSize = font;
         canvasTxt.fontVariant = 'small-caps '
     }else{
         canvasTxt.font = "Arial";
         ctx.fillStyle = '#000000';
         canvasTxt.fontWeight = "";
         canvasTxt.fontSize = font;
         canvasTxt.fontVariant = ''
     }


     if(imagesource === "meme13.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, 500, 500);
             canvasTxt.drawText(ctx, text, 0, -40, 250, 200);
             canvasTxt.drawText(ctx, text2, 0, 80, 250, 200);
             canvasTxt.drawText(ctx, text3, 0, 200, 250, 200);
             canvasTxt.drawText(ctx, text4, 0, 320, 250, 200);

         };
         img.src = imagesource;
     }else if (imagesource === "meme14.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, 500, 500);
             canvasTxt.drawText(ctx, text, 0, -40, 250, 200);
             canvasTxt.drawText(ctx, text2, 0, 130, 250, 200);
             canvasTxt.drawText(ctx, text3, 0, 300, 250, 200);

         };
         img.src = imagesource;
     }else if (imagesource === "meme15.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, 500, 500);
             canvasTxt.drawText(ctx, text, 200, 160, 120, 220);
             canvasTxt.drawText(ctx, text2, 340, 160, 120, 200);

         };
         img.src = imagesource;
     }else if (imagesource === "meme16.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, 500, 500);
             canvasTxt.drawText(ctx, text, 60, 250, 120, 100);
             canvasTxt.drawText(ctx, text2, 220, 20, 120, 100);

         };
         img.src = imagesource;
     }else {
         img.onload = function(){
             ctx.drawImage(img, 0, 0, 500, 500);
             canvasTxt.drawText(ctx, text, 250, 20, 250, 200);
             canvasTxt.drawText(ctx, text2, 250, 270, 250, 200);

         };
         img.src = imagesource;
     }
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
    document.getElementById('inputvalue3').value = '';
    document.getElementById('inputvalue4').value = '';
}

function showinputfield34(){
    document.getElementById('inputvalue3').type = 'text';
    document.getElementById('inputvalue4').type = 'text';
}

function showinputfield3(){
    document.getElementById('inputvalue3').type = 'text';
}

function hideinputfield34(){
    document.getElementById('inputvalue3').type = 'hidden';
    document.getElementById('inputvalue4').type = 'hidden';
}

function SelecteDrake() {
    imagesource = "meme11.png";
    clearinputvalue();
    hideinputfield34();
    drawImage()
}

function SelecteHonung() {
    imagesource = "meme12.png";
    clearinputvalue();
    hideinputfield34();
    drawImage()
}

function SelecteBrain() {
    imagesource = "meme13.png";
    clearinputvalue();
    showinputfield34();
    drawImage()
}

function SelecteKalm() {
    imagesource = "meme14.png";
    clearinputvalue();
    hideinputfield34();
    showinputfield3();
    drawImage()
}

function SelecteTrump() {
    imagesource = "meme15.png";
    clearinputvalue();
    hideinputfield34();
    drawImage()
}

function SelecteButt() {
    imagesource = "meme16.png";
    clearinputvalue();
    hideinputfield34();
    drawImage()
}

