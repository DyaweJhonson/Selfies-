var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textBox").innerHTML="";
    recognition.start();

}
recognition.onresult= function(event)
{
    console.log(event);
    var content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if (content == "take my selfie")
    {
        console.log("Taking Selfie");
        speak();
    }
    speak();
    
}
function speak()
{
    var synth=window.speechSynthesis;
    
    speak_data="Taking your Selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    Webcam.attach(camera);
     setTimeout(function()
     {
         snapshot();
         save();
     },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function snapshot()
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    })
    
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}
