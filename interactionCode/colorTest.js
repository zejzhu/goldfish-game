document.addEventListener('DOMContentLoaded', function() {
      var colorObject = document.getElementById('colorObject'); //fetch box that we will change color on 

      colorObject.addEventListener('click', function(){ //Listen for click event
        // Change the color of the clicked object
        var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']; // List of colors
        var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color
        colorObject.setAttribute('color', randomColor); // Change the color
      });
    });