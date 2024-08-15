let homeScore = document.getElementById("home-score");
console.log(homeScore)
let guestScore = document.getElementById("guest-score");

function add1home(){
    homeScore+=1
    document.getElementById("home-score").textContent = homeScore
    checkLeading()

}

function add2home(){
    homeScore+=2
    document.getElementById("home-score").textContent = homeScore
    checkLeading()

}
function add3home(){
    homeScore+=3
    document.getElementById("home-score").textContent = homeScore
    checkLeading()

}

function add1guest(){
    guestScore+=1
    document.getElementById("guest-score").textContent = guestScore
    checkLeading()

}

function add2guest(){
    guestScore+=2
    document.getElementById("guest-score").textContent = guestScore
    checkLeading()

}
function add3guest(){
    guestScore+=3
    document.getElementById("guest-score").textContent = guestScore
    checkLeading()

}

function checkLeading(){
    if (homeScore > guestScore) {
        document.getElementById("home-score").classList.add("leading")
        document.getElementById("guest-score").classList.remove("leading")
    } 
    else if (guestScore > homeScore) {
        document.getElementById("guest-score").classList.add("leading")
        document.getElementById("home-score").classList.remove("leading")
    } else {
        document.getElementById("home-score").classList.remove("leading")
        document.getElementById("guest-score").classList.remove("leading")
    }
}