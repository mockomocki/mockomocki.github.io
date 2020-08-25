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
var canvaswidthandheight = 500;
var yes80 = 80;
var yes320 = 320;
var yes40neg = -40;
var yes130 = 130;
var yes300 = 300;
var yes160 = 160;
var yes200 = 200;
var yes340 = 340;
var yes230 = 230;
var yes120 = 120;
var yes220 = 220;
var yes100 = 100;
var yes60 = 60;
var yes270 = 270;
var yes250 = 250;
var yes20 = 20;



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
             ctx.drawImage(img, 0, 0, canvaswidthandheight, canvaswidthandheight);
             canvasTxt.drawText(ctx, text, 0,  yes40neg, yes230, yes200);
             canvasTxt.drawText(ctx, text2, 0, yes80, yes230, yes200);
             canvasTxt.drawText(ctx, text3, 0, yes200, yes230, yes200);
             canvasTxt.drawText(ctx, text4, 0, yes320, yes230, yes200);

         };
         img.src = imagesource;
     }else if (imagesource === "meme14.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, canvaswidthandheight, canvaswidthandheight);
             canvasTxt.drawText(ctx, text, 0, yes40neg, yes230, yes200);
             canvasTxt.drawText(ctx, text2, 0, yes130, yes230, yes200);
             canvasTxt.drawText(ctx, text3, 0, yes300, yes230, yes200);

         };
         img.src = imagesource;
     }else if (imagesource === "meme15.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, canvaswidthandheight, canvaswidthandheight);
             canvasTxt.drawText(ctx, text, yes200, yes160, yes120, yes220);
             canvasTxt.drawText(ctx, text2, yes340, yes160, yes120, yes200);

         };
         img.src = imagesource;
     }else if (imagesource === "meme16.png"){
         img.onload = function(){
             ctx.drawImage(img, 0, 0, canvaswidthandheight, canvaswidthandheight);
             canvasTxt.drawText(ctx, text, yes60, yes250, yes120, yes100);
             canvasTxt.drawText(ctx, text2, yes220, yes20, yes120, yes100);

         };
         img.src = imagesource;
     }else {
         img.onload = function(){
             ctx.drawImage(img, 0, 0, canvaswidthandheight, canvaswidthandheight);
             canvasTxt.drawText(ctx, text, yes250, yes20, yes230, yes200);
             canvasTxt.drawText(ctx, text2, yes250, yes270, yes230, yes200);

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
    mobiletrue = true;
}else {
    mobiletrue = false;
}



if(mobiletrue === true){
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

    canvaswidthandheight = 250;

    var x = document.getElementsByTagName("button");
    for ( i = 0; i < x.length; i++) {
        x[i].style.marginTop = "1vw";
    }

     yes80 = 80/2;
     yes320 = 320/2;
     yes40neg = -40/2;
     yes130 = 130/2;
     yes300 = 300/2;
     yes160 = 160/2;
     yes200 = 200/2;
     yes340 = 340/2;
     yes230 = 230/2;
     yes120 = 120/2;
     yes220 = 220/2;
     yes100 = 100/2;
     yes60 = 60/2;
     yes270 = 270/2;
     yes250 = 250/2;
     yes20 = 20/2;
}
