function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JH7PIYu-L/model.json', modelReady);
} 
function modelReady(){
    Classifier.classify(gotResults);
}
function gotResults(error, results){
console.log("gotResult");
}