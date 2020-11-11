function generateName() {
  var name = document.createElement("div")
  name.className = "new";
  name.innerHTML = "This is a paragraph.";
  document.body.appendChild(name);
  setTimeout(function(){$(name).remove();}, 3000);
  setTimeout(generateName, 1000)
}


function getRandomName() {
  const names
}

/* 
var context;
var text = ""; */

/* $(function test() {
  context = document.getElementById("cvs").getContext("2d");
  setInterval("animate()", 30);

  textXpos = 200;
  text = "Test";
  setTimeout(test, 2000)
}); */

/* function animate() {
  topBound = 0;
  bottomBound = screen.height;
  leftBound = 0;
  rightBound = screen.width;

  // Clear screen
  context.clearRect(0, 0, rightBound, bottomBound);
  context.globalAlpha = 1;
  context.fillStyle = '#000';
  //context.fillRect(0, 0, rightBound, bottomBound);

  var metrics = context.measureText(text);
  var textWidth = metrics.width;

  if (textXpos < 10) {
    textXpos = 200;
  } else {
    textXpos -= 1;
  }

  context.font = '20px _sans';
  context.fillStyle = '#FF0000';
  context.textBaseline = 'top';
  context.fillText( text, textXpos, 100);    
} */