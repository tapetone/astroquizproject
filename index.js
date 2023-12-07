//hides intro shows q1//

function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
  }
  
// hides q1 shows q2//

  function question2() {
    if (document.querySelector('input[name="quest1"]:checked') == null) {
        alert("Please select an answer to continue!");
    } else {
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "inline-block";
    }
  }
  
//hides q2 shows q3//

  function question3() {
    if (document.querySelector('input[name="quest2"]:checked') == null) {
        alert("Please select an answer to continue!");
    } else {
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "inline-block";
    }
  }
  
  //hides q3 shows q4//
  function question4() {
    if (document.querySelector('input[name="quest3"]:checked') == null) {
        alert("Please select an answer to continue!");
    } else {
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "inline-block";        
    }
  }
  
  //hides q4 shows q5//
  function question5() {
    if (document.querySelector('input[name="quest4"]:checked') == null) {
        alert("Please select an answer to continue!");
    } else {
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "inline-block";
    }
  }
  
  //hides q5 shows results//
  function results() {
    if (document.querySelector('input[name="quest5"]:checked') == null) {
        alert("Please select an answer to continue!");
    } else {
        document.getElementById("question5").style.display = "none";
        document.getElementById("results").style.display = "inline-block";
    }

  calculateResults();
  
  }
  
  // calculates and displays the results//
  
  function calculateResults() {
    let totalScore = 0;

    // Loop through each question and calculate the total score
    for (let i = 1; i <= 5; i++) {
        totalScore += +getSelectedRadioValue(`quest${i}`);
    }

    // Display the results based on the total score
    let msg;
    if (totalScore >= 40) {
        msg = "40-50: Well done! You have excellent pug knowledge.";
    } else if (totalScore >= 20) {
        msg = "20-39: You have good pug knowledge!";
    } else {
        msg = "0-19: You might want to learn more about pugs.";
    }

    document.getElementById("scoreMessage").innerHTML = "Your score: " + totalScore;
    document.getElementById("resultsMessage").innerHTML = msg;
}

// Function to get the value of the selected radio button
function getSelectedRadioValue(name) {
    const radios = document.querySelectorAll(`input[name="${name}"]:checked`);
    return radios.length > 0 ? radios[0].value : "0";
}
  
  /**
   * calculates and displays the results
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value);
    result = total / 2;
    
    if (result > 2) {
      msg = "You answered mostly c you may have a kinesthetic learning style";
    } else if (result >= 1.5) {
      msg = "You answered mostly b, you may have an auditory learning style";
    } else {
      msg = "You answered mostly a, you may have a visual learning style";
    }
  
    document.getElementById("result").innerHTML = msg
  
  }*/