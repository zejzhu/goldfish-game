AFRAME.registerComponent('rotation-reader, {
    tick: function() {
        var rotation = this.el.getAttribute('rotation');
        if (rotation.y >= 45) {
            print('You made it out')
            background-color = "blue"
        }
    }
});


//stackoverflow: how to listen to changes in the rotation of the camera in A-frame?
