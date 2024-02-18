let input = document.querySelector("input"),
    button = document.querySelector("button"),
    result = document.querySelector("div")
    console.log(input.value);

button.addEventListener("click", () => {
       return result.innerHTML= input.value.split("").reverse().join("")
    })