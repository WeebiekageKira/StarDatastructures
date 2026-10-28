
let stars = [];
let starPosition = [];

function setup() {
  createCanvas(800, 600);
  background("lightblue");
  // Print object in console.
 
}
function draw() {
   for (i = 0; i <= 10; i++){
    drawStar(createStar());
    sp = starPosition[i];
    text('⭐', sp[0], sp[1], 50, 50);
  }
  
  textSize(100);
  
}



function createStar(){
  let star = {
    x: random(0, 800),
    y: random(0, 600),
    emoji: '⭐',
  };
  return star;
}

function drawStar(star){
  //text(star.emoji, star.x, star.y, 50, 50);
  starPosition.push([star.x, star.y]);
}