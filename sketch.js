var gamestate=0;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10 ;
var form ;
var a1 , a2 , a3 ;
var b1,b2,b3 ; 
var score=0;

function preload(){
e1=loadImage("images/easy/1.jfif");
e2=loadImage("images/easy/2.jfif");
e3=loadImage("images/easy/3.jfif");
e4=loadImage("images/easy/4.jfif");
e5=loadImage("images/easy/5.jfif");
e6=loadImage("images/easy/6.jfif");
e7=loadImage("images/easy/7.jfif");
e8=loadImage("images/easy/8.jfif");
e9=loadImage("images/easy/9.jfif");
e10=loadImage("images/easy/10.jfif");

}

function setup(){
  canvas = createCanvas(displayWidth - 20 , displayHeight-140);
  a1=[e1,e2,e3,e4,e5];
  a2=[e6,e7,e8,e9,e10];
  a3=[e1,e6,e4,e9,e3];
  b1=["a","b","c","d","e"];
  b2=["a","b","c","d","e"];
  b3=["a","b","c","d","e"];

  var r=Math.round(random(1,3));
  if(r===1){
   form =new FORM (a1,b1);
  }
  if(r===2){
    form =new FORM (a2,b2);
   }
  if(r===3){
    form =new FORM (a3,b3);
   }
}

 
function draw(){

background("red");


stroke(0,0,0);
textSize(40);
text("PICTURE IDENTIFICATION ",550,170);

 if(gamestate===0){
   form.display();
 }
 if(gamestate===1){
   form.displayoption();
   
 }
 if(gamestate===2){
  form.easymodule();
}
if(gamestate===3){
  form.easyscore();
}
}
