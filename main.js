var prediction =""

Webcam.attach('#camera');
camera=document.getElementById("camera")
Webcam.set({
    width:350,
    height:300, 
    image_format:'png',
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-ks1u5stZ/',modelLoaded);


function modelLoaded(){
    console.log('model Loaded')
    speak()
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = " the prediction is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
};