const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `Time ${hours}:${minutes}:${seconds}`;
    clock.style.color = "#FFDEE3"
}

getClock()
setInterval(getClock, 1000)