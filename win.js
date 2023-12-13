
// createing an Array for the random phase
const pharseArr = [
    "Absolute Triumph",
    "Unstoppable Winner",
    "Flawless Victory,",
    "You've Dominated"

]

// creating a random Number in the range of 0-3 to set the index of ramdom pharse
const randomPharse = Math.floor(Math.random()*4)

// creating the impotent variable for this page.
const scoreAndRandomPharse = document.getElementById('scoreAndRandomPharse')
const playAgain = document.getElementById('playAgain');
const quit = document.getElementById("Quit")

// Setting up the winning sound.
const audio = new Audio("Assests/game win audio.wav")
audio.addEventListener('canplaythrough',()=>{
    audio.play()
});


// getting nickname, and score from the localStorage
const nickname = localStorage.getItem('nickname')
const score = localStorage.getItem('score')

// creating element for the UI part
const youWon = document.createElement('h1')
youWon.setAttribute('id','result')
youWon.textContent = "YOU WIN"
scoreAndRandomPharse.append(youWon)

const yourScore = document.createElement('h1')
yourScore.setAttribute('id','yourScore');
yourScore.innerHTML = `Your Score ${score}`
scoreAndRandomPharse.append(yourScore)

const pharse = document.createElement('p')
pharse.setAttribute('class','pharse')
pharse.innerHTML = `${pharseArr[randomPharse]} ${nickname}!`
scoreAndRandomPharse.append(pharse)


// making the  buttons functional
playAgain.addEventListener("click",()=>{
    location.href = "./mainGame.html"
    
})

quit.addEventListener("click",()=>{
    location.href = "./welcome.html"
})

