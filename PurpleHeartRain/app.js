function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random()*100 + "vw"
    heart.style.animationDuration = Math.random()*2 +3 +"s";

    heart.innerText = "💜";

    document.body.append(heart);


setTimeout(() => {
    heart.remove()
},5000)
}


setInterval((createHeart),1000);



function createCodersClan(){
    const codersClan = document.createElement("div");
    codersClan.classList.add("coders");

    codersClan.style.left = Math.random()*100 + "vw"
    codersClan.style.animationDuration = Math.random()*2 +3 +"s";

    codersClan.innerText = "CodersClan";

    document.body.append(codersClan);


setTimeout(() => {
    codersClan.remove()
},5000)

}

setInterval((createCodersClan),1200);