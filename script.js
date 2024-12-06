const heartbtn = document.getElementById("heart-btn");
const heartimage = document.getElementById("heart");

let xOffset = 0;
let yOffset = 0;

function heartmaker() {
  // Increment the offset values
  xOffset += 200;
  yOffset += 0;

  const heartClone = heartimage.cloneNode(true);
  document.body.appendChild(heartClone);

  if (xOffset > window.innerWidth) {
    xOffset = 0;
  }

  heartClone.style.left = `${xOffset}px`;

  console.log("moved");
}
