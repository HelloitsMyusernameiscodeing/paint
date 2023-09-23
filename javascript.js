canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
var color
var radius
var height
var mouseEvent

canvas.addEventListener("myMouseDown,my_MouseDown");
function my_MouseDown(e){
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("myMouseUp,my_MouseUp");
function my_MouseUp(e){
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}