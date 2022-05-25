function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JH7PIYu-L/model.json', modelReady);
} 
function modelReady(){
    Classifier.classify(gotResults);
}
function gotResults(error, results){
console.log("gotResult");
if(error){
    console.error(error);
}else{
    console.log(results);
    random_number_r= Math.floor(Math.random()*255)+1;
    random_number_g= Math.floor(Math.random()*255)+1;
    random_number_b= Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;
document.getElementById("result_confidence_label").innerHTML='Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_number_r+","+ random_number_g+","+random_number_r+")";
document.getElementById("result_confidence_label").style.color="rgb("+random_number_r+","+ random_number_g+","+random_number_r+")";
img=document.getElementById("Dog");
img1=document.getElementById("Cat");
img2=document.getElementById("Lion");
img3=document.getElementById("Cow");
if(results[0].label=="Barking"){
    img.src='Dog2.jpg';
    img1.src='Cat.jpg';
    img2.src='Lion.jpg';
    img3.src='Cow.jpg';
}else if(results[0].label=="Meowing"){
    img.src='Dog.jpg';
    img1.src='Cat2.jpg';
    img2.src='Lion.jpg';
    img3.src='Cow.jpg';
}else if(results[0].label=="Roaring"){
    img.src='Dog.jpg';
    img1.src='Cat.jpg';
    img2.src='Lion2.jpg';
    img3.src='Cow.jpg';
}else if(results[0].label=="Mooing"){
    img.src='Dog.jpg';
    img1.src='Cat.jpg';
    img2.src='Lion.jpg';
    img3.src='Cow2.jpg';
}else{
    img.src='Dog.jpg';
    img1.src='Cat.jpg';
    img2.src='Lion.jpg';
    img3.src='Cow.jpg';
}
}
}