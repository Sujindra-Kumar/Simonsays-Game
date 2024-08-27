let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function levelUp () {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

let allBtns = document.querySelectorAll(".btn");
for(button of allBtns) {
    button.addEventListener("click", btnPress);
}


function btnPress() {
    // console.log(this);
    let btn1 =this;
    btnFlash(btn1);

    let userColor = btn1.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function checkAns (idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor ="white";
        },150);

        reset();
    }

}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}