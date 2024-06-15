let img1 = document.querySelector("#TeamAMemberImage");
let img2 = document.querySelector("#TeamBMemberImage");
let TeamAName = document.querySelector("#TeamAMemberName");
let TeamBName = document.querySelector("#TeamBMemberName");
let SelectedParticipantA = document.querySelector("#SelectedParticipantA");
let SelectedParticipantB = document.querySelector("#SelectedParticipantB");

let intervalId;
let arraynameA = ['Shiv', 'Aryan', 'Priti', 'Smile', 'Cherry', 'Karthik'];
let ImageArrayA = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];
let ImageArrayB = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'];
let arraynameB = ['Shivani', 'Aryanshi', 'Preetam', 'Naswi', 'Shivansh', 'Manish'];
let randomnumberA = [0, 1, 2, 3, 4, 5];
let randomnumberB = [0, 1, 2, 3, 4, 5];
let SelectedArrayA = [];
let SelectedArrayB = [];
let An1;
let Bn1;

function ChangeParticipant() {
    let n1 = Math.floor(Math.random() * randomnumberA.length);
    let n2 = Math.floor(Math.random() * randomnumberB.length);
    An1 = randomnumberA[n1];
    Bn1 = randomnumberB[n2];
    let A = `images/${ImageArrayA[An1]}.jpg`;
    let B = `images/${ImageArrayB[Bn1]}.jpg`;
    img1.src = A;
    img2.src = B;
    TeamAName.innerText = arraynameA[An1];
    TeamBName.innerText = arraynameB[Bn1];
}

function startChangeParticipant() {
    intervalId = setInterval(ChangeParticipant, 200);
    document.getElementById('Choose').removeAttribute('disabled');
    document.getElementById('StartImageRunning').setAttribute('disabled', 'disabled');
}

//=========================================================================================================
let canRunStopFunction = true; // Flag to control the execution of the stopChangeParticipant function
const delayBetweenStops =  60 * 1000;

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

let countdownInterval; // Declare countdownInterval outside the event listeners to make it accessible

const round1ButtonTimer = document.getElementById('round1ButtonTimer');
round1ButtonTimer.addEventListener('click', function(){
    document.getElementById('digitalClock').innerText = '';
    document.getElementById('digitalClock').style.display = 'block';
    document.getElementById('Closedigitalclock').style.display = 'block';
    document.getElementById('round1ButtonTimer').style.display = 'none';
    let seconds = 5; // Adjust the time as needed for the second round
    countdownInterval = setInterval(() => { // Assign countdownInterval here
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        document.getElementById('digitalClock').innerText = `${formattedMinutes}:${formattedSeconds}`;
        seconds--;
        if (seconds < 0) {
            clearInterval(countdownInterval); // Stop the countdown when it reaches 0
            document.getElementById('digitalClock').style.display = 'none';
            
    document.getElementById('Closedigitalclock').style.display = 'none';
    document.getElementById('round1ButtonTimer').style.display = 'block';
            
        }
    }, 1000);
});

const closeDigitalClockButton = document.getElementById('Closedigitalclock');

closeDigitalClockButton.addEventListener('click', function() {
    clearInterval(countdownInterval); // Clear the interval to stop the countdown timer
    document.getElementById('digitalClock').style.display = 'none'; // Hide the digital clock
    document.getElementById('Closedigitalclock').style.display = 'none';
    document.getElementById('round1ButtonTimer').style.display = 'block';
});


