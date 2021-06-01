Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    image_quality: 90
});
cameramytho = document.getElementById("webcam");

Webcam.attach(cameramytho);

console.log(cameramytho);
//the function to capture the clicked img

function snapfunc() {
    Webcam.snap(function(data_uri){
        document.getElementById("resultofcam").innerHTML = '<img id="imageclicked" src="' + data_uri + '">'
    })
    console.log("Tis snapping")
}

// var to integrate teachable machine in website

var classifytheimg = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vA-Kjk7Dh/model.json',Modeldobeloaded);

// just some func that needs to be called (#ignoreifpossible)

function Modeldobeloaded() {
    console.log("Model do be loaded")
}

// the func to check from teachable machine

function check() {
    var animage = document.getElementById("imageclicked");
    classifier.classify(animage, gotResult);
}

// the func to give result
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML = "Object : " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy : " + results[0].confidence.toFixed(3);
    }
}