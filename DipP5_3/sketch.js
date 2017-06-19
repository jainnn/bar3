//var x = 0;


function setup(){ 
    createCanvas(windowWidth,windowHeight); 
    background(255);
    //stroke (0,0,255);
    noStroke();
    smooth(); 
}
 
function draw(){

    for (var i = 0; i < width; i+=50) { 
       // fill(255, 255, 255, 30); 
         colorMode(RGB);
       fill(30, random(100,255), random(100,255))
       // ellipse(i, noise(i*0.09, frameCount*0.007) * height, 9, 9); 
      rectMode(CENTER);
 rect(i, noise(i*0.5, frameCount*0.005) * height, 10,10);
    }
    
  for (var i = 0; i < width; i+=70) { 
    colorMode(HSB,360,100,100,1);
    
  fill(220, 0, 100)
  rect(i, noise(i*0.01, frameCount*0.005) * height, 230,150);

    }
    
    for (var i = 0; i < width; i+=50) { 
    colorMode(HSB,360,100,100,1);
    
  fill(220, 100, 100)
  rect(i, noise(i*0.03, frameCount*0.01) * height, 10,50);

    }
}