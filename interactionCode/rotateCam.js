const AFRAME = window.AFRAME;
AFRAME.registerComponent('rotation-reader', {
    tick: function() {
        var pinkBox = document.getElementByID('pinkBox')
        var plane = document.getElementByID('plane')
        var rotation = this.el.getAttribute('rotation');
        var colors = ['#FF0000', '#00FF00', '#0000FF',  
                    '#FFFF00']; // List of colors
        var cam = document.getElementByID('cam')
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
      
        if (rotation.y > 0)  {
            print('You made it out')
            pinkBox.setAttribute('color', randomColor)
            plane.setAttribute('color', 'blue')
        }
      if (rotation.x > 0)  {
            print('You made it out')
            pinkBox.setAttribute('color', randomColor)
            plane.setAttribute('color', 'blue')
        }
      
    }
});
