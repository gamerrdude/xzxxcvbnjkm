function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/b55-e1K-p/', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}