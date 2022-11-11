AFRAME.registerComponent('markerhandler', {
    init: function () {
        btn = document.querySelector(".wrap");
            
        this.el.sceneEl.addEventListener('markerFound', () => {
            btn.style.display = "flex";
        })

        this.el.sceneEl.addEventListener('markerLost', () => {
            btn.style.display = "none";
        })
    }
});

