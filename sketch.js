let noiseVal;
let rX;
let rXS=[];
let rYS=[];
let rZS=[];
let rRS=[];
let rGS=[];
let rBS=[];
var noises=[];
let x=0;
let y=0;
let z=0;
let theTrip;
function preload(){
    theTrip = loadSound("theTrip.mp3");
}
function setup(){
    userStartAudio();
    theTrip.play();
    fft=new p5.FFT();
    createCanvas(windowWidth,windowHeight,WEBGL);
    rX=random(0,300);
}
function draw(){
    background(0);
    let spectrum = fft.analyze();
    for (var i = 0; i< spectrum.length; i+=40){
      let xSound = map(i, 0, spectrum.length, 0-width/2, width);
      let hSound = map(spectrum[i], 0, 255, height,0-height/2);
      var rX=random(0,75);
      rXS.push(rX);
      var rY=random(0,75);
      rYS.push(rY);
      var rZ=random(0,75);
      rZS.push(rZ);
      var rR=random(50,255);
      rRS.push(rR);
      var rG=random(0,50);
      rGS.push(rG)
      var rB=random(0,255);
      rBS.push(rB)
      var noise = new createNoiseLines(xSound,hSound);
      noises.push(noise);
    }
    orbitControl();
    pointLight(255,255,255,0, 0, 0);
    pointLight(255,255,255,0, 0, 2000);
    //pointLight(255,255,255,0,-100,-100);
    if (mouseIsPressed&&keyIsPressed==false){
        // var rX=random(0,75);
        // rXS.push(rX);
        // var rY=random(0,75);
        // rYS.push(rY);
        // var rZ=random(0,75);
        // rZS.push(rZ);
        // var rR=random(50,255);
        // rRS.push(rR);
        // var rG=random(0,255);
        // rGS.push(rG)
        // var rB=random(0,100);
        // rBS.push(rB)
        // var noise = new createNoiseLines(mouseX,mouseY);
        // noises.push(noise); 
    }
    for(var i=0; i<noises.length;i++){
        noises[i].display();
    }
}
function createNoiseLines(x,y){
    this.x1=x;
    this.y1=y;
    for(var i=0;i<rXS.length;i++){
    this.display=function(){
        rotateZ(this.y1);
        rotateX(this.y1);
        rotateY(this.y1);
        push();
        translate(0,0,-200)
        translate(this.x1-width/2,this.y1-height/2,rZS[i]+=60);
        // rotate(z+=.0001);
        ambientMaterial(rRS[i],rGS[i],rBS[i]);
        if(rZS[i]<=2000&&rZS[i]>=-2000&&rXS[i]<=2000&&rXS[i]>=-2000&&rYS[i]<=2000&&rYS[i]>=-2000){
        noStroke();
        box((rXS[i]),(rYS[i]),this.y1/5);
        }
        pop();
    }
}
}
// function cameraRig(){

//     if(keyCode==RIGHT_ARROW){
//     translate(x++,y,0);
//     }
//     else if(keyCode==LEFT_ARROW){
//         translate(x--,y,0);
//     }
//     else if(keyCode==UP_ARROW){
//         translate(x,y--,0)
//     }
//     else if(keyCode==DOWN_ARROW){
//         translate(x,y++,0)
//     }

// }