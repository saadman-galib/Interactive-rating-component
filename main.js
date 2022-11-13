var numberList = document.querySelectorAll(".number");
var rate = document.getElementById("rate");
var select = document.getElementById("select");
var selectp = document.getElementById("select-p");
var value;
var prevSelect;
var isClicked = false;
var button = document.getElementById("btn");

numberList.forEach((e) => {
    e.addEventListener("click", () => {
        value = e.innerHTML;
        e.classList.remove("bg-[#262F38]");
        e.classList.remove("text-[#828B94]");
        e.classList.add("bg-[#F57528]");
        e.classList.add("text-white");
        isClicked = prevSelect ? true : false;
        if (isClicked) {
            prevSelect.classList.remove("bg-[#F57528]");
            prevSelect.classList.remove("text-white");
            prevSelect.classList.add("bg-[#262F38]");
            prevSelect.classList.add("text-[#828B94]");
        }
        prevSelect = e;
    });
});

button.addEventListener("click", () => {
    rate.classList.add("hidden");
    select.classList.remove("hidden");
    selectp.innerHTML = "You selected " + value + " out of 5";
});
