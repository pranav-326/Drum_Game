for (let index = 0; index < document.querySelectorAll(".set button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function() {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(param) {
    makeSound(param.key);
    buttonAnimation(param.key);
    // console.log(param);
});
function makeSound(params) {
    switch (params) {
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}