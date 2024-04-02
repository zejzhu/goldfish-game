const AFRAME = window.AFRAME;
AFRAME.registerComponent('rotation-reader', {
    tick: function() {
        var pinkBox = document.getElementById('pinkBox')
        var plane = document.getElementById('plane')
        var rotation = this.el.getAttribute('rotation');
        var colors = ['#FF0000', '#00FF00', '#0000FF',  '#FFFF00']; // List of colors
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
      var delayInMilliseconds = 5000; //5 seconds
      
        if (rotation.x > 45)  {
            console.log('You made it out')
          setTimeout(function() {pinkBox.setAttribute('color', 'blue');}, delayInMilliseconds);
        } 
            
      else {
          console.log ('Oops try again')
          pinkBox.setAttribute('color', '#FF00FF');
          plane.setAttribute('color', '#4b5320');
        }    
    }
});
