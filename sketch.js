
let stars = [];
let starPosition = [];
let starSize = 50;

function setup() {
  createCanvas(800, 600);
  background("lightblue");
  for (i = 0; i <= 10; i++){
    
    stars[i] = createStar();
    }
  console.log(stars);
  // Print object in console.
}

function draw() {
  background("lightblue");
   for (i = 0; i <= 10; i++){
    drawStar(stars[i]);
        stars[i].size = Math.sin(i+millis() * 0.008) * 10 + 50;

    }
  // updateStar();
  }

  // function updateStar(){
  //   for (let star of starPosition){
  //     starPosition.Size += 1;
  //   }
  // }
  

  




function createStar(){
  let star = {
    x: random(0, 800),
    y: random(0, 600),
    size: 50,
    emoji: '⭐',
  };
  return star;
}

function drawStar(star){
  textSize(star.size)
  text(star.emoji, star.x, star.y, star.size, star.size);
  // starPosition.push([star.x, star.y, star.size]);
}