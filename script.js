function changeStyle(style) {
      var body = document.querySelector("body");
      
      body.className = "";

      body.classList.add(style);
    }