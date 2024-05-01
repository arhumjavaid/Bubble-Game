var timer = 60;
var score = 0;
// so we can make a variable global and whenever the 'getNewHit()' function run it automaticaaly store the value then we comapre it
var hitrn; 

function makeBubble(){

    let clutter = " "
    
    for(let i=1; i<=160; i++){
        let rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector(".pbtm").innerHTML = clutter
}

function getNewHit(){
    // hum function sy variable access nh krskty thy aut humy jab number hit ho to compare krwana tha
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn
}

function runTimer(){
    let timerInt = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// hum yhan dirct buuble pr event raise nh krskty thy qky phr humy 160 event listener bnany prty isi liye humny ".pbtm" ko event raise krwaya qky ye 
// bubble ka parent he.. this is done by event bubbling

// Event Bubbling: jispe click kroge us element pr event raise hoga, aur event listener na milny par event element ky parent par listener dhundega,
// waha bhi na milny par event parent ky parent ky parent par listener dhundega

document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    clickedNumber = Number(dets.target.textContent)
    if(clickedNumber === hitrn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
    
})

makeBubble();
runTimer();     
getNewHit();



