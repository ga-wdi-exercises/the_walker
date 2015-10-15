// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;

// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him
