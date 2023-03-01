var wheel = document.querySelector('#wheel');
var pointer = document.querySelector('#pointer');

var isDragging = false;
var lastAngle = 0;
var currentAngle = 0;

wheel.addEventListener('mousedown', function(e) {
  isDragging = true;
  lastAngle = getAngle(e.clientX, e.clientY);
});

wheel.addEventListener('mousemove', function(e) {
  if (!isDragging) {
    return;
  }
  
  currentAngle = getAngle(e.clientX, e.clientY);
  rotate(currentAngle - lastAngle);
  lastAngle = currentAngle;
});

wheel.addEventListener('mouseup', function(e) {
  isDragging = false;
});

function getAngle(x, y) {
  var dx = x - wheel.offsetLeft - wheel.offsetWidth / 2;
  var dy = y - wheel.offsetTop - wheel.offsetHeight / 2;
  var angle = Math.atan2(dy, dx);
  
  return angle;
}

function rotate(angle) {
  var rotation = 'rotate(' + angle + 'rad)';
  wheel.style.transform = rotation;
  
  var pointerRotation = 'rotate(' + (-angle) + 'rad)';
  pointer.style.transform = pointerRotation;
}
