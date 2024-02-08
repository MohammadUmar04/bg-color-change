function changeBackgroundColor() {
 
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = randomColor;
}