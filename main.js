// Minecraft fishing sim

//Variables to store html
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

//Global Variables
let character ="null";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;


// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);
steveImgEl.addEventListener("pointerenter", steveOver);
steveImgEl.addEventListener("pointerleave", steveOff);
alexImgEl.addEventListener("pointerenter", alexOver);
alexImgEl.addEventListener("pointerleave", alexOff);


function steveOver() {
    steveImgEl.classList.add("over")
    alexImgEl.classList.add("notover")
}
function steveOff() {
    steveImgEl.classList.remove("over")
    alexImgEl.classList.remove("notover")

}
function alexOver() {
    alexImgEl.classList.add("over")
    steveImgEl.classList.add("notover")
}
function alexOff() {
    alexImgEl.classList.remove("over")
    steveImgEl.classList.remove("notover")

}

function selectSteve() {
    //Update Active Border
    if (character === "Steve") {
        steveImgEl.classList.remove("active");
        character = "null";
    } else {
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    // Update Character selection variable
    character = "Steve";
} 
}

function selectAlex() {
    //Update Active Border
    if (character === "Alex") {
        alexImgEl.classList.remove("active");
        character = "null";
    } else {
    alexImgEl.classList.add("active");
    steveImgEl.classList.remove("active");
    // Update Character selection variable
    character = "Alex";
} 
}
function fishOnce() {
    // Test current character
    if (character === "Steve") {
        // Use steve probability
        let randNum = Math.random();
        if (randNum < 0.7) {
            imgResultEl.src = "img/Raw-Cod.png"
            numCod++;
            numCodEl.innerHTML = numCod;
        } else if (randNum < 0.9) {
            imgResultEl.src = "img/Raw-Salmon.png"
            numSalmon++;
            numSalmonEl.innerHTML = numSalmon;
        } else if (randNum < 0.95) {
            imgResultEl.src = "img/Tropical-Fish.png"
            numTropical++;
            numTropicalEl.innerHTML = numTropical;
        } else {
            imgResultEl.src = "img/Pufferfish.png"
            numPuffer++;
            numPufferEl.innerHTML = numPuffer;
        }
    } else if (character === "Alex") {
        // Use alex probability
        let randNum = Math.random();
        if (randNum < 0.1) {
            imgResultEl.src = "img/Raw-Cod.png"
            numCod++;
            numCodEl.innerHTML = numCod;
        } else if (randNum < 0.2) {
            imgResultEl.src = "img/Raw-Salmon.png"
            numSalmon++;
            numSalmonEl.innerHTML = numSalmon;
        } else if (randNum < 0.5) {
            imgResultEl.src = "img/Tropical-Fish.png"
            numTropical++;
            numTropicalEl.innerHTML = numTropical;
        } else {
            imgResultEl.src = "img/Pufferfish.png"
            numPuffer++;
            numPufferEl.innerHTML = numPuffer;
        }
    } else if (character === "null") {
        alert("Please select character")
    }
}