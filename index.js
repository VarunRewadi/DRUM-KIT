var drumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumbuttons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function(e) {
        
        
        // var buttoninner = this.innerHTML;
        switch (e.code) {
            case "KeyW":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
            break;

            case "KeyA":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
            break;
            
            case "KeyS":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
            break;
            
            case "KeyD":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
            break;
            
            case "KeyJ":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
            break;
            
            case "KeyK":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
            break;
            
            case "KeyL":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
            break;
            
            default:
                console.log(buttoninner);
            break;
        }

    });
    
}
