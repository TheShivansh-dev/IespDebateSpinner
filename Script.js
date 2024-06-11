let img1 = document.querySelector("#TeamAMemberImage");
let img2 = document.querySelector("#TeamBMemberImage");
let TeamAName = document.querySelector("#TEamAMEmberNAme");
let TeamBName = document.querySelector("#TEamBMEmberNAme");
let SelectedParticipantA = document.querySelector("#SelectedParticipantA");
let SelectedParticipantB = document.querySelector("#SelectedParticipantB");

let cimg = document.querySelector("#s3");
let span = document.querySelector("#sp");
let span2 = document.querySelector("#sp3");
let l1 = document.querySelector("#l1");

    let intervalId;
    arraynameA = ['Shiv','Aryan','Priti','Smile','Cherry','Karthik']
    ImageArrayA= ['a1','a2','a3','a4','a5','a6']
    ImageArrayB= ['b1','b2','b3','b4','b5','b6']
    arraynameB = ['Shivani','Aryanshi','Preetam','naswi','tomato','manish']
    randomnumberA = [1,2,3,4,5,6]
    randomnumberB = [1,2,3,4,5,6]
    SelectedArrayA = []
    SelectedArrayB = []
    var An1;
    var Bn1;
    var SelectedALength = SelectedArrayA.length;
    var SelectedBLength = SelectedArrayB.length;
function ChangePArticipant(){
    
for(i=0;i<arraynameA.length;i++){


    let n1 = Math.floor(Math.random()*randomnumberA.length)+1;
    let n2 = Math.floor(Math.random()*randomnumberB.length)+1;
    
    
   
    //  var flag =1;
    //  for(i=0;i<SelectedALength;i++){
    //     if(SelectedArrayA[i]===n1){
    //       flag=2;
    //     }
    //  };
    //  for(i=0;i<SelectedBLength;i++){
    //     if(SelectedArrayB[i]===n1)
    //         {
    //             flag=3;  
    //         }
    //  }

    //  if(flag==1){
    An1 = n1-1;
    Bn1 = n2-1;
     A =  ImageArrayA[An1] + ".jpg";
     B = ImageArrayB[Bn1] + ".jpg";
    img2.src = A;
    img1.src = B;
    TeamAName.innerText = arraynameA[An1];
    TeamBName.innerText = arraynameB[Bn1];
    //  }
    //  else{
    //     continue;
    //  }
}
}



for(i=0;i<SelectedALength;i++){
 console.log('Team A List'+SelectedArrayA[i]);
 console.log('Team B List'+SelectedArrayB[i]);

 };


function startChangeParticipant() {
    intervalId = setInterval(ChangePArticipant, 200);
}

function stopChangeParticipant() {

    
    clearInterval(intervalId);
    SelectedArrayA.push(An1);
    SelectedArrayB.push(Bn1);

    SelectedParticipantA.innerText = arraynameA[An1];
    SelectedParticipantB.innerText = arraynameB[Bn1];
    arraynameA.splice(An1, 1);
    ImageArrayA.splice(An1, 1);
    randomnumberA.splice(An1, 1);
    arraynameB.splice(Bn1, 1);
    ImageArrayB.splice(Bn1, 1);
    randomnumberB.splice(Bn1, 1);
    console.log('Eleement of the updated list')
    var SelectedALength = SelectedArrayA.length;
    var SelectedBLength = SelectedArrayB.length;
    for(i=0;i<SelectedALength;i++){
        console.log(arraynameA[i]);
     };
}

