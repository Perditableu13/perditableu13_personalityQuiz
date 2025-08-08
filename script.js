/*Add your JavaScript here*/
var horrorThrillerScore = 0;
var comedyScore = 0;
var romanceScore = 0;
var actionScore = 0; 

var questionCount = 0; 

var result = document.getElementById("result");

var restartButton = document.getElementById("restart")

/* DOM Elements */

  var q1a1 = document.getElementById("q1a1");
  var q1a2 = document.getElementById("q1a2");
  var q1a3 = document.getElementById("q1a3");
  var q1a4 = document.getElementById("q1a4");

  var q2a1 = document.getElementById("q2a1");
  var q2a2 = document.getElementById("q2a2");
  var q2a3 = document.getElementById("q2a3");
  var q2a4 = document.getElementById("q2a4");

  var q3a1 = document.getElementById("q3a1"); 
  var q3a2 = document.getElementById("q3a2");
  var q3a3 = document.getElementById("q3a3");
  var q3a4 = document.getElementById("q3a4");

  var q4a1 = document.getElementById("q4a1");
  var q4a2 = document.getElementById("q4a2");
  var q4a3 = document.getElementById("q4a3");
  var q4a4 = document.getElementById("q4a4");

  var q5a1 = document.getElementById("q5a1");
  var q5a2 = document.getElementById("q5a2");
  var q5a3 = document.getElementById("q5a3");
  var q5a4 = document.getElementById("q5a4");

  var q6a1 = document.getElementById("q6a1");
  var q6a2 = document.getElementById("q6a2");
  var q6a3 = document.getElementById("q6a3");
  var q6a4 = document.getElementById("q6a4");

q1a1.addEventListener("click", horrorThriller);
q1a2.addEventListener("click", comedy);
q1a3.addEventListener("click", romance);
q1a4.addEventListener("click", action);

q2a1.addEventListener("click", romance);
q2a2.addEventListener("click", action)
q2a3.addEventListener("click", horrorThriller);
q2a4.addEventListener("click", comedy);

q3a1.addEventListener("click", comedy);
q3a2.addEventListener("click", romance);
q3a3.addEventListener("click", action);
q3a4.addEventListener("click", horrorThriller);

q4a1.addEventListener("click", horrorThriller);
q4a2.addEventListener("click", comedy);
q4a3.addEventListener("click", romance);
q4a4.addEventListener("click", action);

q5a1.addEventListener("click", action);
q5a2.addEventListener("click", horrorThriller);
q5a3.addEventListener("click", comedy);
q5a4.addEventListener("click", romance);

q6a1.addEventListener("click", romance);
q6a2.addEventListener("click", comedy);
q6a3.addEventListener("click", horrorThriller);
q6a4.addEventListener("click", action);

restartButton.addEventListener("click", restartQuiz);

// function romance()//

function romance() {
  romanceScore += 1;
  questionCount += 1

  console.log("questionCount = " + questionCount + " romance = " + romanceScore);

  if (questionCount == 6) {
    console.log("The quiz is done!");
    updateResult();
  }

}

// function horrorThriller()//

function horrorThriller() {
  horrorThrillerScore += 1;
  questionCount += 1

  console.log("questionCount = " + questionCount + " horrorThriller = " + horrorThrillerScore);

  if (questionCount == 6) {
    console.log("The quiz is done!");
    updateResult();
  }
  
}

// function comedy()//

function comedy() {
  comedyScore += 1;
  questionCount += 1

  console.log("questionCount = " + questionCount + " comedy = " + comedyScore);

  if (questionCount == 6) {
    console.log("The quiz is done!");
    updateResult();
  }

}

// function action()//

function action() {

  actionScore += 1;
  questionCount += 1

  console.log("questionCount = " + questionCount + " action = " + actionScore);

  if (questionCount == 6) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (actionScore >= 4 || actionScore >=3) {
    result.innerHTML = "Action is your favorite genre!";
    console.log("Action is your favorite genre!");
  } else if (horrorThrillerScore >= 4 || horrorThrillerScore >=3) { 
    result.innerHTML = "Horror/Thriller is your favorite genre!";
    console.log("Horror/Thriller is your favorite genre!");
  } else if (comedyScore >= 4 || comedyScore >=3) {
    result.innerHTML = "Comedy is your favorite genre!";
    console.log("Comedy is your favorite genre!");
  } else if (romanceScore >= 4 || romanceScore >=3) { 
    result.innerHTML = "Romance is your favorite genre!";
    console.log("Romance is your favorite genre!");
  } else if (romanceScore < 2 && comedyScore < 2 && horrorThrillerScore < 2  && actionScore < 2) {
    result.innerHTML = "You like all genres!";
    console.log("You like all genres!");
  } else if (romanceScore >= 2 && comedyScore >= 2){
    result.innerHTML = "You like romcoms!";
    console.log("You like romcoms!");
  } else if (actionScore >= 2 && comedyScore >= 2){
    result.innerHTML = "You like action comedies!";
    console.log("You like action comedies!");
  } 
  
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  console.log("innerHTML reset to Your result is...");
  romanceScore = 0;
  console.log("romanceScore = 0");
  comedyScore = 0;
  console.log("comedyScore = 0")
  horrorThrillerScore = 0;
  console.log("horrorThrillerScore = 0")
  actionScore = 0;
  console.log("actionScore = 0")
  document.querySelectorAll (".answer").forEach (btn =>
    { btn.classList.remove("clicked");
    });
}

document.querySelectorAll (".answer").forEach (btn => 
  { btn.addEventListener("click", () => 
    { btn.classList.add("clicked"); 
    }); 
  });
