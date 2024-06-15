let img1 = document.querySelector("#TeamAMemberImage");
let img2 = document.querySelector("#TeamBMemberImage");
let TeamAName = document.querySelector("#TeamAMemberName");
let TeamBName = document.querySelector("#TeamBMemberName");
let SelectedParticipantA = document.querySelector("#SelectedParticipantA");
let SelectedParticipantB = document.querySelector("#SelectedParticipantB");

let cimg = document.querySelector("#s3");
let span = document.querySelector("#sp");
let span2 = document.querySelector("#sp3");
let l1 = document.querySelector("#l1");

    let intervalId;
    arraynameB = ['र҇V ᔕiᑎ𝙶ᕼ','🦋ᵐꜞᔆᔆ᭄𝕽࿐ ➷','Tani','Govind Shukla','Karthik','Shivansh Upadhyay']
    ImageArrayB= ['b1','b2','b3','b4','b5','b6']
    arraynameA = ['Smile ☺️','Siddhi','Laiba Pearl','Rockstar Mahii','Shrii 💎','Ram']
    ImageArrayA=  ['a1','a2','a3','a4','a5','a6']
    randomnumberA = [1,2,3,4,5,6]
    randomnumberB = [1,2,3,4,5,6]
    SelectedArrayA = []
    SelectedArrayB = []
    var An1;
    var Bn1;
    var SelectedALength = SelectedArrayA.length;
    var SelectedBLength = SelectedArrayB.length;
function ChangePArticipant(){
    var img = document.getElementById('TeamBRedPunch');
    var imgp = document.getElementById('TeamABluePunch');
    img.style.display = 'none';
    imgp.style.display = 'none';
        img.style.right = '268px';
        img.style.transform = 'scale(1)';
        imgp.style.left = '260px';
        imgp.style.transform = 'scale(1.3)';
for(i=0;i<arraynameA.length;i++){
    let n1 = Math.floor(Math.random()*randomnumberA.length)+1;
    let n2 = Math.floor(Math.random()*randomnumberB.length)+1;
    An1 = n1-1;
    Bn1 = n2-1;
    A = `images/${ImageArrayA[An1]}.jpg`;
    B = `images/${ImageArrayB[Bn1]}.jpg`;
    img1.src = A;
    img2.src = B;
    TeamAName.innerText = arraynameA[An1];
    TeamBName.innerText = arraynameB[Bn1];
}
}

for(i=0;i<SelectedALength;i++){
 console.log('Team A List'+SelectedArrayA[i]);
 console.log('Team B List'+SelectedArrayB[i]);
 };

function startChangeParticipant() {
    intervalId = setInterval(ChangePArticipant, 200);
    document.getElementById('Choose').removeAttribute('disabled');
    document.getElementById('StartImageRunning').setAttribute('disabled', 'disabled');
}

let canRunStopFunction = true; // Flag to control the execution of the stopChangeParticipant function
const delayBetweenStops = 3* 1000;

function stopChangeParticipant() {
    if (canRunStopFunction) {
    clearInterval(intervalId);
    if(arraynameA[An1] !== undefined && arraynameA[An1] !==null){
        SelectedArrayA.push(An1);
        SelectedParticipantA.innerText = arraynameA[An1];
        arraynameA.splice(An1, 1);
        ImageArrayA.splice(An1, 1);
        randomnumberA.splice(An1, 1);
    }
    if(arraynameB[Bn1] !== undefined && arraynameB[Bn1] !==null){
    SelectedArrayB.push(Bn1);    
    SelectedParticipantB.innerText = arraynameB[Bn1];
    arraynameB.splice(Bn1, 1);
    ImageArrayB.splice(Bn1, 1);
    randomnumberB.splice(Bn1, 1);
    }
    //===========================================================================
    
    //===========================================================================
    canRunStopFunction = false;
    setTimeout(() => {
    document.getElementById('StartImageRunning').removeAttribute('disabled');
    document.getElementById('Choose').setAttribute('disabled', 'disabled');
        canRunStopFunction = true;
    }, delayBetweenStops);
}
else{
}
}


const animations = document.querySelectorAll('.Animation');

// Loop through each element and add a class to trigger the animation
animations.forEach(animation => {
    setTimeout(() => {
        animation.classList.add('rotated');
    }, 1000); // Start animation after 1 second
});


let countdownInterval; // Declare countdownInterval outside the event listeners to make it accessible

const round1ButtonTimer = document.getElementById('round1ButtonTimer');

round1ButtonTimer.addEventListener('click', function(){
    var img = document.getElementById('TeamBRedPunch');
    var img1 = document.getElementById('TeamABluePunch');
    img.style.display = 'none';
    img1.style.display = 'none';
        img.style.right = '268px';
        img.style.transform = 'scale(1)';
        img1.style.left = '260px';
        img1.style.transform = 'scale(1.3)';
    document.getElementById('digitalClock').innerText = '';

    document.getElementById('digitalClockdiv').style.display = 'block';
    document.getElementById('DigitalClockTimeBlurBackground').style.display = 'block';
    document.getElementById('Closedigitalclock').style.display = 'inline-block';
    document.getElementById('round1ButtonTimer').style.display = 'none';
  

    let seconds = 150; // Adjust the time as needed for the second round
    countdownInterval = setInterval(() => { // Assign countdownInterval here
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        document.getElementById('digitalClock').innerText = `${formattedMinutes}:${formattedSeconds}`;
        seconds--;
        if (seconds < 10) {
            digitalClock.style.color = 'red';
            digitalClock.style.textShadow = '2px 2px 5px rgb(238, 110, 110)';
            // text-shadow: 2px 2px 5px lightblue; 
        } else {
            digitalClock.style.color = ''; // Reset to default color
        }
        if (seconds < 0) {
            clearInterval(countdownInterval); // Stop the countdown when it reaches 0
            document.getElementById('digitalClockdiv').style.display = 'none';
            document.getElementById('DigitalClockTimeBlurBackground').style.display = 'none';
            
    document.getElementById('Closedigitalclock').style.display = 'none';
    document.getElementById('round1ButtonTimer').style.display = 'inline-block';
            
        }
    }, 1000);
});

const closeDigitalClockButton = document.getElementById('Closedigitalclock');

closeDigitalClockButton.addEventListener('click', function() {
    clearInterval(countdownInterval); // Clear the interval to stop the countdown timer
    document.getElementById('digitalClockdiv').style.display = 'none'; // Hide the digital clock
    document.getElementById('Closedigitalclock').style.display = 'none';
    document.getElementById('round1ButtonTimer').style.display = 'inline-block';
    document.getElementById('DigitalClockTimeBlurBackground').style.display = 'none';
});


//===========================
// document.getElementById('Choose').addEventListener('click', function() {
//     document.getElementById('TeamBRedPunch').style.display = 'block';
//     document.getElementById('TeamABluePunch').style.display = 'block';
//    var img = document.getElementById('TeamBRedPunch');
//    img.style.transition = 'all 3s ease';
//    img.style.right = 607+  'px';
   
//    img.style.transform = 'scale(2.5)';
//    var img1 = document.getElementById('TeamABluePunch');
//    img1.style.transition = 'all 3s ease';
//    img1.style.left = 605+  'px';
//    img1.style.transform = 'scale(2.5)';
// });

//==========================================================================================
document.getElementById('Choose').addEventListener('click', function() {
    var img = document.getElementById('TeamBRedPunch');
    var img1 = document.getElementById('TeamABluePunch');
    
    // Set display to block first
    img.style.display = 'block';
    img1.style.display = 'block';

    // Use setTimeout to introduce a small delay
    setTimeout(function() {
        // Apply transition and transformation
        img.style.transition = 'all 3s ease';
        img.style.right = '609px';
        img.style.transform = 'scale(2.5)';

        img1.style.transition = 'all 3s ease';
        img1.style.left = '609px';
        img1.style.transform = 'scale(2.5)';
    }, 10); // Small delay to ensure the display change is rendered
});

//=========================For Answerig Timer==================================
const round1AnswerTimer = document.getElementById('round1AnswerTimer');

round1AnswerTimer.addEventListener('click', function(){
    document.getElementById('digitalClock').innerText = '';
    document.getElementById('digitalClockdiv').style.display = 'block';
    document.getElementById('DigitalClockTimeBlurBackground').style.display = 'block';
    document.getElementById('Closedigitalclock').style.display = 'inline-block';
    document.getElementById('round1ButtonTimer').style.display = 'none';
  

    let seconds = 60; // Adjust the time as needed for the second round
    countdownInterval = setInterval(() => { // Assign countdownInterval here
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        document.getElementById('digitalClock').innerText = `${formattedMinutes}:${formattedSeconds}`;
        seconds--;
        if (seconds < 10) {
            digitalClock.style.color = 'red';
            digitalClock.style.textShadow = '2px 2px 5px rgb(238, 110, 110)';
        } else {
            digitalClock.style.color = ''; // Reset to default color
        }
        if (seconds < 0) {
            clearInterval(countdownInterval); // Stop the countdown when it reaches 0
            document.getElementById('digitalClockdiv').style.display = 'none';
            document.getElementById('DigitalClockTimeBlurBackground').style.display = 'none';
            
    document.getElementById('Closedigitalclock').style.display = 'none';
    document.getElementById('round1ButtonTimer').style.display = 'inline-block';
            
        }
    }, 1000);
});
