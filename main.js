status = "";

function preload() {

}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center()
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Laoded!!")
    status = true;
    objectDetecter.detect(img, gotResult);
} 
function gotResult() {

}