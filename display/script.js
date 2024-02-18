let plus = document.querySelectorAll(".fa-plus"),
    text = document.querySelectorAll(".text");

plus.forEach(function(item, index) {
    item.addEventListener("click", function () {
        // Tıklandığında ilgili text öğesinin görünürlüğünü değiştir
        text[index].style.display = text[index].style.display === "block" ? "none" : "block";
    });
});
