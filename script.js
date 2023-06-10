for (var i=0;i<document.querySelectorAll(".s").length;i++)
document.querySelectorAll("button")[i].addEventListener("click",function (){
    console.log(this.style.color="blue");
    var buttonInnerHTML=this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    switch(buttonInnerHTML){
        case "Drum":
            var audio1=new Audio("Drums.mp3");
            audio1.play();
        break;
        case "Guitar":
            var audio2=new Audio("Guitar.mp3");
            audio2.play();
        break;
        case "Flute":
            var audio3=new Audio("Flute.mp3");
            audio3.play();
        break;
        case "Violin":
            var audio4=new Audio("Violin.mp3");
            audio4.play();
        break;
        default:console.log(buttonInnerHTML);
    }
});
function buttonAnimation(currentKey){
    var a=document.querySelector("."+currentKey);
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");
    },2000);}
