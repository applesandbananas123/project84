canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";
rover_imange = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width , rover_height);

}