let number1 = document.querySelector("#num1"),
    number2 = document.querySelector("#num2"),
    toplama = document.querySelector(".top"),
    cixma = document.querySelector(".cix"),
    vurma = document.querySelector(".vur"),
    bolme = document.querySelector(".bol"),
    result = document.querySelector(".result"),
    clear = document.querySelector(".clear");

toplama.addEventListener("click", () => {
    result.textContent=parseInt(number1.value)+parseInt(number2.value)
});
cixma.addEventListener("click", () => {
    result.textContent=parseInt(number1.value)-parseInt(number2.value)
})
clear.addEventListener("click", () => {
    number1.value =''
    number2.value = ''
    result.textContent=''
})
vurma.addEventListener("click", () => {
    result.textContent=parseInt(number1.value)*parseInt(number2.value)
})
bolme.addEventListener("click", () => {
    if (number2 === 0) {
        result.innerHTML="0-a bolme yoxdur"
    } else {
    result.textContent=parseInt(number1.value)/parseInt(number2.value)
        
    }
})
