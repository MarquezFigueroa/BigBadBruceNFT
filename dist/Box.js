// Registrando el componente en box-component.js
AFRAME.registerComponent('move-box-on-click', {
    schema: {
      moveX: { type: "number", default: 1 },
    },
    tick: function () {
  
      window.addEventListener("click", (e) => {   
        
        if(this.data.moveX>1 && this.data.moveX<2 ){
          this.data.moveX = this.data.moveX +0.00005;
        }
        else{
          this.data.moveX=0;

        }
        
  
      });
      var pos = this.el.getAttribute("position");
      pos.x = pos.x + this.data.moveX;
      this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
    });


    AFRAME.registerComponent('change-image-on-click', {
      init: function () {
        var el = this.el;
        var material = el.getAttribute('material');
        var images = ['assets/BBB1.png', 'assets/BBB2.png', 'assets/BBB3.png'];
        var currentImage = 0;

        el.addEventListener('click', function () {
          currentImage++;
          if (currentImage >= images.length) {
            currentImage = 0;
          }
          material.src = images[currentImage];
        });
      }
    });

    AFRAME.registerComponent('move-box-on-click1', {
      schema: {
        moveX: { type: "number", default: 0 },
      },
      tick: function () {
    
        window.addEventListener("click", (e) => {   
    
          this.data.moveX = this.data.moveX +0.005;
    
        });
        var pos = this.el.getAttribute("position");
        pos.x = pos.x + this.data.moveX;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
      }
      });