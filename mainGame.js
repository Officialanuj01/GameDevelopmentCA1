
// creating the necesseary variable that use in this file

const reverseTheCard = document.getElementsByClassName("Front-Back-FacesOfCards");
const userName = document.getElementById("userName")
const nickName = document.getElementById("nickName")
const stageAudio = new Audio("Assests/game stage sound.mp3")
const clickAudio = new Audio("Assests/click sound.wav")
const matchSound = new Audio("Assests/match sound1.mp3")
const backFlip = new Audio("Assests/backFlip Audio.wav")

// Getting the data for userName, and nickname from the localStorage

const userNameFromStroage = localStorage.getItem('name')
const nickNameFromStorage = localStorage.getItem('nickname')


// add EventListener for the background sound of the music

stageAudio.addEventListener("canplaythrough",()=>{
    stageAudio.play()
    stageAudio.volume = 0.5
})


// // setting the username, and nickname into the UI 

userName.textContent = userNameFromStroage
nickName.textContent = nickNameFromStorage


// Setting up the main logic of game

// importent variable for the game logic
let twoCardsMatchArray = []
let score = 0
const card = this

for (let i = 0; i < reverseTheCard.length; i++) {
    reverseTheCard[i].addEventListener('click', function cardClick(){

        // play the sound on the click, and the volume is 70%
        clickAudio.play() 
        clickAudio.volume = 0.7
        
        if (!this.classList.contains('reverse')){
            this.classList.toggle('reverse');

        twoCardsMatchArray.push(this)

        if( twoCardsMatchArray.length==2){
            const firstCard = twoCardsMatchArray[0].getElementsByClassName('backFaceOfCard')[0].src;
            const secondCard = twoCardsMatchArray[1].getElementsByClassName("backFaceOfCard")[0].src


            if(firstCard==secondCard){
                // play the sound when two cards match, and the volume is 100%.
                matchSound.play()
                matchSound.volume = 1

                score++
                twoCardsMatchArray[0].removeEventListener("click",cardClick)
                twoCardsMatchArray[1].removeEventListener("click",cardClick)
                twoCardsMatchArray = []
                
                
            } else{
                // setTimeout is for the delay in card flipping if they don't match
                backFlip.play()
                setTimeout(() => {
                    
                    twoCardsMatchArray[0].classList.remove('reverse')
                    twoCardsMatchArray[1].classList.remove('reverse')
                    twoCardsMatchArray = []
                    
                },500);
                
            }

            

        }
        }
        

    });

}


// // setting up the timer, and conditions for lose, and win

let second = 40;

let timer = setInterval(function (){
    second--;
    document.getElementById("timeRemain").textContent = second;
    
    if(score==8){
        clearInterval(timer)
        localStorage.setItem('score', score)
        stageAudio.pause()
        location.href = './win.html'

    } else if (second == 0){

        clearInterval(timer)

        if (score<=4){
            localStorage.setItem('score', score)
            stageAudio.pause()
            location.href = "./lose.html"
        }
        
        else{
            localStorage.setItem('score', score)
            stageAudio.pause()
            location.href = './win.html'
        }
    }
},1000);



