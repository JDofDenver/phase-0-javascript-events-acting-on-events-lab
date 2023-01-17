

const dodger = document.getElementById("dodger");
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

up.addEventListener("click",moveDodgerUp);
down.addEventListener("click",moveDodgerDown);
left.addEventListener("click",moveDodgerLeft);
right.addEventListener("click",moveDodgerRight);

dodger.style.backgroundColor = "#FF69B4";

//dodger.style.bottom = "0px";
//dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });

  
  function moveDodgerUp() {
    const topNumbers = dodger.style.bottom.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top < 360) {
      dodger.style.bottom = `${top + 5}px`;
    }
  }

  function moveDodgerDown() {
    const topNumbers = dodger.style.bottom.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top > 0) {
      dodger.style.bottom = `${top - 5}px`;
    }
  }

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }
  function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360){
        dodger.style.left = `${left +5}px`;
    }
  }

  
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        moveDodgerLeft();
        break;
      case "ArrowRight":
        moveDodgerRight();
        break;
      case "ArrowUp":
        moveDodgerUp();
        break;
      case "ArrowDown":
        moveDodgerDown();
        break;
    }
  });
  
  
  
  
  
  