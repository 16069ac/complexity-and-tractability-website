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





