var kelpCount = 0;

// INTERACT WITH OBJECTS
AFRAME.registerComponent("interact-highlight", {
  init: function () {
    // Wait for model to load.
    this.el.addEventListener("model-loaded", () => {
      this.el.addEventListener("mouseenter", this.mouseenter);
      this.el.addEventListener("mouseleave", this.mouseleave);
    });
  },
  mouseenter(evt) {
    //on hover, do this
    const model = evt.target.getObject3D("mesh");
    model.traverse((obj) => {
      if (!obj.material) return;
      obj.material.color.setHex(0xff9968);
    });
  },
  mouseleave(evt) {
    //on exit hover, do this
    const model = evt.target.getObject3D("mesh");
    model.traverse((obj) => {
      if (!obj.material) return;
      obj.material.color.setHex(0xffffff);
    });
  }
});

// TRIGGER EVENTS WITH CLICKS
AFRAME.registerComponent("click-kelp", {
  //When the kelp is clicked
  init: function () {
    // Wait for model to load.
    console.log(kelpCount);
    this.el.addEventListener("model-loaded", () => {
      this.el.addEventListener("click", this.click);
    });
  },
  click(evt) {
    console.log("clicked kelp");
    kelpCount++;
    holder = kelpCount;
    console.log(holder);

    var fog = document.getElementById("purp-fog");
    if (holder == 1) {
      var textbox = document.getElementById("kelp-1");
      textbox.object3D.visible = true;
      fog.setAttribute("far", "90"); //fog enters
    }
    if (holder == 2) {
      var textbox = document.getElementById("kelp-1");
      textbox.object3D.visible = true;
      fog.setAttribute("far", "30"); //fog strong
    }
    if (holder == 3) {
      //transition to kelp death scene - KEVIN
      //flush scene into kelp death scene
      var bgm = document.getElementById("fish-tank");
      bgm.pause();
      document.getElementById("main-scene").style.display = "none";
      document.getElementById("kelp-scene").style.display = "block";
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "h") {
        textbox.object3D.visible = false;
      }
    });
  }
});

AFRAME.registerComponent("click-note", {
  //When the note is clicked
  init: function () {
    // Wait for model to load.
    this.el.addEventListener("model-loaded", () => {
      this.el.addEventListener("click", this.click);
    });
  },
  click(evt) {
    //do stuff here when note clicked
    console.log("clicked note");
    //show textbox
    var textbox = document.getElementById("note-1");
    textbox.object3D.visible = true;

    document.addEventListener("keydown", function (event) {
      if (event.key === "h") {
        textbox.object3D.visible = false;
      }
    });
  }
});

//one min
AFRAME.registerComponent("one-min", {
  init: function () {
    // Wait for model to load.
    var fog = document.getElementById("green-fog");
    this.el.addEventListener("model-loaded", () => {
      var textbox = document.getElementById("you-1");
      var next = document.getElementById("nar-2");
      var delayInMilliseconds = 60000; //60 seconds
      var count = 0;

      setTimeout(function () {
        textbox.object3D.visible = true; //code to be executed after 60 seconds
        fog.setAttribute("far", "90"); //fog enters
      }, delayInMilliseconds);

      document.addEventListener("keydown", function (event) {
        if (event.key === "h") {
          textbox.object3D.visible = false;
          if (count == 0) {
            next.object3D.visible = true;
            count++;
          }
          textbox = next;
        }
      });
    });
  }
});
//two min
AFRAME.registerComponent("two-min", {
  init: function () {
    // Wait for model to load.
    var fog = document.getElementById("green-fog");
    this.el.addEventListener("model-loaded", () => {
      var textbox = document.getElementById("you-3");
      var delayInMilliseconds = 120000; //120 seconds

      setTimeout(function () {
        textbox.object3D.visible = true; //code to be executed after 120 seconds
        fog.setAttribute("far", "30"); //fog enters
      }, delayInMilliseconds);

      document.addEventListener("keydown", function (event) {
        if (event.key === "h") {
          textbox.object3D.visible = false;
        }
      });
    });
  }
});

//three min
AFRAME.registerComponent("three-min", {
  init: function () {
    // Wait for model to load.
    this.el.addEventListener("model-loaded", () => {
      var delayInMilliseconds = 180000; //180 seconds

      setTimeout(function () {
        //algae death transition goes here  - KEVIN
        //code here will be executed after 3 min
        var bgm = document.getElementById("fish-tank");
        bgm.pause();
        document.getElementById("main-scene").style.display = "none";
        document.getElementById("algae-scene").style.display = "block";
      }, delayInMilliseconds);
    });
  }
});

// CAMERA ROTATION
AFRAME.registerComponent("rotation-reader", {
    tick: function() {
      var rotation = this.el.getAttribute('rotation');
    var delayInMilliseconds = 10000; //10 seconds
    
      if (rotation.x > 45)  {
          console.log('rotation: up')
        setTimeout(function() {
          //trigger good ending
          var bgm = document.getElementById("fish-tank");
          bgm.pause();
          document.getElementById("main-scene").style.display = "none";
          document.getElementById("lake-scene").style.display = "block";
        }, delayInMilliseconds);
      } 
          
    else {
        console.log ('Oops try again')
        pinkBox.setAttribute('color', '#FF00FF');
        plane.setAttribute('color', '#4b5320');
      }    
  }
});

//Ending scene textbox
AFRAME.registerComponent("close-nar", {
  init: function () {
    // Wait for model to load.
    this.el.addEventListener("model-loaded", () => {
      var textbox = document.getElementById("nar-3");
      var delayInMilliseconds = 3000; //3 seconds

      setTimeout(function () { //textbox enters
        textbox.object3D.visible = true; 
      }, delayInMilliseconds);

      document.addEventListener("keydown", function (event) {
        if (event.key === "h") {
          textbox.object3D.visible = false;
          //trigger switch to end screen
          //wait another 3 seconds before switching
          setTimeout(function () { //scene changes
            document.getElementById("lake-scene").style.display = "none";
            document.getElementById("lake-end").style.display = "block";
          }, delayInMilliseconds);
          
        }
      });
    });
  }
});