document.getElementById("colorButton").addEventListener("click", function () {
    document.body.style.backgroundColor = genRandColor();
});

// genRandColor();
function genRandColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = "";
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random()*16);
        color += hex[rand];
    }
    color = "#" + color;
    console.log(color)
    return color;
}
