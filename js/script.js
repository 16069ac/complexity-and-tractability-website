const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})






document.getElementById('container').onchange = function(){
  var question1 = Number(document.getElementById("question1Input").value);

  var question2 = Number(document.getElementById("question2Input").value);

  var question3 = Number(document.getElementById("question3Input").value);

  var question4 = Number(document.getElementById("question4Input").value);

  var question5 = Number(document.getElementById("question5Input").value);

  document.getElementById("question1Output").innerHTML = question1;

  document.getElementById("question2Output").innerHTML = question2;

  document.getElementById("question3Output").innerHTML = question3;

  document.getElementById("question4Output").innerHTML = question4;

  document.getElementById("question5Output").innerHTML = question5;

  var results = 0;

  if (question1 == 1){
    results ++;
  }
  
  if (question2 == 3){
    results ++;
  }
  
  if (question3 == 1){
    results ++;
  }
  
  if (question4 == 2){
    results ++;
  }
  
  if (question5 == 2){
    results ++;
  }
  


}






 function submit(){
  var question1 = Number(document.getElementById("question1Input").value);

  var question2 = Number(document.getElementById("question2Input").value);

  var question3 = Number(document.getElementById("question3Input").value);

  var question4 = Number(document.getElementById("question4Input").value);

  var question5 = Number(document.getElementById("question5Input").value);


  var results = 0;

  if (question1 == 1){
    results ++;
  }
  
  if (question2 == 3){
    results ++;
  }
  
  if (question3 == 1){
    results ++;
  }
  
  if (question4 == 2){
    results ++;
  }
  
  if (question5 == 2){
    results ++;
  }
  
  var grade = results * 20 + "%";
  

  document.getElementById("score").innerHTML = grade;
}

var hints = {
  "Question1" : ["Algorithm", "Steps", "1"],
  "Question2" : ["Time", "Seconds", "3"],
  "Question3" : ["Time", "Years", "1"],
  "Question4" : ["Something", "Quicken", "2"],
  "Question5" : "5 seconds"
}


var q1 = 0;

function hintsQuestion1(){
if (q1 == 0){
  var hint1 = hints["Question1"][0];
  document.getElementById("hintsQ1Output").innerHTML = hint1; 
}

if (q1 == 1){
  var hint2 = hints["Question1"][1];
  document.getElementById("hintsQ1Output").innerHTML = hint2; 
}
if (q1 == 2){
  var hint3 = hints["Question1"][2];
  document.getElementById("hintsQ1Output").innerHTML = hint3; 
}

q1 ++;
}

var q2 = 0;

function hintsQuestion2(){
if (q2 == 0){
  var hint1 = hints["Question2"][0];
  document.getElementById("hintsQ2Output").innerHTML = hint1; 
}

if (q2 == 1){
  var hint2 = hints["Question2"][1];
  document.getElementById("hintsQ2Output").innerHTML = hint2; 
}
if (q2 == 2){
  var hint3 = hints["Question2"][2];
  document.getElementById("hintsQ2Output").innerHTML = hint3; 
}

q2 ++;
}

var q3 = 0;

function hintsQuestion3(){
if (q3 == 0){
  var hint1 = hints["Question3"][0];
  document.getElementById("hintsQ3Output").innerHTML = hint1; 
}

if (q3 == 1){
  var hint2 = hints["Question3"][1];
  document.getElementById("hintsQ3Output").innerHTML = hint2; 
}
if (q3 == 2){
  var hint3 = hints["Question3"][2];
  document.getElementById("hintsQ3Output").innerHTML = hint3; 
}

q3 ++;
}

var q4 = 0;

function hintsQuestion4(){
if (q4 == 0){
  var hint1 = hints["Question4"][0];
  document.getElementById("hintsQ4Output").innerHTML = hint1; 
}

if (q4 == 1){
  var hint2 = hints["Question4"][1];
  document.getElementById("hintsQ4Output").innerHTML = hint2; 
}
if (q4 == 2){
  var hint3 = hints["Question4"][2];
  document.getElementById("hintsQ4Output").innerHTML = hint3; 
}

q4 ++;
}

var q5 = 0;

function hintsQuestion5(){
if (q5 == 0){
  var hint1 = hints["Question5"];
  document.getElementById("hintsQ5Output").innerHTML = hint1; 
}


}



