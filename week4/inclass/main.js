let images = ["q1.jpg", "q2.jpg", "q3.jpg", "q4.jpg"]
let bigImg = document.getElementById("largeImg")
let imageIndex = 0

let switchImage = function(event){
     if(typeof event === "undefined"){
        imageIndex = imageIndex + 1
        if(imageIndex == 4){
            imageIndex = 0
        }
        
        bigImg.src = images[imageIndex]
    }
    else {
        bigImg.src=event.target.src
        imageIndex = parseInt( event.target.id.charAt( 1 ) ) - 1
    }
}

let myInterval = window.setInterval(switchImage, 2000);

document.getElementById("q1").addEventListener("click", switchImage)
document.getElementById("q2").addEventListener("click", switchImage)
document.getElementById("q3").addEventListener("click", switchImage)
document.getElementById("q4").addEventListener("click", switchImage)