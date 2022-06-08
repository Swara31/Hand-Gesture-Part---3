var preediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


camera=document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version=',ml5.version);

Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j06oPbAkP/model.json',modelloaded);


function modelloaded()
    {
        console.log('modelloaded');
    }


function speak()
{
    var Synth=window.speechSynthesis;
    speakdata="The prediction is "+preediction;
    var Utterthis=new SpeechSynthesisUtterance(speakdata);
    Synth.speak(Utterthis);
}

function check()
{
    img = document.getElementById('captured_img');
    Classifier.classify(img,gotresult);
}


function gotresult(error,results)
{
 if(error)
 {
     console.error(error);
 }
 else
 {
     console.log(results);
     document.getElementById("result_emotion_name").innerHTML=results[0].label;
     preediction=results[0].label;
     

     speak();

    if(results[0].label == "Hand Raised")
    {
        document.getElementById("update_emoji").innerHTML="&#9995;";
        document.getElementById("result").innerHTML='<p>Have a doubt</p>';
    }


    if(results[0].label == "Victory")
    {
        document.getElementById("update_emoji").innerHTML="&#9996;";
        document.getElementById("result").innerHTML='<p>Have a doubt</p>';
        
    }


    if(results[0].label == "Hii")
    {
        document.getElementById("update_emoji").innerHTML="&#128075;";
        document.getElementById("result").innerHTML='<p>Have a doubt</p>';
    }


    if(results[0].label == "Amazing")
    {
        document.getElementById("update_emoji").innerHTML="&#128076;";
        document.getElementById("result").innerHTML='<p>Have a doubt</p>';
    }


    if(results[0].label == "Best")
    {
        document.getElementById("update_emoji").innerHTML="&#128077;";
        document.getElementById("result").innerHTML='<p>Have a doubt</p>';
    }

    if(results[0].label == "Thumb Down")
    {
        document.getElementById("update_emoji").innerHTML="&#128078;";
        document.getElementById("result").innerHTML='<p>Have a doubt</p>';
    }

   
}
}