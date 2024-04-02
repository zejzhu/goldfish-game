AFRAME.registerComponent('interact-highlight', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        this.el.addEventListener('mouseenter', this.mouseenter);
        this.el.addEventListener('mouseleave', this.mouseleave);
        this.el.addEventListener('click', this.click);
      })
    },
    mouseenter(evt) { //on hover, do this
        const model = evt.target.getObject3D('mesh');
        model.traverse((obj) => {
            if (!obj.material) return
            obj.material.color.setHex(0xFF9968)
        })
    },
    mouseleave(evt) { //on exit hover, do this
        const model = evt.target.getObject3D('mesh');
        model.traverse((obj) => {
            if (!obj.material) return
            obj.material.color.setHex(0xFFFFFF)
        })
    }
});

AFRAME.registerComponent('click-kelp', { //When the kelp is clicked
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        this.el.addEventListener('click', this.click);
      })
    },
    click(evt){
        //do stuff here when kelp clicked
        console.log("clicked");
    }
});

AFRAME.registerComponent('click-note', { //When the note is clicked
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        this.el.addEventListener('click', this.click);
      })
    },
    click(evt){
        //do stuff here when note clicked
        console.log("clicked");
    }
});

AFRAME.registerComponent('rotation-reader', { // Camera

    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();

      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })()
  });