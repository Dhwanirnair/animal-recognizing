var dog = 0;
var cat = 0;
var other = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gaGqmJUX8/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }else
    {
        console.log(results);
        random_color_r = Math.floor(Math.random() * 255) + 1;
        random_color_g = Math.floor(Math.random() * 255) + 1;
        random_color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_count").innerHTML = "" + results[0].label;
        document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_color_r + ", " + random_color_g + ", " + random_color_b + ")" ;
        document.getElementById("result_count").style.color = "rgb(" + random_color_r + ", " + random_color_g + ", " + random_color_b + ")";

        img = document.getElementById("image");

        if (results[0].label == "Bark") 
        {
           img.src = "dog.GIF"; 
        }else if (results[0].label == "Meow")
        {
            img.src = "cat.GIF";
        }else
        {
            img3.src = "listen.GIF"; 
        }
}
}