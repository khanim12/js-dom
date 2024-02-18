let input = document.querySelectorAll("input"),
    select = document.querySelectorAll("select"),
    box = document.querySelector(".box"),
    ok = document.querySelector(".ok")
ok.addEventListener("click", () => {
    box.style.width =200+ parseInt(input[0].value) + "px"
    box.style.height=parseInt(input[1].value)+ "px"
    box.style.borderWidth=parseInt(input[2].value)+ "px"
    
})