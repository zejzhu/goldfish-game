document.addEventListener('keydown', function(event){ 
    var pressObject = document.getElementById('pressObject'); 
    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']; // List of colors
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color
    
        if (event.key === 'h'){
        pressObject.setAttribute('color', randomColor) //change object color on click
        }
    })  