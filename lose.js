// createing an Array for the random phase
const pharseArr = [
    "Better luck next time,",
    "Practice more to be better",
    "Tough luck",
    "Give one more chance to yourself"

]

// creating a random Number in the range of 0-3 to set the index of ramdom pharse.
const randomPharse = Math.floor(Math.random()*4)

// creating the impotent variable for this page.
const scoreAndRandomPharse = document.getElementById('scoreAndRandomPharse')
const playAgain = document.getElementById('playAgain');
const quit = document.getElementById('Quit');



// Setting up the winning sound..
const audio = new Audio("Assests/game lose audio.wav")
audio.addEventListener('canplaythrough',()=>{
    audio.play()
});


// getting nickname, and score from the localStorage
const nickname = localStorage.getItem('nickname')
const score = localStorage.getItem('score')


// creating element for the UI part.

const youLost = document.createElement('h1')
youLost.setAttribute('id','result')
youLost.textContent = "YOU LOSE"
scoreAndRandomPharse.append(youLost)

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
    location.href = "./index.html"
})
