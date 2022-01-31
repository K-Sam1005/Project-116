var noseX = 0;
var noseY = 0;

function preload(){
    mustache_img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x - 150;
        noseY = result[0].pose.nose.y - 90;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}

function draw(){
    image(video,0,0,400,300);

    image(mustache_img, noseX, noseY, 60, 30);
}

function take_snapshot(){
    save("captured-image.png");
}