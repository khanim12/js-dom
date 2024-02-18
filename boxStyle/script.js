let input = document.querySelectorAll("input"),
    style = document.querySelector("#style"),
    b_color = document.querySelector("#b_color"),
    color = document.querySelector("#color"),
  bg_color = document.querySelector("#bg_color"),

  
  box = document.querySelector(".box"),
  ok = document.querySelector(".ok");
ok.addEventListener("click", () => {
  box.style.width = parseInt(input[0].value) + "px";
  box.style.height = parseInt(input[1].value) + "px";
    box.style.borderWidth = parseInt(input[2].value) + "px";
    style.addEventListener("change", function () {
        let selectedStyle = this.value;
        box.style.borderStyle = selectedStyle;
      });
    b_color.addEventListener("change",function() {
        let selectedStyle = this.value;
        box.style.borderColor = selectedStyle
        console.log( box.style.borderColor = selectedStyle);
    });
    bg_color.addEventListener("change",function() {
        let selectedStyle = this.value;
        box.style.backgroundColor=selectedStyle
    })
color.addEventListener("change", function(){
        let selectedStyle = this.value;
        box.style.color=selectedStyle
      })
});
