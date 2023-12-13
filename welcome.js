// // calling/creating all the variables those are importent for this page 

// const nameInput = document.getElementById("name");
// const nickNameInput = document.getElementById("nickname");
// const startBTN = document.getElementById("startBTN");

// // we are using localStorage to save the userName, and nickname.

// nameInput.addEventListener('change', () => {
//     localStorage.setItem('name', nameInput.value);
// });

// nickNameInput.addEventListener('change', () => {
//     localStorage.setItem('nickname', nickNameInput.value);
// });


// // setting the audio

// const welcomeAudio = new Audio("./Assests/welcome page sound.mp3")
// document.addEventListener("click", () => {
//     welcomeAudio.play();
// });


// // setting up the start button functional

// startBTN.addEventListener("click", () => {
//     if (nameInput.value.trim() && nickNameInput.value.trim()) {
//         welcomeAudio.pause()
//         location.href = "./instruction.html";
//     } else {
//         if (!nameInput.value.trim()&&!nickNameInput.value) {
//             alert("Please enter name and nickname");
//         } else if (nickNameInput.value.trim() == '') {
//             alert("Enter a nickname for you");
//         } else {
//             alert("Enter the name");
//         }
//     }
// });

