function preload(){

}
function setup(){
canvas=createCanvas(300,301);
canvas.center();
video=createCapture(VIDEO);
video.size(300,301);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("El modelo esta cargado");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nariz x: "+results[0].pose.nose.x);
    console.log("nariz y: "+results[0].pose.nose.y);


}
}
function draw(){
image(video,0,0,300,301);
}