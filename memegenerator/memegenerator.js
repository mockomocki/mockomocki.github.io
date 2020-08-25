const inputelement = document.querySelector('#inputvalue');
const inputelement2 = document.querySelector('#inputvalue2');
const inputelement3 = document.querySelector('#inputvalue3');
const inputelement4 = document.querySelector('#inputvalue4');
let font = 25;
let imagesource = "";
let deafultfont1 = true;
var meme11 = document.getElementById('meme11');
var meme12 = document.getElementById('meme12');
var meme13 = document.getElementById('meme13');
var meme14 = document.getElementById('meme14');
var meme15 = document.getElementById('meme15');
var meme16 = document.getElementById('meme16');
var canvascenterdiv = document.getElementById("centercanvasdiv");

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
    drawImage();
}


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    meme11.width = meme11.width/2;
    meme11.height = meme11.height/2;

    meme12.width = meme12.width/2;
    meme12.height = meme12.height/2;

    meme13.width = meme13.width/2;
    meme13.height = meme13.height/2;

    meme14.width = meme14.width/2;
    meme14.height = meme14.height/2;

    meme15.width = meme15.width/2;
    meme15.height = meme15.height/2;

    meme16.width = meme16.width/2;
    meme16.height = meme16.height/2;

    canvascenterdiv.classList.remove("example-div");
    document.getElementById('h1meme').style.fontSize = 'large';
}



