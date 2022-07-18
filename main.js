x = 0;
y = 0;
screen_width=0;
screen_height=0;
draw_apple = "";
apple="";
speak_dat="";
to_num=0;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_num=Number(content);
if(Number.isInteger(to_num)){
  document.getElementById("status").innerHTML="started drawing apple";
  draw_apple="set";

}
else{
  document.getElementById("status").innerHTML="System has not recognised the number";
}
}

function preload(){
  apple=loadImage("apple.png");
}
function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
 canvas=createCanvas(screen_width,screen_height-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")

  {
    for(var i=1;i<=to_num;i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*300);
      image(apple,x,y,35,35);
    }
    document.getElementById("status").innerHTML = to_num + " Apples drawn";
    draw_apple = "";
    speak_data= to_num+"Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
