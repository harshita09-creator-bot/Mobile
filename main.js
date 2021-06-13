Webcam.set({
    width: 310,
    height: 200,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera')

function get_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera2").innerHTML = "<img id = 'captured_Image' src = '"+ data_uri+"'/>";
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('Mobilenet', modelLoaded);

function modelLoaded(){
    console.log("hi")
}
function snap_img(){
    img = document.getElementById("captured_Image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("result").innerHTML= results[0].label;
    }
}