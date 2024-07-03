let pointsHome = 0
let pointsGuest = 0 
document.getElementById("points-Home").textContent = pointsHome
document.getElementById("points-Guest").textContent = pointsGuest

function plusOneHome() {
    pointsHome += + 1 
    document.getElementById("points-Home").textContent = pointsHome
}

function plusTwoHome() {
    pointsHome += + 2 
    document.getElementById("points-Home").textContent = pointsHome
}

function plusThreeHome() {
    pointsHome += + 3
    document.getElementById("points-Home").textContent = pointsHome
}

function plusOneGuest() {
    pointsGuest += + 1
    document.getElementById("points-Guest").textContent = pointsGuest
} 

function plusTwoGuest() {
    pointsGuest += + 2
    document.getElementById("points-Guest").textContent = pointsGuest
} 

function plusThreeGuest() {
    pointsGuest += + 3
    document.getElementById("points-Guest").textContent = pointsGuest
} 

function newGame() {
    pointsHome = 0 
    document.getElementById("points-Home").textContent = pointsHome
    pointsGuest = 0
    document.getElementById("points-Guest").textContent = pointsGuest
    
}
